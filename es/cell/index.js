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

var CellRow = function CellRow(props) {
  var css = (0, _classnames.default)('x-cell__row', {
    'x-cell--activeable': props.onClick || props.activeable
  }, props.className);
  var domprops = (0, _ignoreProps.default)(props, ['activeable', 'onClick', 'value', 'label', 'arrow']);
  var Node = 'div';

  if (props.hasOwnProperty('onClick')) {
    Node = _a.default;
  }

  return _react.default.createElement(Node, (0, _extends2.default)({}, domprops, {
    className: css,
    onClick: function onClick() {
      return props.hasOwnProperty('onClick') && props.onClick(props.value);
    }
  }), props.hasOwnProperty('label') ? _react.default.createElement("label", null, props.label) : null, props.children, props.arrow ? _react.default.createElement("span", {
    className: "x-cell__arrow"
  }) : null);
};

var Cell = function Cell(props) {
  var css = (0, _classnames.default)('x-cell', props.className, {
    'x-cell--indent-line': props.indentLine,
    'x-cell--arrow': props.arrow
  });
  var children = props.children;

  if (children && typeof props.onClick === 'function') {
    if (!Array.isArray(children)) {
      children = [children];
    }

    children = children.map(function (res, index) {
      return (0, _react.cloneElement)(res, {
        value: res.props.value || '',
        key: index,
        onClick: props.onClick,
        arrow: props.arrow
      });
    });
  }

  var domprops = (0, _ignoreProps.default)(props, ['indentLine', 'onClick', 'arrow']);
  return _react.default.createElement("section", (0, _extends2.default)({}, domprops, {
    className: css
  }), children);
};

Cell.Row = CellRow;
var _default = Cell;
exports.default = _default;