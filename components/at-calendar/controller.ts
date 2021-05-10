import * as React from 'react'
import { dateFormat, offsetHours, stringToDate } from '../__utils/transfer'
import Alert from '../alert'
import Loading from '../loading'
import Toast from '../toast'

interface IData {
  isHoliday?: boolean
  price?: number
  rent?: string[] | string[][]
  revert?: string[] | string[][]
  disabled?: 'ALL' | 'PART' | 'DISABLED' // 全天不可租 = ALL 或斜线的样式， 部分不可租 = PART, DISABLED 置灰
  badge?: string // 标记，位于时间圆的右上角
}

interface IChooseTipsData {
  day: Date
  tips: string
  hideAt?: 'chooseEnd' | 'never'
}

interface IProps {
  readonly?: boolean
  title?: string
  onClose: () => void
  disabledBefore?: Date
  monthRange?: [Date, Date]
  chooseRange?: [Date, Date]
  onSubmit: (start: Date, end: Date) => void
  onDayClick?: (day: Date, type: 'rent' | 'revert') => any
  lockRentTime?: boolean
  checkTimeRange?: boolean | ((t1: Date, t2: Date) => React.ReactNode) // 若为true时，系统验证租期，否则自定义验证租期范围的提示
  headerTips?: (t1: Date | undefined, t2: Date | undefined) => string // 提示信息
  onHeaderTipsClick?: (t1: Date | undefined, t2: Date | undefined) => void
  footerTips?: (t1: Date | undefined, t2: Date | undefined) => string // 自定义页脚的提示信息
  data?: { [time: number]: IData }
  minHours?: number
  maxHours?: number
  defaultRentTime?: string
  defaultRevertTime?: string
  chooseTips?: (t1: Date) => IChooseTipsData[] // 当用户选择完成第一天时，可设置在另一天提示相关内容
  extend?: 'before' | 'after' | 'both' // 在已经有范围时，点击范围之外的时间是否为延长
  supportDarkMode?: boolean
}

interface IState {
  chooseRange: [Date | undefined, Date | undefined]
  preChooseRange: [Date | undefined, Date | undefined]
  timePickerVisible: boolean
  timePickerTimes: [Date | undefined, Date | undefined]
  timePickerTips: Record<string, string>
  preTimePickerTimes: [Date | undefined, Date | undefined]
  timePickerData: {
    day: Date
    times?: string[] | string[][]
  }
  headerTips: string
  footerTips: string
  chooseType: string
  chooseTipsData: IChooseTipsData[]
  chooseTipsVisible: boolean
}

class Controller extends React.PureComponent<IProps, IState> {
  timePickerRef: React.RefObject<any> = React.createRef()

  constructor(props: IProps) {
    super(props)

    // 验证data数据，即key需要是00:00整点时间
    const days = props.data ? Object.keys(props.data).sort() : []
    days.forEach((day: any) => {
      const d = new Date(Number(day))
      if (!this.isZeroTime(d)) {
        throw new Error('data数据错误')
      }
    })

    // 验证monthRange数据，两个时间必须是00:00的整点时间
    if (this.props.monthRange) {
      if (!this.isZeroTime(this.props.monthRange[0])) {
        throw new Error('monthRange数据错误')
      }
      if (!this.isZeroTime(this.props.monthRange[1])) {
        throw new Error('monthRange数据错误')
      }
    }

    const { defaultRentTime, defaultRevertTime } = this.props
    if (defaultRentTime && !/^\d{2}:\d{2}$/.test(defaultRentTime)) {
      throw new Error('defaultRentTime数据错误')
    }
    if (defaultRevertTime && !/^\d{2}:\d{2}$/.test(defaultRevertTime)) {
      throw new Error('defaultRevertTime数据错误')
    }

    // 初始化state
    let cr1 = props.chooseRange ? props.chooseRange[0] : void 0
    let cr2 = props.chooseRange ? props.chooseRange[1] : void 0
    if (cr1 && cr2 && cr1.valueOf() >= cr2.valueOf()) {
      throw new Error('chooseRange数据错误')
    }
    if (this.props.lockRentTime && (!cr1 || !cr2)) {
      throw new Error('chooseRange不能为空')
    }
    if (cr1 !== void 0) {
      cr1 = new Date(cr1.getFullYear(), cr1.getMonth(), cr1.getDate())
    }
    if (cr2 !== void 0) {
      cr2 = new Date(cr2.getFullYear(), cr2.getMonth(), cr2.getDate())
    }
    const tr1 = props.chooseRange ? props.chooseRange[0] : void 0
    const tr2 = props.chooseRange ? props.chooseRange[1] : void 0
    const chooseType = cr1 && cr2 ? 'revert' : cr1 && !cr2 ? 'rent' : ''
    this.state = {
      chooseRange: [cr1, cr2],
      preChooseRange: [cr1, cr2],
      timePickerVisible: false,
      timePickerTimes: [tr1, tr2],
      headerTips: this.props.headerTips ? this.props.headerTips(tr1, tr2) : '',
      footerTips: this.props.footerTips ? this.props.footerTips(tr1, tr2) : '',
      preTimePickerTimes: [tr1, tr2],
      timePickerTips: {},
      timePickerData: { day: new Date(2000, 1, 1) },
      chooseType,
      chooseTipsData: tr1 && props.chooseTips ? props.chooseTips(tr1) : [],
      chooseTipsVisible: false,
    }

    // 验证参数
    if (props.disabledBefore) {
      if (!this.isZeroTime(props.disabledBefore)) {
        throw new Error('disabledBefore的时间必须为整点时间')
      }
    }
  }

