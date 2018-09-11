import './style'
import React, { Component } from 'react'
import classNames from 'classnames'
import TimePicker from '../time-picker'

class TimeRange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
    }

    if (!props.defaultRange ||
      !Array.isArray(props.defaultRange) ||
      props.defaultRange.length !== 2) {
      throw new Error('the props of defaultRange not arrowed.')
    }

    const defaultDayA = props.defaultRange[0]
    const defaultDayB = props.defaultRange[1]

    if (!(defaultDayA instanceof Date) || !(defaultDayB instanceof Date)) {
      throw new Error('the props of defaultRange must use [Date, Date].')
    }

    this.state.defaultDayA = defaultDayA
    this.state.defaultDayB = defaultDayB

    if (!props.data || !Array.isArray(props.data) || props.data.length !== 2) {
      throw new Error('the props of data is not allow.')
    }
    else {
      this.state.dataA = props.data[0]
      this.state.dataB = props.data[1]
    }
  }

  // 刷新滚动条
  refresh() {
    this.tpA.refresh()
    this.tpB.refresh()
  }

  // 恢复默认时间
  reset() {
    this.tpA.reset()
    this.tpB.reset()
  }

  // 恢复第一个时间
  resetA() {
    this.tpA.reset()
  }

  // 恢复第二个时间
  resetB() {
    this.tpB.reset()
  }

  // 重新渲染data数据
  redataA(data) {
    this.tpA.redata(data)
  }

  redataB(data) {
    this.tpB.redata(data)
  }

  // 显示第一个时间
  showA() {
    if (this.state.current !== 1) {
      this.setState({
        current: 1,
      }, () => {
        this.tpA.refresh()
      })
    }
  }

  // 显示第二个时间
  showB() {
    if (this.state.current !== 2) {
      this.setState({
        current: 2,
      }, () => {
        this.tpB.refresh()
      })
    }
  }

  // 获取时间范围
  getTimeRange() {
    const tA = this.tpA.getTime()
    const tB = this.tpB.getTime()
    return [tA, tB]
  }

  // 设置时间范围
  setTimeRange(range) {
    if (!range || !Array.isArray(range) || range.length !== 2) {
      throw new Error('type of range is not arrow.')
    }
    const timeA = range[0]
    const timeB = range[1]
    if (!(timeA instanceof Date) || !(timeB instanceof Date)) {
      throw new Error('type of range must be [Date, Date].')
    }
    if (timeA > timeB) {
      throw new Error('the date of arr[1] must late then arr[0].')
    }
    this.tpA.setTime(timeA)
    this.tpB.setTime(timeB)
  }

  // onChange事件
  onChange = t => {
    let range
    if (this.state.current === 0) {
      range = [t, this.tpB.getTime()]
    }
    else {
      range = [this.tpA.getTime(), t]
    }
    this.props.onChange && this.props.onChange(range)
  }

  render() {
    return (
      <div className={classNames('x-time-range', this.props.className)}>
        <div
          className={classNames('x-time-range__1', {
            visible: this.state.current === 1
          })}
        >
          <TimePicker
            data={this.state.dataA}
            format={this.props.format}
            interval={this.props.interval}
            defaultDay={this.state.defaultDayA}
            ref={e => { this.tpA = e }}
            onChange={this.onChange}
          />
        </div>

        <div
          className={classNames('x-time-range__2', {
            visible: this.state.current === 2
          })}
        >
          <TimePicker
            data={this.state.dataB}
            format={this.props.format}
            interval={this.props.interval}
            defaultDay={this.state.defaultDayB}
            ref={e => { this.tpB = e }}
            onChange={this.onChange}
          />
        </div>
      </div>
    )
  }
}

export default TimeRange
