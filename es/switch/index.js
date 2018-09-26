import _extends from "@babel/runtime/helpers/esm/extends";
import './style';
import React from 'react';
import classnames from 'classnames';
import ignore from '../__libs/ignoreProps';
import A from '../a';

var Switch = function Switch(props) {
  var io = props.hasOwnProperty('i') && props.hasOwnProperty('o');
  var css = classnames('x-switch', {
    'x-switch--active': props.active,
    'x-switch--io': io,
    'x-switch--icon': props.icon,
    'x-switch--disabled': props.disabled
  }, props.className);
  var domprops = ignore(props, ['active', 'i', 'o', 'onChange', 'icon', 'disabled']);
  return React.createElement(A, _extends({}, domprops, {
    href: "javascript:;",
    className: css,
    onClick: props.onChange
  }), io ? React.createElement("sub", null, props.i) : null, io ? React.createElement("sup", null, props.o) : null, React.createElement("em", null));
};

export default Switch;