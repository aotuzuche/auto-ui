"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _spin = _interopRequireDefault(require("../spin"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var _a = _interopRequireDefault(require("../a"));

var Button = function Button(props) {
  var type = props.type ? props.type : 'primary';
  var css = (0, _classnames.default)('x-button', {
    'x-button--disabled': props.disabled || props.loading,
    'x-button--mini': props.mini
  }, 'x-button--' + type, props.className);
  var children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  var fChildren = [];
  children.forEach(function (i) {
    var last = fChildren[fChildren.length - 1] || '';

    if (typeof i !== 'object') {
      if (typeof last === 'object') {
        fChildren.push(i);
      } else {
        fChildren[Math.max(fChildren.length - 1, 0)] = last + i;
      }
    } else {
      fChildren.push(i);
    }
  });
  var domprops = (0, _ignoreProps.default)(props, ['type', 'disabled', 'mini', 'loading', 'onClick']);
  return _react.default.createElement(_a.default, (0, _extends2.default)({}, domprops, {
    className: css,
    onClick: props.onClick
  }), props.loading ? _react.default.createElement(_spin.default, {
    className: "x-button__loading"
  }) : null, fChildren.map(function (res, i) {
    if (typeof res !== 'object') {
      return _react.default.createElement("p", {
        className: "x-button__text",
        key: i
      }, res);
    }

    return res;
  }));
};

var _default = Button;
exports.default = _default;