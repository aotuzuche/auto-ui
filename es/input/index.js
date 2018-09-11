import _extends from "@babel/runtime/helpers/esm/extends";
import './style';
import React from 'react';
import cn from 'classnames';
import ignore from '../__libs/ignoreProps';

var Input = function Input(props) {
  var type = props.type || 'text';
  var addonAfter = props.addonAfter && !props.multi ? React.createElement("div", {
    className: "x-input__addon-after"
  }, props.addonAfter) : '';
  var addonBefore = props.addonBefore && !props.multi ? React.createElement("div", {
    className: "x-input__addon-before"
  }, props.addonBefore) : '';
  var css = cn('x-input', {
    'x-input--error': props.error,
    'x-input--multi': props.multi,
    'x-input--disabled': props.disabled
  }, props.className);
  var inputprops = ignore(props, ['addonAfter', 'addonBefore', 'multi', 'error']);
  return React.createElement("div", {
    className: css
  }, addonBefore, props.multi ? React.createElement("textarea", _extends({}, inputprops, {
    className: "x-input__ipt",
    value: props.value,
    onChange: props.onChange,
    type: type
  })) : React.createElement("input", _extends({}, inputprops, {
    className: "x-input__ipt",
    value: props.value,
    onChange: props.onChange,
    type: type
  })), addonAfter);
};

export default Input;