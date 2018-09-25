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

var Switch = function Switch(props) {
  var io = props.hasOwnProperty('i') && props.hasOwnProperty('o');
  var css = (0, _classnames.default)('x-switch', {
    'x-switch--active': props.active,
    'x-switch--io': io,
    'x-switch--icon': props.icon,
    'x-switch--disabled': props.disabled
  }, props.className);
  var domprops = (0, _ignoreProps.default)(props, ['active', 'i', 'o', 'onChange', 'icon', 'disabled']);
  return _react.default.createElement(_a.default, (0, _extends2.default)({}, domprops, {
    href: "javascript:;",
    className: css,
    onClick: props.onChange
  }), io ? _react.default.createElement("sub", null, props.i) : null, io ? _react.default.createElement("sup", null, props.o) : null, _react.default.createElement("em", null));
};

var _default = Switch;
exports.default = _default;