import * as React from 'react';
import classnames from 'classnames';
import IScroll from './iscroll.js';
import model, { Times, TimeData } from './model';
import './style';

let ID = 0;

interface IProps {
  format: [string, string, string];
  data: TimeData[];
  interval?: number;
  defaultDay: Date;
  onChange: (data: Date) => void;
  className?: string;
}

interface IState {
  props: IProps;
  days: string[]; // ['5月1日 周二', '5月2日 周三', ...]
  currentDayValue: Date;
  currentDayIndex: number;
  times: Times; // { '00': ['00', '15', '30', '45'], '01': [...] }
  HHList: string[]; // ['00', '01', '02', '03', ...]
  currentHHValue: string; // '02'
  currentHHIndex: number;
  MMList: string[]; // ['00', '15', '30', '45', ...]
  currentMMValue: string; // '15'
  currentMMIndex: number;
  format: [string, string, string]; // ['M月d日 周wk', 'h点', 'm分']
}

class TimePicker extends React.PureComponent<IProps, IState> {
  public static getDerivedStateFromProps(props: IProps, state: IState) {
    if (state.props.data !== props.data) {
      // 天列表
      const days = model.getDayList(props.data, props.format);

      // 时间数据
      const times = model.getStateByTime(props.defaultDay, props.data);

      return {
        days, // 天的列表
        props: {
          ...state.props,
          data: props.data,
        },
        ...times,
      };
    }
    return null;
  }

  private dayId: string;
  private iScrollDay: any;
  private iScrollDayY: number = 0;
  private HHId: string;
  private iScrollHH: any;
  private iScrollHHY: number = 0;
  private MMId: string;
  private iScrollMM: any;
  private iScrollMMY: number = 0;
  private realScrollRowHeight: number;
  private needCalcList: Record<string, boolean> = {};

  constructor(props: IProps) {
    super(props);

    this.state = {
      props,
      days: [],
      currentDayValue: new Date(),
      currentDayIndex: 0,
      times: { HHList: [], MMList: {} },
      HHList: [],
      currentHHValue: '',
      currentHHIndex: 0,
      MMList: [],
      currentMMValue: '',
      currentMMIndex: 0,
      format: this.props.format,
    };

    // 定义id
    this.dayId = `x-time-picker-day_${++ID}`;
    this.HHId = `x-time-picker-hh_${++ID}`;
    this.MMId = `x-time-picker-mm_${++ID}`;

    // 时间节点
    const HHList = [];
    for (let i = 0; i < 24; i++) {
      HHList.push(`00${i}`.substr(-2));
    }

    // 时间间隔，必须能被60除尽
    let interval = this.props.interval || 60;
    // 边界处理
    if (interval < 0 || interval > 60) {
      interval = 60;
    }
    if (60 % interval !== 0) {
      throw new Error('The props of "interval" must can be divided into 60.');
    }
    for (const data of props.data) {
      if (!model.isZeroTime(data.day)) {
        throw new Error('The "day" in "data" must a date with zero hour, zero minute and zero second.');
      }
    }
    if (props.defaultDay.getMinutes() % interval !== 0) {
      throw new Error('The "minute" in "defaultDay" must can be divided into "interval".');
    }
    const MMList = [];
    for (let i = 0; i < 60; i += interval) {
      MMList.push(`00${i}`.substr(-2));
    }

    // 每一,行的高度（即li的高度）
    // todo 换用其他方式计算高度
    this.realScrollRowHeight = (window as any).rem ? ((window as any).rem / 100) * 70 : 70;

    // todo HHList和MMList为一天24小时中的小时和分钟可选项，收到getTimeRange方法中去处理
    model.HHList = HHList;
    model.MMList = MMList;
  }

  public componentDidMount() {
    // 天列表
    const days = model.getDayList(this.props.data, this.props.format);

    // 时间数据
    const state = model.getStateByTime(this.props.defaultDay, this.props.data);

    this.setState(
      {
        days, // 天的列表
        currentDayValue: state.currentDayValue,
        currentDayIndex: state.currentDayIndex,
        times: state.times,
        HHList: state.HHList,
        currentHHValue: state.currentHHValue,
        currentHHIndex: state.currentHHIndex,
        MMList: state.MMList,
        currentMMValue: state.currentMMValue,
        currentMMIndex: state.currentMMIndex,
      },
      this.initScrolls,
    );
  }

  public componentWillUnmount() {
    this.destroyScrolls();
  }

  public componentDidUpdate(props: IProps) {
    if (props.data !== this.props.data) {
      this.refreshScrolls();
    }
  }

  // 刷新滚动条
  public refresh() {
    this.refreshScrolls();
  }

