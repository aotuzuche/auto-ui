import './style';
import React from 'react';
import classnames from 'classnames';

var Select = function Select(props) {
  var css = classnames('x-select', props.className);
  var children = props.children ? Array.isArray(props.children) ? props.children : [props.children] : [];
  var value;
  children.forEach(function (res) {
    if (res && res.props && res.props.value) {
      if (res.props.value === props.value) {
        value = res.props.children;
      }
    }
  });
  return React.createElement("div", {
    className: css
  }, value ? React.createElement("p", {
    className: "x-select__value"
  }, value) : props.placeholder ? React.createElement("p", {
    className: "x-select__placeholder"
  }, props.placeholder) : null, React.createElement("select", {
    value: props.value,
    onChange: props.onChange
  }, props.children));
};

var SelectOption = function SelectOption(props) {
  var css = classnames('x-select__option', {}, props.className);
  return React.createElement("option", {
    className: css,
    value: props.value
  }, props.children);
};

Select.Option = SelectOption;
export default Select;