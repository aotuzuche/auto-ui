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

var Layout = function Layout(props) {
  var css = (0, _classnames.default)('x-app', props.className);
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: css
  }), props.children);
};

var LayoutBody = function LayoutBody(props) {
  var css = (0, _classnames.default)('x-app-body', props.className, {
    'x-app-body--loading': props.loading,
    'x-app-body--error': props.errorInfo
  });
  var domprops = (0, _ignoreProps.default)(props, ['loading', 'errorInfo']);
  return _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
    className: css
  }), props.loading ? _react.default.createElement(_spin.default, {
    className: "x-app__loading"
  }) : props.errorInfo ? _react.default.createElement("p", {
    className: "x-app__error-info"
  }, _react.default.createElement("i", null, "!"), props.errorInfo) : props.children);
};

var LayoutFooter = function LayoutFooter(props) {
  var css = (0, _classnames.default)('x-app-footer', props.className);

  if (props.visible === false) {
    return null;
  }

  var domprops = (0, _ignoreProps.default)(props, ['visible']);
  return _react.default.createElement("footer", (0, _extends2.default)({}, domprops, {
    className: css
  }), props.children);
};

var LayoutHeader = function LayoutHeader(props) {
  var css = (0, _classnames.default)('x-app-header', {
    'x-app-header--ghost': props.ghost
  }, props.className);
  var inner = (0, _classnames.default)('x-app-header__inner', props.innerClassName);
  var domprops = (0, _ignoreProps.default)(props, ['ghost', 'innerClassName', 'addonBefore', 'onBackClick', 'onCloseClick', 'title', 'addonAfter', 'addonBottom']);
  return _react.default.createElement("header", (0, _extends2.default)({}, domprops, {
    className: css
  }), _react.default.createElement("div", {
    className: inner
  }, props.addonBefore || props.onBackClick || props.onCloseClick ? _react.default.createElement("div", {
    className: "x-app-header__addon-before"
  }, props.onBackClick ? _react.default.createElement("a", {
    onClick: props.onBackClick,
    href: "javascript:;",
    className: "x-app-header__back"
  }) : props.onCloseClick ? _react.default.createElement("a", {
    onClick: props.onCloseClick,
    href: "javascript:;",
    className: "x-app-header__close"
  }) : null, props.addonBefore) : null, props.title ? _react.default.createElement("h1", {
    className: "x-app-header__title"
  }, props.title) : null, props.children, props.addonAfter ? _react.default.createElement("div", {
    className: "x-app-header__addon-after"
  }, props.addonAfter) : null), props.addonBottom ? _react.default.createElement("div", {
    className: "x-app-header__addon-bottom"
  }, props.addonBottom) : null);
};

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Footer = LayoutFooter;
var _default = Layout;
exports.default = _default;