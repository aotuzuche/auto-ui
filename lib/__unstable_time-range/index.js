"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./style");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _timePicker = _interopRequireDefault(require("../time-picker"));

var TimeRange =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(TimeRange, _Component);

  function TimeRange(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onChange", function (t) {
      var range;

      if (_this.state.current === 0) {
        range = [t, _this.tpB.getTime()];
      } else {
        range = [_this.tpA.getTime(), t];
      }

      _this.props.onChange && _this.props.onChange(range);
    });
    _this.state = {
      current: 1
    };

    if (!props.defaultRange || !Array.isArray(props.defaultRange) || props.defaultRange.length !== 2) {
      throw new Error('the props of defaultRange not arrowed.');
    }

    var defaultDayA = props.defaultRange[0];
    var defaultDayB = props.defaultRange[1];

    if (!(defaultDayA instanceof Date) || !(defaultDayB instanceof Date)) {
      throw new Error('the props of defaultRange must use [Date, Date].');
    }

    _this.state.defaultDayA = defaultDayA;
    _this.state.defaultDayB = defaultDayB;

    if (!props.data || !Array.isArray(props.data) || props.data.length !== 2) {
      throw new Error('the props of data is not allow.');
    } else {
      _this.state.dataA = props.data[0];
      _this.state.dataB = props.data[1];
    }

    return _this;
  } // 刷新滚动条


  var _proto = TimeRange.prototype;

  _proto.refresh = function refresh() {
    this.tpA.refresh();
    this.tpB.refresh();
  }; // 恢复默认时间


  _proto.reset = function reset() {
    this.tpA.reset();
    this.tpB.reset();
  }; // 恢复第一个时间


  _proto.resetA = function resetA() {
    this.tpA.reset();
  }; // 恢复第二个时间


  _proto.resetB = function resetB() {
    this.tpB.reset();
  }; // 重新渲染data数据


  _proto.redataA = function redataA(data) {
    this.tpA.redata(data);
  };

  _proto.redataB = function redataB(data) {
    this.tpB.redata(data);
  }; // 显示第一个时间


  _proto.showA = function showA() {
    var _this2 = this;

    if (this.state.current !== 1) {
      this.setState({
        current: 1
      }, function () {
        _this2.tpA.refresh();
      });
    }
  }; // 显示第二个时间


  _proto.showB = function showB() {
    var _this3 = this;

    if (this.state.current !== 2) {
      this.setState({
        current: 2
      }, function () {
        _this3.tpB.refresh();
      });
    }
  }; // 获取时间范围


  _proto.getTimeRange = function getTimeRange() {
    var tA = this.tpA.getTime();
    var tB = this.tpB.getTime();
    return [tA, tB];
  }; // 设置时间范围


  _proto.setTimeRange = function setTimeRange(range) {
    if (!range || !Array.isArray(range) || range.length !== 2) {
      throw new Error('type of range is not arrow.');
    }

    var timeA = range[0];
    var timeB = range[1];

    if (!(timeA instanceof Date) || !(timeB instanceof Date)) {
      throw new Error('type of range must be [Date, Date].');
    }

    if (timeA > timeB) {
      throw new Error('the date of arr[1] must late then arr[0].');
    }

    this.tpA.setTime(timeA);
    this.tpB.setTime(timeB);
  }; // onChange事件


  _proto.render = function render() {
    var _this4 = this;

    return _react.default.createElement("div", {
      className: (0, _classnames.default)('x-time-range', this.props.className)
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)('x-time-range__1', {
        visible: this.state.current === 1
      })
    }, _react.default.createElement(_timePicker.default, {
      data: this.state.dataA,
      format: this.props.format,
      interval: this.props.interval,
      defaultDay: this.state.defaultDayA,
      ref: function ref(e) {
        _this4.tpA = e;
      },
      onChange: this.onChange
    })), _react.default.createElement("div", {
      className: (0, _classnames.default)('x-time-range__2', {
        visible: this.state.current === 2
      })
    }, _react.default.createElement(_timePicker.default, {
      data: this.state.dataB,
      format: this.props.format,
      interval: this.props.interval,
      defaultDay: this.state.defaultDayB,
      ref: function ref(e) {
        _this4.tpB = e;
      },
      onChange: this.onChange
    })));
  };

  return TimeRange;
}(_react.Component);

var _default = TimeRange;
exports.default = _default;