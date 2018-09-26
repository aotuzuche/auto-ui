import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose'
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized'
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty'
import './style'
import React, { Component } from 'react'
import classNames from 'classnames'
import TimePicker from '../time-picker'

let TimeRange =
/* #__PURE__ */
(function (_Component) {
  _inheritsLoose(TimeRange, _Component)

  function TimeRange(props) {
    let _this

    _this = _Component.call(this, props) || this

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'onChange', function (t) {
      let range

      if (_this.state.current === 0) {
        range = [t, _this.tpB.getTime()]
      } else {
        range = [_this.tpA.getTime(), t]
      }

      _this.props.onChange && _this.props.onChange(range)
    })

    _this.state = {
      current: 1
    }

    if (!props.defaultRange || !Array.isArray(props.defaultRange) || props.defaultRange.length !== 2) {
      throw new Error('the props of defaultRange not arrowed.')
    }

    let defaultDayA = props.defaultRange[0]
    let defaultDayB = props.defaultRange[1]

    if (!(defaultDayA instanceof Date) || !(defaultDayB instanceof Date)) {
      throw new Error('the props of defaultRange must use [Date, Date].')
    }

    _this.state.defaultDayA = defaultDayA
    _this.state.defaultDayB = defaultDayB

    if (!props.data || !Array.isArray(props.data) || props.data.length !== 2) {
      throw new Error('the props of data is not allow.')
    } else {
      _this.state.dataA = props.data[0]
      _this.state.dataB = props.data[1]
    }

    return _this
  } // 刷新滚动条


  let _proto = TimeRange.prototype

  _proto.refresh = function refresh() {
    this.tpA.refresh()
    this.tpB.refresh()
  } // 恢复默认时间


  _proto.reset = function reset() {
    this.tpA.reset()
    this.tpB.reset()
  } // 恢复第一个时间


  _proto.resetA = function resetA() {
    this.tpA.reset()
  } // 恢复第二个时间


  _proto.resetB = function resetB() {
    this.tpB.reset()
  } // 重新渲染data数据


  _proto.redataA = function redataA(data) {
    this.tpA.redata(data)
  }

  _proto.redataB = function redataB(data) {
    this.tpB.redata(data)
  } // 显示第一个时间


  _proto.showA = function showA() {
    let _this2 = this

    if (this.state.current !== 1) {
      this.setState({
        current: 1
      }, function () {
        _this2.tpA.refresh()
      })
    }
  } // 显示第二个时间


  _proto.showB = function showB() {
    let _this3 = this

    if (this.state.current !== 2) {
      this.setState({
        current: 2
      }, function () {
        _this3.tpB.refresh()
      })
    }
  } // 获取时间范围


  _proto.getTimeRange = function getTimeRange() {
    let tA = this.tpA.getTime()
    let tB = this.tpB.getTime()
    return [tA, tB]
  } // 设置时间范围


  _proto.setTimeRange = function setTimeRange(range) {
    if (!range || !Array.isArray(range) || range.length !== 2) {
      throw new Error('type of range is not arrow.')
    }

    let timeA = range[0]
    let timeB = range[1]

    if (!(timeA instanceof Date) || !(timeB instanceof Date)) {
      throw new Error('type of range must be [Date, Date].')
    }

    if (timeA > timeB) {
      throw new Error('the date of arr[1] must late then arr[0].')
    }

    this.tpA.setTime(timeA)
    this.tpB.setTime(timeB)
  } // onChange事件


  _proto.render = function render() {
    let _this4 = this

    return React.createElement('div', {
      className: classNames('x-time-range', this.props.className)
    }, React.createElement('div', {
      className: classNames('x-time-range__1', {
        visible: this.state.current === 1
      })
    }, React.createElement(TimePicker, {
      data: this.state.dataA,
      format: this.props.format,
      interval: this.props.interval,
      defaultDay: this.state.defaultDayA,
      ref: function ref(e) {
        _this4.tpA = e
      },
      onChange: this.onChange
    })), React.createElement('div', {
      className: classNames('x-time-range__2', {
        visible: this.state.current === 2
      })
    }, React.createElement(TimePicker, {
      data: this.state.dataB,
      format: this.props.format,
      interval: this.props.interval,
      defaultDay: this.state.defaultDayB,
      ref: function ref(e) {
        _this4.tpB = e
      },
      onChange: this.onChange
    })))
  }

  return TimeRange
})(Component)

export default TimeRange