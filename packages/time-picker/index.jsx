import './style'
import React from 'react'
import '../__libs/dateFormat'
import ignore from '../__libs/ignoreProps'
import classnames from 'classnames'
import IScroll from 'iscroll/build/iscroll-lite'
import event from './event'

let ID = 0

// component.
class TimePicker extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      props,
      days: [],
      times: [],
      HH: [],
      MM: [],
      format: this.props.format
    }

    // 定义id
    this.dayId = 'x-time-picker-day_' + (++ID)
    this.HHId = 'x-time-picker-hh_' + (++ID)
    this.MMId = 'x-time-picker-mm_' + (++ID)

    // 时间节点
    const HH = []
    for (let i = 0; i < 24; i++) {
      HH.push(('00' + i).substr(-2))
    }

    // 时间间隔，必须能被60除尽
    const interval = this.props.interval || 15
    if (60 / interval !== ~~(60 / interval)) {
      throw new Error('The props of "interval" must can be divided into 60.')
    }
    const MM = []
    for (let i = 0; i < 60; i += interval) {
      MM.push(('00' + i).substr(-2))
    }

    // 每一行的高度（即li的高度）
    this.realScrollRowHeight = window.rem ? window.rem / 100 * 70 : 70

    event.HH = HH
    event.MM = MM
  }

  componentDidMount() {
    // 天列表
    const days = event.getDayList(this.props.data, this.props.format)

    // 时间数据
    const state = event.getStateByTime(this.props.defaultDay, this.props.data)

    this.setState({
      days, // 天的列表
      ...state,
    }, this.initScrolls)
  }

  componentWillUnmount() {
    this.destroyScrolls()
  }

  componentDidUpdate(props) {
    if (props.data !== this.props.data) {
      this.refreshScrolls()
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.props.data !== props.data) {
      // 天列表
      const days = event.getDayList(props.data, props.format)

      // 时间数据
      const times = event.getStateByTime(props.defaultDay, props.data)

      return {
        props: {
          ...state.props,
          data: props.data,
        },
        days, // 天的列表
        ...times,
      }
    }
    return null
  }

  // 刷新滚动条
  refresh() {
    this.refreshScrolls()
  }

  // 恢复默认时间
  reset() {
    const state = event.getStateByTime(this.props.defaultDay, this.props.data)
    this.setState({
      ...state,
    }, this.refreshScrolls)
  }

  // 获取时间
  getTime() {
    const day = this.state.dayValue
    const h = this.state.HHValue
    const m = this.state.MMValue
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), h - 0, m - 0)
  }

  // 设置时间
  setTime(t) {
    const state = event.getStateByTime(t, this.props.data)
    this.setState({
      ...state,
    }, this.refreshScrolls)
  }

  // 初始化滚动插件
  initScrolls = () => {
    // 初始化日期的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollDay && this.dayId) {
      const Key = 'Day'
      this.iScrollDay = new IScroll('#' + this.dayId, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      })
      // 如果默认的index不是0，滚动它
      if (this.state.dayIndex !== 0) {
        this.iScrollDay.scrollTo(0, -this.realScrollRowHeight * this.state.dayIndex, 0)
      }
      // 事件监听
      this.iScrollDay.on('scrollStart', () => {
        this.iScrollDayY = this.iScrollDay.y
        this['needCalc' + Key] = true
      })
      this.iScrollDay.on('scrollEnd', () => {
        if (typeof this.iScrollDayY === 'undefined' ||
          Math.abs(this.iScrollDayY - this.iScrollDay.y) === 0) {
          return
        }
        this.scrollEndCalc(this.iScrollDay, Key)
      })
    }
    // 初始化小时的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollHH && this.HHId) {
      const Key = 'HH'
      this.iScrollHH = new IScroll('#' + this.HHId, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      })
      // 如果默认的index不是0，滚动它
      if (this.state.HHIndex !== 0) {
        this.iScrollHH.scrollTo(0, -this.realScrollRowHeight * this.state.HHIndex, 0)
      }
      // 事件监听
      this.iScrollHH.on('scrollStart', () => {
        this.iScrollHHY = this.iScrollHH.y
        this['needCalc' + Key] = true
      })
      this.iScrollHH.on('scrollEnd', () => {
        if (typeof this.iScrollHHY === 'undefined' ||
          Math.abs(this.iScrollHHY - this.iScrollHH.y) === 0) {
          return
        }
        this.scrollEndCalc(this.iScrollHH, Key)
      })
    }
    // 初始化分钟的滚动，并在添加滚动开始和滚动结束事件
    if (!this.iScrollMM && this.MMId) {
      const Key = 'MM'
      this.iScrollMM = new IScroll('#' + this.MMId, {
        disablePointer: true,
        disableTouch: false,
        disableMouse: false,
      })
      // 如果默认的index不是0，滚动它
      if (this.state.MMIndex !== 0) {
        this.iScrollMM.scrollTo(0, -this.realScrollRowHeight * this.state.MMIndex, 0)
      }
      // 事件监听
      this.iScrollMM.on('scrollStart', () => {
        this.iScrollMMY = this.iScrollMM.y
        this['needCalc' + Key] = true
      })
      this.iScrollMM.on('scrollEnd', () => {
        if (typeof this.iScrollMMY === 'undefined' ||
          Math.abs(this.iScrollMMY - this.iScrollMM.y) === 0) {
          return
        }
        this.scrollEndCalc(this.iScrollMM, Key)
      })
    }
  }

  // 刷新滚动条
  refreshScrolls = () => {
    if (this.iScrollDay) {
      this.iScrollDay.refresh()
      this.iScrollDay.scrollTo(0, -this.realScrollRowHeight * this.state.dayIndex, 300)
    }
    if (this.iScrollHH) {
      this.iScrollHH.refresh()
      this.iScrollHH.scrollTo(0, -this.realScrollRowHeight * this.state.HHIndex, 300)
    }
    if (this.iScrollMM) {
      this.iScrollMM.refresh()
      this.iScrollMM.scrollTo(0, -this.realScrollRowHeight * this.state.MMIndex, 300)
    }
  }

  // 滚动结束后的计算
  scrollEndCalc = (scroll, type) => {
    if (this['needCalc' + type]) {
      const row = Math.floor(-scroll.y / this.realScrollRowHeight + 0.5)
      const scrollTop = row * this.realScrollRowHeight
      scroll.scrollTo(0, -scrollTop, 500)
      this['needCalc' + type] = false

      // 如果是日期滚动，更新小时和分钟数据
      if (type === 'Day') {
        const times = event.transTimeList(event.getTimeList(this.props.data[row]))
        let hIndex = times.HH.indexOf(this.state.HHValue)
        let hChange = hIndex === -1
        hIndex = hIndex > -1 ? hIndex : 0

        let mIndex = times[times.HH[hIndex]].indexOf(this.state.MMValue)
        mIndex = mIndex > -1 ? mIndex : 0

        // 如果小时变了，那分钟就恢复到默认第一个值
        // 比如 4点45分 切换到另一天，另一天没有4点，则可能取了个0点
        // 这个时候如果分钟不变，时间就变成了0点45分，其实是没意义的，不如直接展示0点0分
        if (hChange) {
          mIndex = 0
        }

        const hValue = times.HH[hIndex]
        const mList = times[hValue]
        const mValue = mList[mIndex]

        this.setState({
          times,
          dayIndex: row,
          dayValue: this.props.data[row].day,
          HH: times.HH,
          HHIndex: hIndex,
          HHValue: hValue,
          MM: mList,
          MMIndex: mIndex,
          MMValue: mValue,
        }, () => {
          if (this.iScrollHH) {
            this.iScrollHH.refresh()
            this.iScrollHH.scrollTo(0, -hIndex * this.realScrollRowHeight, 0)
          }
          if (this.iScrollMM) {
            this.iScrollMM.refresh()
            this.iScrollMM.scrollTo(0, -mIndex * this.realScrollRowHeight, 0)
          }
          this.onChange()
        })
      }
      // 如果滚动的是小时，更新小时
      // 分钟如果有相同的值，不动，不然则恢复到默认第一个值
      else if (type === 'HH') {
        const h = this.state.HH[row]
        const mList = this.state.times[h]
        let mIndex = mList.indexOf(this.state.MMValue)
        mIndex = mIndex > -1 ? mIndex : 0
        this.setState({
          HHIndex: row,
          HHValue: h,
          MM: mList,
          MMIndex: mIndex,
          MMValue: mList[mIndex],
        }, () => {
          if (this.iScrollMM) {
            this.iScrollMM.refresh()
            this.iScrollMM.scrollTo(0, -mIndex * this.realScrollRowHeight, 0)
          }
          this.onChange()
        })
      }
      // 如果滚动的分钟，更新自身的值
      else if (type === 'MM') {
        this.setState({
          MMIndex: row,
          MMValue: this.state.MM[row],
        }, this.onChange)
      }
    }
  }

  // 值改变的事件
  onChange = () => {
    const date = this.getTime()
    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  // 删除iScroll
  destroyScrolls = () => {
    this.iScrollDay && this.iScrollDay.destroy && this.iScrollDay.destroy()
    this.iScrollHH && this.iScrollHH.destroy && this.iScrollHH.destroy()
    this.iScrollMM && this.iScrollMM.destroy && this.iScrollMM.destroy()
  }

  renderDayList() {
    return (
      <div className="x-time-picker__day-list" id={this.dayId}>
        <ul>
          {
            this.state.days.map((i, index) => {
              return <li key={index}>{i}</li>
            })
          }
        </ul>
      </div>
    )
  }

  renderHHList() {
    const hFormat = this.state.format[1] || 'h点'
    return (
      <div className="x-time-picker__hh-list" id={this.HHId}>
        <ul>
          {
            this.state.HH.map((i, index) => {
              let val = i + '点'
              if (/(h+)/.test(hFormat)) {
                val = hFormat.replace(RegExp.$1, i)
              }
              return <li key={index}>{val}</li>
            })
          }
        </ul>
      </div>
    )
  }

  renderMMList() {
    if (this.props.interval === 60) {
      return null
    }
    const mFormat = this.state.format[2] || 'm分'
    return (
      <div className="x-time-picker__mm-list" id={this.MMId}>
        <ul>
          {
            this.state.MM.map((i, index) => {
              let val = i + '分'
              if (/(m+)/.test(mFormat)) {
                val = mFormat.replace(RegExp.$1, i)
              }
              return <li key={index}>{val}</li>
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    const domprops = ignore(this.props, [
      'data',
      'format',
      'interval',
      'defaultDay',
      'onChange',
    ])

    const css = classnames('x-time-picker', this.props.className)

    return (
      <div {...domprops} className={css}>
        <sup className="x-time-picker__mask-t" />
        <sup className="x-time-picker__mask-b" />
        {this.renderDayList()}
        {this.renderHHList()}
        {this.renderMMList()}
      </div>
    )
  }
}

export default TimePicker