  componentDidMount() {
    let cur = document.querySelector('#x-calendar-body .active-first')
    if (!cur) {
      cur = document.querySelector('#x-calendar-body .month-day:not(.empty):not(.disabled)')
    }
    if (cur) {
      setTimeout(() => {
        const top = (cur as any).offsetTop || 0
        const height = (cur as any).offsetHeight || 0
        document.querySelector('#x-calendar-body')!.scrollTop = top - height / 3
      }, 1)
    }
    if (this.props.lockRentTime && this.props.chooseTips && this.state.chooseRange[0]) {
      const data = this.props.chooseTips(this.state.chooseRange[0])
      this.setState({
        chooseTipsVisible: data.length > 0,
        chooseTipsData: data,
      })
    }
  }

  // 公开方法，替换范围
  replaceRange = (range: [Date, Date]) => {
    const rentDay = stringToDate(dateFormat(range[0], 'yyyyMMdd'))
    const revertDay = stringToDate(dateFormat(range[1], 'yyyyMMdd'))

    this.setState({
      chooseRange: [rentDay, revertDay],
      preChooseRange: [...this.state.chooseRange] as any,
      timePickerTimes: range,
      preTimePickerTimes: [...this.state.timePickerTimes] as any,
      footerTips: this.props.footerTips ? this.props.footerTips(range[0], range[1]) : '',
      timePickerVisible: false,
    })
  }

  // 判断时间范围内是否都为可用
  protected checkTimeRangeCanUsed(
    range: [Date | undefined, Date | undefined],
    ignoreRange?: [Date | undefined, Date | undefined],
  ) {
    const ignore = [...(ignoreRange || [])]
    if (ignore[0] && !ignore[1]) {
      ignore[1] = ignore[0]
    }
    if (!range[0] || !range[1] || range[0] > range[1]) {
      return false
    }
    if (!this.isZeroTime(range[0]) || !this.isZeroTime(range[1])) {
      return false
    }
    const data = this.props.data
    if (!data) {
      return false
    }
    let current = range[0]
    const target = range[1].valueOf()
    while (current.valueOf() <= target) {
      // 如果该天已经选中了，则不做数据检查，直接认为该天是可用的
      if (!this.isBtweenRange(current, ignore as any)) {
        if (!data[current.valueOf()] || data[current.valueOf()].disabled) {
          return false
        }
      }
      const d = new Date(current.valueOf())
      current = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
    }
    return true
  }

  // 判断时间范围内是否有假期
  protected checkTimeRangeHasHoliday(range: [Date | undefined, Date | undefined]) {
    if (!range[0] || !range[1] || range[0] > range[1]) {
      return false
    }
    if (!this.isZeroTime(range[0]) || !this.isZeroTime(range[1])) {
      return false
    }
    const data = this.props.data
    if (!data) {
      return false
    }
    let current = range[0]
    const target = range[1].valueOf()
    while (current.valueOf() <= target) {
      const cur = data[current.valueOf()]
      if (cur && cur.isHoliday) {
        return true
      }

      const d = new Date(current.valueOf())
      current = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
    }
    return false
  }

