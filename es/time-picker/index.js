import _extends from '@babel/runtime/helpers/esm/extends'
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose'
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized'
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty'
import './style'
import React from 'react'
import '../__libs/dateFormat'
import ignore from '../__libs/ignoreProps'
import classnames from 'classnames'
import IScroll from 'iscroll/build/iscroll-lite'
import event from './event'
let ID = 0 // component.

let TimePicker =
/* #__PURE__ */
(function (_React$PureComponent) {
  _inheritsLoose(TimePicker, _React$PureComponent)

  function TimePicker(props) {
    let _this

    _this = _React$PureComponent.call(this, props) || this

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'initScrolls', function () {
      // 初始化日期的滚动，并在添加滚动开始和滚动结束事件
      if (!_this.iScrollDay && _this.dayId) {
        let Key = 'Day'
        _this.iScrollDay = new IScroll('#' + _this.dayId, {
          disablePointer: true,
          disableTouch: false,
          disableMouse: false
        }) // 如果默认的index不是0，滚动它

        if (_this.state.dayIndex !== 0) {
          _this.iScrollDay.scrollTo(0, -_this.realScrollRowHeight * _this.state.dayIndex, 0)
        } // 事件监听


        _this.iScrollDay.on('scrollStart', function () {
          _this.iScrollDayY = _this.iScrollDay.y
          _this['needCalc' + Key] = true
        })

        _this.iScrollDay.on('scrollEnd', function () {
          if (typeof _this.iScrollDayY === 'undefined' || Math.abs(_this.iScrollDayY - _this.iScrollDay.y) === 0) {
            return
          }

          _this.scrollEndCalc(_this.iScrollDay, Key)
        })
      } // 初始化小时的滚动，并在添加滚动开始和滚动结束事件


      if (!_this.iScrollHH && _this.HHId) {
        let _Key = 'HH'
        _this.iScrollHH = new IScroll('#' + _this.HHId, {
          disablePointer: true,
          disableTouch: false,
          disableMouse: false
        }) // 如果默认的index不是0，滚动它

        if (_this.state.HHIndex !== 0) {
          _this.iScrollHH.scrollTo(0, -_this.realScrollRowHeight * _this.state.HHIndex, 0)
        } // 事件监听


        _this.iScrollHH.on('scrollStart', function () {
          _this.iScrollHHY = _this.iScrollHH.y
          _this['needCalc' + _Key] = true
        })

        _this.iScrollHH.on('scrollEnd', function () {
          if (typeof _this.iScrollHHY === 'undefined' || Math.abs(_this.iScrollHHY - _this.iScrollHH.y) === 0) {
            return
          }

          _this.scrollEndCalc(_this.iScrollHH, _Key)
        })
      } // 初始化分钟的滚动，并在添加滚动开始和滚动结束事件


      if (!_this.iScrollMM && _this.MMId) {
        let _Key2 = 'MM'
        _this.iScrollMM = new IScroll('#' + _this.MMId, {
          disablePointer: true,
          disableTouch: false,
          disableMouse: false
        }) // 如果默认的index不是0，滚动它

        if (_this.state.MMIndex !== 0) {
          _this.iScrollMM.scrollTo(0, -_this.realScrollRowHeight * _this.state.MMIndex, 0)
        } // 事件监听


        _this.iScrollMM.on('scrollStart', function () {
          _this.iScrollMMY = _this.iScrollMM.y
          _this['needCalc' + _Key2] = true
        })

        _this.iScrollMM.on('scrollEnd', function () {
          if (typeof _this.iScrollMMY === 'undefined' || Math.abs(_this.iScrollMMY - _this.iScrollMM.y) === 0) {
            return
          }

          _this.scrollEndCalc(_this.iScrollMM, _Key2)
        })
      }
    })

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'refreshScrolls', function () {
      if (_this.iScrollDay) {
        _this.iScrollDay.refresh()

        _this.iScrollDay.scrollTo(0, -_this.realScrollRowHeight * _this.state.dayIndex, 300)
      }

      if (_this.iScrollHH) {
        _this.iScrollHH.refresh()

        _this.iScrollHH.scrollTo(0, -_this.realScrollRowHeight * _this.state.HHIndex, 300)
      }

      if (_this.iScrollMM) {
        _this.iScrollMM.refresh()

        _this.iScrollMM.scrollTo(0, -_this.realScrollRowHeight * _this.state.MMIndex, 300)
      }
    })

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'scrollEndCalc', function (scroll, type) {
      if (_this['needCalc' + type]) {
        let row = Math.floor(-scroll.y / _this.realScrollRowHeight + 0.5)
        let scrollTop = row * _this.realScrollRowHeight
        scroll.scrollTo(0, -scrollTop, 500)
        _this['needCalc' + type] = false // 如果是日期滚动，更新小时和分钟数据

        if (type === 'Day') {
          let times = event.transTimeList(event.getTimeList(_this.props.data[row]))
          let hIndex = times.HH.indexOf(_this.state.HHValue)
          let hChange = hIndex === -1
          hIndex = hIndex > -1 ? hIndex : 0
          let mIndex = times[times.HH[hIndex]].indexOf(_this.state.MMValue)
          mIndex = mIndex > -1 ? mIndex : 0 // 如果小时变了，那分钟就恢复到默认第一个值
          // 比如 4点45分 切换到另一天，另一天没有4点，则可能取了个0点
          // 这个时候如果分钟不变，时间就变成了0点45分，其实是没意义的，不如直接展示0点0分

          if (hChange) {
            mIndex = 0
          }

          let hValue = times.HH[hIndex]
          let mList = times[hValue]
          let mValue = mList[mIndex]

          _this.setState({
            times: times,
            dayIndex: row,
            dayValue: _this.props.data[row].day,
            HH: times.HH,
            HHIndex: hIndex,
            HHValue: hValue,
            MM: mList,
            MMIndex: mIndex,
            MMValue: mValue
          }, function () {
            if (_this.iScrollHH) {
              _this.iScrollHH.refresh()

              _this.iScrollHH.scrollTo(0, -hIndex * _this.realScrollRowHeight, 0)
            }

            if (_this.iScrollMM) {
              _this.iScrollMM.refresh()

              _this.iScrollMM.scrollTo(0, -mIndex * _this.realScrollRowHeight, 0)
            }

            _this.onChange()
          })
        } // 如果滚动的是小时，更新小时
        // 分钟如果有相同的值，不动，不然则恢复到默认第一个值
        else if (type === 'HH') {
          let h = _this.state.HH[row]
          let _mList = _this.state.times[h]

          let _mIndex = _mList.indexOf(_this.state.MMValue)

          _mIndex = _mIndex > -1 ? _mIndex : 0

          _this.setState({
            HHIndex: row,
            HHValue: h,
            MM: _mList,
            MMIndex: _mIndex,
            MMValue: _mList[_mIndex]
          }, function () {
            if (_this.iScrollMM) {
              _this.iScrollMM.refresh()

              _this.iScrollMM.scrollTo(0, -_mIndex * _this.realScrollRowHeight, 0)
            }

            _this.onChange()
          })
        } // 如果滚动的分钟，更新自身的值
        else if (type === 'MM') {
          _this.setState({
            MMIndex: row,
            MMValue: _this.state.MM[row]
          }, _this.onChange)
        }
      }
    })

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'onChange', function () {
      let date = _this.getTime()

      if (_this.props.onChange) {
        _this.props.onChange(date)
      }
    })

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'destroyScrolls', function () {
      _this.iScrollDay && _this.iScrollDay.destroy && _this.iScrollDay.destroy()
      _this.iScrollHH && _this.iScrollHH.destroy && _this.iScrollHH.destroy()
      _this.iScrollMM && _this.iScrollMM.destroy && _this.iScrollMM.destroy()
    })

    _this.state = {
      props: props,
      days: [],
      times: [],
      HH: [],
      MM: [],
      format: _this.props.format // 定义id

    }
    _this.dayId = 'x-time-picker-day_' + ++ID
    _this.HHId = 'x-time-picker-hh_' + ++ID
    _this.MMId = 'x-time-picker-mm_' + ++ID // 时间节点

    let HH = []

    for (let i = 0; i < 24; i++) {
      HH.push(('00' + i).substr(-2))
    } // 时间间隔，必须能被60除尽


    let interval = _this.props.interval || 15

    if (60 / interval !== ~~(60 / interval)) {
      throw new Error('The props of "interval" must can be divided into 60.')
    }

    let MM = []

    for (let _i = 0; _i < 60; _i += interval) {
      MM.push(('00' + _i).substr(-2))
    } // 每一行的高度（即li的高度）


    _this.realScrollRowHeight = window.rem ? window.rem / 100 * 70 : 70
    event.HH = HH
    event.MM = MM
    return _this
  }

  let _proto = TimePicker.prototype

  _proto.componentDidMount = function componentDidMount() {
    // 天列表
    let days = event.getDayList(this.props.data, this.props.format) // 时间数据

    let state = event.getStateByTime(this.props.defaultDay, this.props.data)
    this.setState(_extends({
      days: days
    }, state), this.initScrolls)
  }

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.destroyScrolls()
  }

  _proto.componentDidUpdate = function componentDidUpdate(props) {
    if (props.data !== this.props.data) {
      this.refreshScrolls()
    }
  }

  TimePicker.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.props.data !== props.data) {
      // 天列表
      let days = event.getDayList(props.data, props.format) // 时间数据

      let times = event.getStateByTime(props.defaultDay, props.data)
      return _extends({
        props: _extends({}, state.props, {
          data: props.data
        }),
        days: days
      }, times)
    }

    return null
  } // 刷新滚动条


  _proto.refresh = function refresh() {
    this.refreshScrolls()
  } // 恢复默认时间


  _proto.reset = function reset() {
    let state = event.getStateByTime(this.props.defaultDay, this.props.data)
    this.setState(_extends({}, state), this.refreshScrolls)
  } // 获取时间


  _proto.getTime = function getTime() {
    let day = this.state.dayValue
    let h = this.state.HHValue
    let m = this.state.MMValue
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), h - 0, m - 0)
  } // 设置时间


  _proto.setTime = function setTime(t) {
    let state = event.getStateByTime(t, this.props.data)
    this.setState(_extends({}, state), this.refreshScrolls)
  } // 初始化滚动插件


  _proto.renderDayList = function renderDayList() {
    return React.createElement('div', {
      className: 'x-time-picker__day-list',
      id: this.dayId
    }, React.createElement('ul', null, this.state.days.map(function (i, index) {
      return React.createElement('li', {
        key: index
      }, i)
    })))
  }

  _proto.renderHHList = function renderHHList() {
    let hFormat = this.state.format[1] || 'h点'
    return React.createElement('div', {
      className: 'x-time-picker__hh-list',
      id: this.HHId
    }, React.createElement('ul', null, this.state.HH.map(function (i, index) {
      let val = i + '点'

      if (/(h+)/.test(hFormat)) {
        val = hFormat.replace(RegExp.$1, i)
      }

      return React.createElement('li', {
        key: index
      }, val)
    })))
  }

  _proto.renderMMList = function renderMMList() {
    if (this.props.interval === 60) {
      return null
    }

    let mFormat = this.state.format[2] || 'm分'
    return React.createElement('div', {
      className: 'x-time-picker__mm-list',
      id: this.MMId
    }, React.createElement('ul', null, this.state.MM.map(function (i, index) {
      let val = i + '分'

      if (/(m+)/.test(mFormat)) {
        val = mFormat.replace(RegExp.$1, i)
      }

      return React.createElement('li', {
        key: index
      }, val)
    })))
  }

  _proto.render = function render() {
    let domprops = ignore(this.props, ['data', 'format', 'interval', 'defaultDay', 'onChange'])
    let css = classnames('x-time-picker', this.props.className)
    return React.createElement('div', _extends({}, domprops, {
      className: css
    }), React.createElement('sup', {
      className: 'x-time-picker__mask-t'
    }), React.createElement('sup', {
      className: 'x-time-picker__mask-b'
    }), this.renderDayList(), this.renderHHList(), this.renderMMList())
  }

  return TimePicker
})(React.PureComponent)

export default TimePicker