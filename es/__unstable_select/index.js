"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Select = function Select(props) {
  var css = (0, _classnames.default)('x-select', props.className);
  var children = props.children ? Array.isArray(props.children) ? props.children : [props.children] : [];
  var value;
  children.forEach(function (res) {
    if (res && res.props && res.props.value) {
      if (res.props.value === props.value) {
        value = res.props.children;
      }
    }
  });
  return _react.default.createElement("div", {
    className: css
  }, value ? _react.default.createElement("p", {
    className: "x-select__value"
  }, value) : props.placeholder ? _react.default.createElement("p", {
    className: "x-select__placeholder"
  }, props.placeholder) : null, _react.default.createElement("select", {
    value: props.value,
    onChange: props.onChange
  }, props.children));
};

var SelectOption = function SelectOption(props) {
  var css = (0, _classnames.default)('x-select__option', {}, props.className);
  return _react.default.createElement("option", {
    className: css,
    value: props.value
  }, props.children);
};

Select.Option = SelectOption;
var _default = Select;
exports.default = _default;