  // 根据months获取一个月份列表
  protected getMonthList(): Date[] {
    let first: any = null
    let last: any = null
    if (this.props.monthRange) {
      first = this.props.monthRange[0]
      last = this.props.monthRange[1]
    } else {
      if (!this.props.data) {
        throw new Error('monthRange和data数据必须要有其一')
      }
      let days = Object.keys(this.props.data).sort()
      if (!days.length) {
        days = ['1577808000000']
      }
      first = new Date(parseInt(days[0], 10))
      last = new Date(parseInt(days[days.length - 1], 10))
    }
    let fy = first.getFullYear()
    let fm = first.getMonth()
    const ly = last.getFullYear()
    const lm = last.getMonth()

    const res: Date[] = []
    while (fy !== ly || fm !== lm) {
      res.push(new Date(fy, fm))
      if (fm < 11) {
        fm++
      } else {
        fm = 0
        fy++
      }
    }
    res.push(new Date(ly, lm))
    return res
  }

  // 判断一个日期是否在chooseRange范围内
  protected isBtweenChooseRange(date: Date): boolean {
    return this.isBtweenRange(date, this.state.chooseRange)
  }

  // 判断一个日期是否在一个范围内
  protected isBtweenRange(date: Date, range: [Date | undefined, Date | undefined]): boolean {
    if (range[0] === void 0 || range[1] === void 0) {
      return false
    }
    if (date < range[0] || date > range[1]) {
      return false
    }
    return true
  }

  // 日期点击
  protected async onDayClick(day: Date, data: IData) {
    const range: [Date | undefined, Date | undefined] = [
      this.state.chooseRange[0],
      this.state.chooseRange[1],
    ]
    const times: [Date | undefined, Date | undefined] = [
      this.state.timePickerTimes[0],
      this.state.timePickerTimes[1],
    ]

    let type: 'rent' | 'revert' = 'rent'

    if (this.props.lockRentTime) {
      if (range[0]!.valueOf() > day.valueOf()) {
        Toast('取车时间不可修改')
        return
      }
      range[1] = day
      times[1] = void 0
      type = 'revert'
    } else {
      if (range[0] && range[1]) {
        // 处理extend
        if (
          (this.props.extend === 'before' || this.props.extend === 'both') &&
          range[0].valueOf() > day.valueOf()
        ) {
          range[0] = day
          times[0] = void 0
          type = 'rent'
        } else if (
          (this.props.extend === 'after' || this.props.extend === 'both') &&
          range[1].valueOf() < day.valueOf()
        ) {
          range[1] = day
          times[1] = void 0
          type = 'revert'
        } else {
          range[0] = day
          range[1] = void 0
          times[0] = void 0
          times[1] = void 0
          type = 'rent'
        }
      } else if (range[0] && range[1] === void 0) {
        if (range[0] > day) {
          range[0] = day
          range[1] = void 0
          times[0] = void 0
          times[1] = void 0
          type = 'rent'
        } else {
          range[1] = day
          times[1] = void 0
          type = 'revert'
        }
      } else {
        range[0] = day
        range[1] = void 0
        times[0] = void 0
        times[1] = void 0
        type = 'rent'
      }
    }

    if (
      (type === 'rent' && data.rent && data.rent.length) === 0 ||
      (type === 'revert' && data.revert && data.revert.length === 0)
    ) {
      Toast('该天没有可选的时间')
      return
    }

    if (range[0] && range[1] && !this.checkTimeRangeCanUsed(range, this.state.chooseRange)) {
      Alert({
        desc: '您选的期间内有不可租用时间，请重新选择。',
        btns: [{ name: '好的' }],
      })
      return
    }

    let timePickerTips = {}
    if (this.props.onDayClick) {
      Loading()
      try {
        const res = await this.props.onDayClick(day, type)
        timePickerTips = res || {}
      } catch (err) {}
      Loading.hide()
    }
    this.setState({
      chooseRange: range,
      timePickerVisible: true,
      timePickerTimes: times,
      timePickerTips: timePickerTips,
      timePickerData: { day, times: type === 'rent' ? data.rent : data.revert },
      chooseType: type,
    })
  }

  // 清空选择的日期
  protected clearChooseRange = () => {
    if (this.props.lockRentTime) {
      const pr = this.props.chooseRange
      if (pr) {
        const cr1 = new Date(pr[0].getFullYear(), pr[0].getMonth(), pr[0].getDate())
        const cr2 = new Date(pr[1].getFullYear(), pr[1].getMonth(), pr[1].getDate())
        this.setState({
          chooseRange: [cr1, cr2],
          preChooseRange: [cr1, cr2],
          timePickerTimes: [pr[0], pr[1]],
          headerTips: this.props.headerTips ? this.props.headerTips(pr[0], pr[1]) : '',
          footerTips: this.props.footerTips ? this.props.footerTips(pr[0], pr[1]) : '',
          preTimePickerTimes: [pr[0], pr[1]],
        })
      } else {
        Toast('当前租期不可清空')
      }
      return
    }
    this.setState({
      chooseRange: [void 0, void 0],
      preChooseRange: [void 0, void 0],
      timePickerTimes: [void 0, void 0],
      headerTips: this.props.headerTips ? this.props.headerTips(void 0, void 0) : '',
      footerTips: this.props.footerTips ? this.props.footerTips(void 0, void 0) : '',
      preTimePickerTimes: [void 0, void 0],
      chooseTipsData: [],
      chooseTipsVisible: false,
      chooseType: '',
    })
  }

