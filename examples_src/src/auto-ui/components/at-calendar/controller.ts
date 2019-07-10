import * as React from 'react'
import { dateFormat, offsetHours, stringToDate } from '../__utils/transfer'
import Alert from '../alert'
import Loading from '../loading'
import Toast from '../toast'

interface IData {
  isHoliday: boolean;
  price: number;
  rent: string[] | string[][];
  revert: string[] | string[][];
  disabled?: 'ALL' | 'PART' | 'DISABLED'; // 全天不可租 = ALL 或斜线的样式， 部分不可租 = PART, DISABLED 置灰
}

interface IProps {
  readonly?: boolean;
  title?: string;
  onClose: () => void;
  disabledBefore?: Date;
  months: [Date, Date];
  chooseRange?: [Date, Date];
  onSubmit: (start: Date, end: Date) => void;
  onDayClick?: (day: Date, type: string) => any;
  lock?: 'start' | 'end';
  data?: {
    [time: number]: IData;
  };
  minHours?: number;
  maxHours?: number;
  extend?: 'before' | 'after' | 'both'; // 在已经有范围时，点击范围之外的时间是否为延长
}

interface IState {
  chooseRange: [Date | null, Date | null];
  preChooseRange: [Date | null, Date | null];
  timePickerVisible: boolean;
  timePickerTimes: [Date | null, Date | null];
  timePickerTips: Record<string, string>;
  preTimePickerTimes: [Date | null, Date | null];
  timePickerData: {
    day: Date;
    times?: string[] | string[][];
  };
  chooseType: string;
}

class Controller extends React.PureComponent<IProps, IState> {
  protected timePickerRef: React.RefObject<any> = React.createRef();

  constructor(props: IProps) {
    super(props);

    // 验证data数据，即key需要是00:00整点时间
    const days = props.data ? Object.keys(props.data).sort() : [];
    days.forEach((day: any) => {
      const d = new Date(Number(day));
      if (!this.isZeroTime(d)) {
        throw new Error('data数据错误');
      }
    });

    // 验证months数据，两个时间必须是00:00的整点时间
    if (!this.props.months[0] || !this.isZeroTime(this.props.months[0])) {
      throw new Error('months数据错误');
    }
    if (!this.props.months[1] || !this.isZeroTime(this.props.months[1])) {
      throw new Error('months数据错误');
    }

    // 初始化state
    let cr1 = props.chooseRange ? props.chooseRange[0] : null;
    let cr2 = props.chooseRange ? props.chooseRange[1] : null;
    if (cr1 && cr2 && cr1.valueOf() >= cr2.valueOf()) {
      throw new Error('chooseRange数据错误');
    }
    if (this.props.lock && (!cr1 || !cr2)) {
      throw new Error('chooseRange不能为空');
    }
    if (cr1 !== null) {
      cr1 = new Date(cr1.getFullYear(), cr1.getMonth(), cr1.getDate());
    }
    if (cr2 !== null) {
      cr2 = new Date(cr2.getFullYear(), cr2.getMonth(), cr2.getDate());
    }
    const tr1 = props.chooseRange ? props.chooseRange[0] : null;
    const tr2 = props.chooseRange ? props.chooseRange[1] : null;
    this.state = {
      chooseRange: [cr1, cr2],
      preChooseRange: [cr1, cr2],
      timePickerVisible: false,
      timePickerTimes: [tr1, tr2],
      preTimePickerTimes: [tr1, tr2],
      timePickerTips: {},
      timePickerData: { day: new Date(2000, 1, 1) },
      chooseType: '',
    };

    // 验证参数
    if (props.disabledBefore) {
      if (!this.isZeroTime(props.disabledBefore)) {
        throw new Error('disabledBefore的时间必须为整点时间');
      }
    }
  }

  public componentDidMount() {
    let cur = document.querySelector('#x-calendar-body .active-first');
    if (!cur) {
      cur = document.querySelector('#x-calendar-body .month-day:not(.empty):not(.disabled)');
    }
    if (cur) {
      setTimeout(() => {
        const top = (cur as any).offsetTop || 0;
        const height = (cur as any).offsetHeight || 0;
        document.querySelector('#x-calendar-body')!.scrollTop = top - height / 3;
      }, 1);
    }
  }

