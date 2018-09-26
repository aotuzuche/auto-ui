import _extends from '@babel/runtime/helpers/esm/extends'
import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'
import A from '../a'

let TabsItem = function TabsItem(props) {
  let css = cn('x-tabs__item', {
    'x-tabs--active': props.active
  }, props.className)
  let domprops = ignore(props, ['active', 'value', 'onClick'])
  return React.createElement(A, _extends({}, domprops, {
    href: 'javascript:;',
    className: css,
    onClick: function onClick() {
      return props.onClick && props.onClick(props.value)
    }
  }), props.children)
}

let Tabs = function Tabs(props) {
  let css = cn('x-tabs', props.className)
  let activeOffset = -2
  let children = props.children

  if (children && !Array.isArray(children)) {
    children = [children]
  }

  if (!props.hasOwnProperty('children')) {
    children = []
  }

  children = children.map(function (res, index) {
    let act = props.hasOwnProperty('active') && res.props.value === props.active

    if (act) {
      activeOffset = index
    }

    return cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick
    })
  })
  let len = children.length
  let domprops = ignore(props, ['active', 'onClick'])
  return React.createElement('div', _extends({}, domprops, {
    className: css
  }), React.createElement('sub', {
    className: 'x-tabs__line',
    style: {
      width: 100 / len + '%',
      'WebkitTransform': 'translate(' + activeOffset * 100 + '%,0)'
    }
  }), children)
}

Tabs.Item = TabsItem
export default Tabs