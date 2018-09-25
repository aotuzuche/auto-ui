"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var _a = _interopRequireDefault(require("../a"));

var Radio = function Radio(props) {
  var css = (0, _classnames.default)('x-radio', {
    'x-radio__checked': props.checked,
    'x-radio__disabled': props.disabled
  }, props.className);
  var domprops = (0, _ignoreProps.default)(props, ['checked', 'onChange', 'value', 'text']);
  return _react.default.createElement(_a.default, (0, _extends2.default)({}, domprops, {
    className: css,
    onClick: function onClick() {
      if (!props.disabled && props.onChange) {
        props.onChange(props.value, props.text);
      }
    }
  }), _react.default.createElement("i", {
    className: "x-radio__icon"
  }, _react.default.createElement("sup", {
    className: "x-radio__tick"
  })), props.text ? _react.default.createElement("span", {
    className: "x-radio__text"
  }, props.text) : null);
};

var _default = Radio;
exports.default = _default;