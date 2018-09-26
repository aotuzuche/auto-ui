import _extends from '@babel/runtime/helpers/esm/extends'
import './style'
import React from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'
import A from '../a'

let Radio = function Radio(props) {
  let css = cn('x-radio', {
    'x-radio__checked': props.checked,
    'x-radio__disabled': props.disabled
  }, props.className)
  let domprops = ignore(props, ['checked', 'onChange', 'value', 'text'])
  return React.createElement(A, _extends({}, domprops, {
    className: css,
    onClick: function onClick() {
      if (!props.disabled && props.onChange) {
        props.onChange(props.value, props.text)
      }
    }
  }), React.createElement('i', {
    className: 'x-radio__icon'
  }, React.createElement('sup', {
    className: 'x-radio__tick'
  })), props.text ? React.createElement('span', {
    className: 'x-radio__text'
  }, props.text) : null)
}

export default Radio