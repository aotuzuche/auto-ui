"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var Input = function Input(props) {
  var type = props.type || 'text';
  var addonAfter = props.addonAfter && !props.multi ? _react.default.createElement("div", {
    className: "x-input__addon-after"
  }, props.addonAfter) : '';
  var addonBefore = props.addonBefore && !props.multi ? _react.default.createElement("div", {
    className: "x-input__addon-before"
  }, props.addonBefore) : '';
  var css = (0, _classnames.default)('x-input', {
    'x-input--error': props.error,
    'x-input--multi': props.multi,
    'x-input--disabled': props.disabled
  }, props.className);
  var inputprops = (0, _ignoreProps.default)(props, ['addonAfter', 'addonBefore', 'multi', 'error']);
  return _react.default.createElement("div", {
    className: css
  }, addonBefore, props.multi ? _react.default.createElement("textarea", (0, _extends2.default)({}, inputprops, {
    className: "x-input__ipt",
    value: props.value,
    onChange: props.onChange,
    type: type
  })) : _react.default.createElement("input", (0, _extends2.default)({}, inputprops, {
    className: "x-input__ipt",
    value: props.value,
    onChange: props.onChange,
    type: type
  })), addonAfter);
};

var _default = Input;
exports.default = _default;