import _extends from '@babel/runtime/helpers/esm/extends'
import './style'
import React from 'react'
import cn from 'classnames'
import Spin from '../spin'
import ignore from '../__libs/ignoreProps'
import A from '../a'

let Button = function Button(props) {
  let type = props.type ? props.type : 'primary'
  let css = cn('x-button', {
    'x-button--disabled': props.disabled || props.loading,
    'x-button--mini': props.mini
  }, 'x-button--' + type, props.className)
  let children = props.children

  if (!Array.isArray(children)) {
    children = [children]
  }

  let fChildren = []
  children.forEach(function (i) {
    let last = fChildren[fChildren.length - 1] || ''

    if (typeof i !== 'object') {
      if (typeof last === 'object') {
        fChildren.push(i)
      } else {
        fChildren[Math.max(fChildren.length - 1, 0)] = last + i
      }
    } else {
      fChildren.push(i)
    }
  })
  let domprops = ignore(props, ['type', 'disabled', 'mini', 'loading', 'onClick'])
  return React.createElement(A, _extends({}, domprops, {
    className: css,
    onClick: props.onClick
  }), props.loading ? React.createElement(Spin, {
    className: 'x-button__loading'
  }) : null, fChildren.map(function (res, i) {
    if (typeof res !== 'object') {
      return React.createElement('p', {
        className: 'x-button__text',
        key: i
      }, res)
    }

    return res
  }))
}

export default Button