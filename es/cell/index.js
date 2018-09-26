import _extends from "@babel/runtime/helpers/esm/extends";
import './style';
import React, { cloneElement } from 'react';
import cn from 'classnames';
import ignore from '../__libs/ignoreProps';
import A from '../a';

var CellRow = function CellRow(props) {
  var css = cn('x-cell__row', {
    'x-cell--activeable': props.onClick || props.activeable
  }, props.className);
  var domprops = ignore(props, ['activeable', 'onClick', 'value', 'label', 'arrow']);
  var Node = 'div';

  if (props.hasOwnProperty('onClick')) {
    Node = A;
  }

  return React.createElement(Node, _extends({}, domprops, {
    className: css,
    onClick: function onClick() {
      return props.hasOwnProperty('onClick') && props.onClick(props.value);
    }
  }), props.hasOwnProperty('label') ? React.createElement("label", null, props.label) : null, props.children, props.arrow ? React.createElement("span", {
    className: "x-cell__arrow"
  }) : null);
};

var Cell = function Cell(props) {
  var css = cn('x-cell', props.className, {
    'x-cell--indent-line': props.indentLine,
    'x-cell--arrow': props.arrow
  });
  var children = props.children;

  if (children && typeof props.onClick === 'function') {
    if (!Array.isArray(children)) {
      children = [children];
    }

    children = children.map(function (res, index) {
      return cloneElement(res, {
        value: res.props.value || '',
        key: index,
        onClick: props.onClick,
        arrow: props.arrow
      });
    });
  }

  var domprops = ignore(props, ['indentLine', 'onClick', 'arrow']);
  return React.createElement("section", _extends({}, domprops, {
    className: css
  }), children);
};

Cell.Row = CellRow;
export default Cell;