"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("./style");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Panel = function Panel(props) {
  var css = (0, _classnames.default)('x-panel', props.className);
  return _react.default.createElement("div", {
    className: css
  }, props.children);
};

Panel.Header = function (props) {
  var css = (0, _classnames.default)('x-panel__header', props.className);
  return _react.default.createElement("div", {
    className: css
  }, props.children);
};

Panel.Header.displayName = 'Panel.Header';

Panel.Body = function (props) {
  var css = (0, _classnames.default)('x-panel__body', props.className);
  return _react.default.createElement("div", {
    className: css
  }, props.children);
};

Panel.Body.displayName = 'Panel.Body';

Panel.Footer = function (props) {
  var css = (0, _classnames.default)('x-panel__footer', props.className);
  return _react.default.createElement("div", {
    className: css
  }, props.children);
};

Panel.Footer.displayName = 'Panel.Footer';
var _default = Panel;
exports.default = _default;