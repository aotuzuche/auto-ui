"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("./style");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var _a = _interopRequireDefault(require("../a"));

var TabsItem = function TabsItem(props) {
  var css = (0, _classnames.default)('x-tabs__item', {
    'x-tabs--active': props.active
  }, props.className);
  var domprops = (0, _ignoreProps.default)(props, ['active', 'value', 'onClick']);
  return _react.default.createElement(_a.default, (0, _extends2.default)({}, domprops, {
    href: "javascript:;",
    className: css,
    onClick: function onClick() {
      return props.onClick && props.onClick(props.value);
    }
  }), props.children);
};

var Tabs = function Tabs(props) {
  var css = (0, _classnames.default)('x-tabs', props.className);
  var activeOffset = -2;
  var children = props.children;

  if (children && !Array.isArray(children)) {
    children = [children];
  }

  if (!props.hasOwnProperty('children')) {
    children = [];
  }

  children = children.map(function (res, index) {
    var act = props.hasOwnProperty('active') && res.props.value === props.active;

    if (act) {
      activeOffset = index;
    }

    return (0, _react.cloneElement)(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick
    });
  });
  var len = children.length;
  var domprops = (0, _ignoreProps.default)(props, ['active', 'onClick']);
  return _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
    className: css
  }), _react.default.createElement("sub", {
    className: "x-tabs__line",
    style: {
      width: 100 / len + '%',
      'WebkitTransform': 'translate(' + activeOffset * 100 + '%,0)'
    }
  }), children);
};

Tabs.Item = TabsItem;
var _default = Tabs;
exports.default = _default;