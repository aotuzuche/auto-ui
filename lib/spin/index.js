"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var string = "\n  <div class=\"x-loading__spin\">\n    <svg class=\"x-loading__spin_circular\" viewBox=\"25 25 50 50\">\n      <circle class=\"x-loading__spin_path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n    </svg>\n  </div>\n";

var Spin = function Spin(props) {
  var css = (0, _classnames.default)('x-loading__spin', props.className);
  var domprops = {}; // 有文字时，样式加在外层上

  if (props.text) {
    css = 'x-loading__spin';
  } else {
    domprops = (0, _ignoreProps.default)(props, []);
  }

  var loadingSpin = _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
    className: css
  }), _react.default.createElement("svg", {
    className: "x-loading__spin_circular",
    viewBox: "25 25 50 50"
  }, _react.default.createElement("circle", {
    className: "x-loading__spin_path",
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })));

  if (props.text) {
    var _css = (0, _classnames.default)('x-spin', props.className);

    var _domprops = (0, _ignoreProps.default)(props, ['text']);

    return _react.default.createElement("div", (0, _extends2.default)({}, _domprops, {
      className: _css
    }), loadingSpin, _react.default.createElement("p", {
      className: "x-spin__text"
    }, props.text));
  }

  return loadingSpin;
};

Spin.toString = function () {
  return string;
};

var _default = Spin;
exports.default = _default;