  // 恢复默认时间
  public reset() {
    const state = model.getStateByTime(this.props.defaultDay, this.props.data);
    this.setState(
      {
        ...state,
      },
      this.refreshScrolls,
    );
  }

  // 获取时间
  public getTime() {
    const day = this.state.currentDayValue;
    const h = this.state.currentHHValue;
    const m = this.state.currentMMValue;
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), Number(h), Number(m));
  }

  // 设置时间
  public setTime(time: Date) {
    const state = model.getStateByTime(time, this.props.data);
    this.setState(
      {
        ...state,
      },
      this.refreshScrolls,
    );
  }

  public render() {
    const { data, format, interval, defaultDay, onChange, className, ...otherProps } = this.props;

    const css = classnames('x-time-picker', className);

    return (
      <div {...otherProps} className={css}>
        <sup className="x-time-picker__mask-t" />
        <sup className="x-time-picker__mask-b" />
        {this.renderDayList()}
        {this.renderHHList()}
        {this.renderMMList()}
      </div>
    );
  }

  // 初始化滚动插件
  private initScrolls = () => {
    // 初始化日期的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollDay && this.dayId) {
      const Key = 'Day';
      this.iScrollDay = new IScroll(`#${this.dayId}`, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      });
      // 如果默认的index不是0，滚动它
      if (this.state.currentDayIndex !== 0) {
        this.iScrollDay.scrollTo(0, -this.realScrollRowHeight * this.state.currentDayIndex, 0);
      }
      // 事件监听
      this.iScrollDay.on('scrollStart', () => {
        this.iScrollDayY = this.iScrollDay.y;
        this.needCalcList[Key] = true;
      });
      this.iScrollDay.on('scrollEnd', () => {
        if (typeof this.iScrollDayY === 'undefined' || Math.abs(this.iScrollDayY - this.iScrollDay.y) === 0) {
          return;
        }
        this.scrollEndCalc(this.iScrollDay, Key);
      });
    }
    // 初始化小时的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollHH && this.HHId) {
      const Key = 'HHList';
      this.iScrollHH = new IScroll(`#${this.HHId}`, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      });
      // 如果默认的index不是0，滚动它
      if (this.state.currentHHIndex !== 0) {
        this.iScrollHH.scrollTo(0, -this.realScrollRowHeight * this.state.currentHHIndex, 0);
      }
      // 事件监听
      this.iScrollHH.on('scrollStart', () => {
        this.iScrollHHY = this.iScrollHH.y;
        this.needCalcList[Key] = true;
      });
      this.iScrollHH.on('scrollEnd', () => {
        if (typeof this.iScrollHHY === 'undefined' || Math.abs(this.iScrollHHY - this.iScrollHH.y) === 0) {
          return;
        }
        this.scrollEndCalc(this.iScrollHH, Key);
      });
    }
    // 初始化分钟的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollMM && this.MMId && this.props.interval !== 60 && this.props.interval !== 0) {
      const Key = 'MM';
      this.iScrollMM = new IScroll(`#${this.MMId}`, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      });
      // 如果默认的index不是0，滚动它
      if (this.state.currentMMIndex !== 0) {
        this.iScrollMM.scrollTo(0, -this.realScrollRowHeight * this.state.currentMMIndex, 0);
      }
      // 事件监听
      this.iScrollMM.on('scrollStart', () => {
        this.iScrollMMY = this.iScrollMM.y;
        this.needCalcList[Key] = true;
      });
      this.iScrollMM.on('scrollEnd', () => {
        if (typeof this.iScrollMMY === 'undefined' || Math.abs(this.iScrollMMY - this.iScrollMM.y) === 0) {
          return;
        }
        this.scrollEndCalc(this.iScrollMM, Key);
      });
    }
  }

  // 刷新滚动条
  private refreshScrolls = () => {
    if (this.iScrollDay) {
      this.iScrollDay.refresh();
      this.iScrollDay.scrollTo(0, -this.realScrollRowHeight * this.state.currentDayIndex, 300);
    }
    if (this.iScrollHH) {
      this.iScrollHH.refresh();
      this.iScrollHH.scrollTo(0, -this.realScrollRowHeight * this.state.currentHHIndex, 300);
    }
    if (this.iScrollMM) {
      this.iScrollMM.refresh();
      this.iScrollMM.scrollTo(0, -this.realScrollRowHeight * this.state.currentMMIndex, 300);
    }
  }

  // 渲染天列表
  private renderDayList() {
    return (
      <div className="x-time-picker__day-list" id={this.dayId}>
        <ul>
          {this.state.days.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
    );
  }

  // 渲染小时列表
  private renderHHList() {
    const hFormat = this.state.format[1] || 'h点';
    return (
      <div className="x-time-picker__hh-list" id={this.HHId}>
        <ul>
          {this.state.HHList.map((i, index) => {
            let val = `${i}点`;
            if (/(h+)/.test(hFormat)) {
              val = hFormat.replace(RegExp.$1, i);
            }
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }

  // 渲染分钟列表
  private renderMMList() {
    if (this.props.interval === 60 || this.props.interval === 0) {
      return null;
    }
    const mFormat = this.state.format[2] || 'm分';
    return (
      <div className="x-time-picker__mm-list" id={this.MMId}>
        <ul>
          {this.state.MMList.map((i, index) => {
            let val = `${i}分`;
            if (/(m+)/.test(mFormat)) {
              val = mFormat.replace(RegExp.$1, i);
            }
            return <li key={index}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }

  // 滚动结束后的计算
  private scrollEndCalc = (scroll: any, type: string) => {
    if (this.needCalcList[type]) {
      const row = Math.floor(-scroll.y / this.realScrollRowHeight + 0.5);
      const scrollTop = row * this.realScrollRowHeight;
      scroll.scrollTo(0, -scrollTop, 500);
      this.needCalcList[type] = false;

      // 如果是日期滚动，更新小时和分钟数据
      if (type === 'Day') {
        const times = model.transTimeList(model.getTimeList(this.props.data[row]));
        let hIndex = times.HHList.indexOf(this.state.currentHHValue);
        const hChange = hIndex === -1;
        hIndex = hIndex > -1 ? hIndex : 0;

        let mIndex = times.MMList[times.HHList[hIndex]].indexOf(this.state.currentMMValue);
        mIndex = mIndex > -1 ? mIndex : 0;

        // 如果小时变了，那分钟就恢复到默认第一个值
        // 比如 4点45分 切换到另一天，另一天没有4点，则可能取了个0点
        // 这个时候如果分钟不变，时间就变成了0点45分，其实是没意义的，不如直接展示0点0分
        if (hChange) {
          mIndex = 0;
        }

        const hValue = times.HHList[hIndex];
        const mList = times.MMList[hValue];
        const mValue = mList[mIndex];

        this.setState(
          {
            times,
            currentDayIndex: row,
            currentDayValue: this.props.data[row].day,
            HHList: times.HHList,
            currentHHIndex: hIndex,
            currentHHValue: hValue,
            MMList: mList,
            currentMMIndex: mIndex,
            currentMMValue: mValue,
          },
          () => {
            if (this.iScrollHH) {
              this.iScrollHH.refresh();
              this.iScrollHH.scrollTo(0, -hIndex * this.realScrollRowHeight, 0);
            }
            if (this.iScrollMM) {
              this.iScrollMM.refresh();
              this.iScrollMM.scrollTo(0, -mIndex * this.realScrollRowHeight, 0);
            }
            this.onChange();
          },
        );
      } else if (type === 'HHList') {
        // 如果滚动的是小时，更新小时
        // 分钟如果有相同的值，不动，不然则恢复到默认第一个值
        const h = this.state.HHList[row];
        const mList = this.state.times.MMList[h];
        let mIndex = mList.indexOf(this.state.currentMMValue);
        mIndex = mIndex > -1 ? mIndex : 0;
        this.setState(
          {
            currentHHIndex: row,
            currentHHValue: h,
            MMList: mList,
            currentMMIndex: mIndex,
            currentMMValue: mList[mIndex],
          },
          () => {
            if (this.iScrollMM) {
              this.iScrollMM.refresh();
              this.iScrollMM.scrollTo(0, -mIndex * this.realScrollRowHeight, 0);
            }
            this.onChange();
          },
        );
      } else if (type === 'MM') {
        // 如果滚动的分钟，更新自身的值
        this.setState(
          {
            currentMMIndex: row,
            currentMMValue: this.state.MMList[row],
          },
          this.onChange,
        );
      }
    }
  }

  // 值改变的事件
  private onChange = () => {
    const date = this.getTime();
    if (this.props.onChange) {
      this.props.onChange(date);
    }
  }

  // 删除全部iScroll
  private destroyScrolls = () => {
    if (this.iScrollDay && this.iScrollDay.destroy) {
      this.iScrollDay.destroy();
    }
    if (this.iScrollHH && this.iScrollHH.destroy) {
      this.iScrollHH.destroy();
    }
    if (this.iScrollMM && this.iScrollMM.destroy) {
      this.iScrollMM.destroy();
    }
  }
}

export default TimePicker;