  // 取消日期选择
  protected timePickerCancel = () => {
    this.setState({
      chooseRange: [...this.state.preChooseRange] as any,
      timePickerTimes: [...this.state.preTimePickerTimes] as any,
      timePickerVisible: false,
    })
  }

  // 日期选择下一步
  protected timePickerNext = async () => {
    if (!this.timePickerRef.current) {
      return
    }
    const max = this.props.maxHours || 99999
    const min = this.props.minHours || 0
    const times: [Date | undefined, Date | undefined] = [
      this.state.timePickerTimes[0],
      this.state.timePickerTimes[1],
    ]
    if (this.state.chooseType === 'rent') {
      times[0] = this.timePickerRef.current.getTime()
      if (this.props.extend !== 'before' && this.props.extend !== 'both') {
        times[1] = void 0
      }
      if (this.props.chooseTips && times[0]) {
        const data = this.props.chooseTips(times[0])
        this.setState({
          chooseTipsData: data,
          chooseTipsVisible: data.length > 0,
        })
      }
    } else {
      times[1] = this.timePickerRef.current.getTime()
    }
    // 如果需要本地验证租期范围的话
    if (times[0] && times[1]) {
      let tips: any = null

      // 该值为true时，系统提示验证结果
      if (this.props.checkTimeRange === true) {
        const offset = offsetHours(times[0], times[1])
        if (offset <= 0 || offset < min || offset > max) {
          let tipsText = ''
          // 最短租期提示
          if (min <= 0) {
            tipsText = '租期选择错误'
          } else {
            if (min % 24 === 0) {
              tipsText = `${min / 24}天起租`
            } else if (min) {
              tipsText = `${min}小时起租`
            }
          }

          // 最长租期提示
          if (max !== 99999) {
            // max默认值为99999
            if (max % 24 === 0) {
              tipsText += `，最长可租${max / 24}天`
            } else if (max) {
              tipsText += `，最长可租${max}小时`
            }
          }

          tips = React.createElement('p', null, [
            tipsText,
            React.createElement('br', { key: 'br' }),
            '请重新设置还车时间',
          ])
        }
      } else if (typeof this.props.checkTimeRange === 'function' && times[0] && times[1]) {
        // 如果checkTimeRange是function，调用
        tips = this.props.checkTimeRange(times[0], times[1])
      }

      // 提示用户
      if (tips) {
        const resetTime = await Alert.async({
          title: '租期限制',
          desc: tips,
          btns: [
            { name: '取消', type: 'default', value: false },
            { name: '设置还车时间', value: true },
          ],
        })

        // 如果按了取消按钮，关闭时间选择器，恢复之前的时间
        if (!resetTime) {
          this.timePickerCancel()
        }
        return
      }
    }
    this.setState({
      preChooseRange: [...this.state.chooseRange] as any,
      preTimePickerTimes: [...times] as any,
      timePickerTimes: times,
      headerTips: this.props.headerTips ? this.props.headerTips(times[0], times[1]) : '',
      footerTips: this.props.footerTips ? this.props.footerTips(times[0], times[1]) : '',
      timePickerVisible: false,
    })
    if (this.state.chooseType === 'revert' && this.state.chooseTipsVisible) {
      this.setState({ chooseTipsVisible: false })
    }
  }

  // 时间改变
  protected onTimeChange = () => {}

  // 确认提交
  protected onSubmit = () => {
    const times = this.state.timePickerTimes
    if (times[0] === void 0) {
      Toast('请选择取车时间')
      return
    }
    if (times[1] === void 0) {
      Toast('请选择还车时间')
      return
    }
    this.props.onSubmit(times[0], times[1])
  }

  // 判断是否为整点时间
  private isZeroTime(date?: Date | undefined) {
    if (!date) {
      return true
    }
    return date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() === 0
  }
}

;(Controller as any).defaultProps = {
  maxHours: 99999,
  checkTimeRange: true,
}

export default Controller