  // 公开方法，替换范围
  public replaceRange = (range: [Date, Date]) => {
    const rentDay = stringToDate(dateFormat(range[0], 'yyyyMMdd'));
    const revertDay = stringToDate(dateFormat(range[1], 'yyyyMMdd'));

    this.setState({
      chooseRange: [rentDay, revertDay],
      preChooseRange: [...this.state.chooseRange] as any,
      timePickerTimes: range,
      preTimePickerTimes: [...this.state.timePickerTimes] as any,
      timePickerVisible: false,
    });
  };

  // 根据months获取一个月份列表
  protected getMonthList(): Date[] {
    const first = this.props.months[0];
    const last = this.props.months[1];
    let fy = first.getFullYear();
    let fm = first.getMonth();
    const ly = last.getFullYear();
    const lm = last.getMonth();

    const res: Date[] = [];
    while (fy !== ly || fm !== lm) {
      res.push(new Date(fy, fm));
      if (fm < 11) {
        fm++;
      } else {
        fm = 0;
        fy++;
      }
    }
    res.push(new Date(ly, lm));
    return res;
  }

  // 判断一个日期是否在chooseRange范围内
  protected isBtweenChooseRange(date: Date): boolean {
    return this.isBtweenRange(date, this.state.chooseRange);
  }

  // 判断一个日期是否在一个范围内
  protected isBtweenRange(date: Date, range: [Date | null, Date | null]): boolean {
    if (range[0] === null || range[1] === null) {
      return false;
    }
    if (date < range[0] || date > range[1]) {
      return false;
    }
    return true;
  }

  // 日期点击
  protected async onDayClick(day: Date, data: IData) {
    const range: [Date | null, Date | null] = [this.state.chooseRange[0], this.state.chooseRange[1]];
    const times: [Date | null, Date | null] = [this.state.timePickerTimes[0], this.state.timePickerTimes[1]];

    let type: string = 'rent';

    if (this.props.lock === 'start') {
      if (range[0]!.valueOf() > day.valueOf()) {
        Toast('取车时间不可修改');
        return;
      }
      range[1] = day;
      times[1] = null;
      type = 'revert';
    } else if (this.props.lock === 'end') {
      if (range[1]!.valueOf() < day.valueOf()) {
        Toast('还车时间不可修改');
        return;
      }
      range[0] = day;
      times[0] = null;
      type = 'rent';
    } else {
      if (range[0] && range[1]) {
        // 处理extend
        if ((this.props.extend === 'before' || this.props.extend === 'both') && range[0].valueOf() > day.valueOf()) {
          range[0] = day;
          times[0] = null;
          type = 'rent';
        } else if (
          (this.props.extend === 'after' || this.props.extend === 'both') &&
          range[1].valueOf() < day.valueOf()
        ) {
          range[1] = day;
          times[1] = null;
          type = 'revert';
        } else {
          range[0] = day;
          range[1] = null;
          times[0] = null;
          times[1] = null;
          type = 'rent';
        }
      } else if (range[0] && range[1] === null) {
        if (range[0] > day) {
          range[0] = day;
          range[1] = null;
          times[0] = null;
          times[1] = null;
          type = 'rent';
        } else {
          range[1] = day;
          times[1] = null;
          type = 'revert';
        }
      } else {
        range[0] = day;
        range[1] = null;
        times[0] = null;
        times[1] = null;
        type = 'rent';
      }
    }

    if ((type === 'rent' && data.rent.length) === 0 || (type === 'revert' && data.revert.length === 0)) {
      Toast('该天没有可选的时间');
      return;
    }

    if (range[0] && range[1] && !this.checkTimeRangeCanUsed(range, this.state.chooseRange)) {
      Alert({
        desc: '您选的期间内有不可租用时间，请重新选择。',
        btns: [{ name: '好的' }],
      });
      return;
    }

    let timePickerTips = {};
    if (this.props.onDayClick) {
      Loading();
      try {
        const res = await this.props.onDayClick(day, type);
        timePickerTips = res || {};
      } catch (err) {}
      Loading.hide();
    }
    this.setState({
      chooseRange: range,
      timePickerVisible: true,
      timePickerTimes: times,
      timePickerTips: timePickerTips,
      timePickerData: { day, times: type === 'rent' ? data.rent : data.revert },
      chooseType: type,
    });
  }

  // 清空选择的日期
  protected clearChooseRange = () => {
    if (this.props.lock) {
      Toast('当前租期不可清空');
      return;
    }
    this.setState({
      chooseRange: [null, null],
      preChooseRange: [null, null],
      timePickerTimes: [null, null],
      preTimePickerTimes: [null, null],
    });
  };

  // 取消日期选择
  protected timePickerCancel = () => {
    this.setState({
      chooseRange: [...this.state.preChooseRange] as any,
      timePickerTimes: [...this.state.preTimePickerTimes] as any,
      timePickerVisible: false,
    });
  };

  // 日期选择下一步
  protected timePickerNext = async () => {
    if (!this.timePickerRef.current) {
      return;
    }
    const max = this.props.maxHours || 99999;
    const min = this.props.minHours || 0;
    const times: [Date | null, Date | null] = [this.state.timePickerTimes[0], this.state.timePickerTimes[1]];
    if (this.state.chooseType === 'rent') {
      times[0] = this.timePickerRef.current.getTime();
      if (this.props.extend !== 'before' && this.props.extend !== 'both') {
        times[1] = null;
      }
    } else {
      times[1] = this.timePickerRef.current.getTime();
    }
    if (times[0] && times[1]) {
      const offset = offsetHours(times[0], times[1]);
      if (offset <= 0 || offset < min || offset > max) {
        let tips = '';

        // 最短租期提示
        if (min <= 0) {
          tips = '租期选择错误';
        } else {
          if (min % 24 === 0) {
            tips = `${min / 24}天起租`;
          } else if (min) {
            tips = `${min}小时起租`;
          }
        }

        // 最长租期提示
        if (max !== 99999) {
          // max默认值为99999
          if (max % 24 === 0) {
            tips += `，最长可租${max / 24}天`;
          } else if (max) {
            tips += `，最长可租${max}小时`;
          }
        }

        // 提示用户
        const resetTime = await Alert.async({
          title: '租期限制',
          desc: React.createElement('p', null, [tips, React.createElement('br', { key: 'br' }), '请重新设置还车时间']),
          btns: [{ name: '取消', type: 'default', value: false }, { name: '设置还车时间', value: true }],
        });

        // 如果按了取消按钮，关闭时间选择器，恢复之前的时间
        if (!resetTime) {
          this.timePickerCancel();
        }
        return;
      }
    }
    this.setState({
      preChooseRange: [...this.state.chooseRange] as any,
      preTimePickerTimes: [...times] as any,
      timePickerTimes: times,
      timePickerVisible: false,
    });
  };

  // 时间改变
  protected onTimeChange = () => {};

  // 确认提交
  protected onSubmit = () => {
    const times = this.state.timePickerTimes;
    if (times[0] === null) {
      Toast('请选择取车时间');
      return;
    }
    if (times[1] === null) {
      Toast('请选择还车时间');
      return;
    }
    this.props.onSubmit(times[0], times[1]);
  };

  // 判断是否为整点时间
  private isZeroTime(date?: Date | null) {
    if (!date) {
      return true;
    }
    return date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() === 0;
  }

  // 判断时间范围内是否都为可用
  private checkTimeRangeCanUsed(range: [Date | null, Date | null], ignoreRange: [Date | null, Date | null]) {
    const ignore = [...ignoreRange];
    if (ignore[0] && !ignore[1]) {
      ignore[1] = ignore[0];
    }
    if (!range[0] || !range[1] || range[0] > range[1]) {
      return false;
    }
    if (!this.isZeroTime(range[0]) || !this.isZeroTime(range[1])) {
      return false;
    }
    const data = this.props.data;
    if (!data) {
      return false;
    }
    let current = range[0];
    const target = range[1].valueOf();
    while (current.valueOf() <= target) {
      // 如果在该天已经选中了，则不做数据检查，直接认为该天是可用的
      if (!this.isBtweenRange(current, ignore as any)) {
        if (!data[current.valueOf()] || data[current.valueOf()].disabled) {
          return false;
        }
      }
      const d = new Date(current.valueOf());
      current = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    }
    return true;
  }
}

(Controller as any).defaultProps = {
  maxHours: 99999,
};

export default Controller;
