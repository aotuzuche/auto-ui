import _extends from '@babel/runtime/helpers/esm/extends'
import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'
import A from '../a'

let CellRow = function CellRow(props) {
  let css = cn('x-cell__row', {
    'x-cell--activeable': props.onClick || props.activeable
  }, props.className)
  let domprops = ignore(props, ['activeable', 'onClick', 'value', 'label', 'arrow'])
  let Node = 'div'

  if (props.hasOwnProperty('onClick')) {
    Node = A
  }

  return React.createElement(Node, _extends({}, domprops, {
    className: css,
    onClick: function onClick() {
      return props.hasOwnProperty('onClick') && props.onClick(props.value)
    }
  }), props.hasOwnProperty('label') ? React.createElement('label', null, props.label) : null, props.children, props.arrow ? React.createElement('span', {
    className: 'x-cell__arrow'
  }) : null)
}

let Cell = function Cell(props) {
  let css = cn('x-cell', props.className, {
    'x-cell--indent-line': props.indentLine,
    'x-cell--arrow': props.arrow
  })
  let children = props.children

  if (children && typeof props.onClick === 'function') {
    if (!Array.isArray(children)) {
      children = [children]
    }

    children = children.map(function (res, index) {
      return cloneElement(res, {
        value: res.props.value || '',
        key: index,
        onClick: props.onClick,
        arrow: props.arrow
      })
    })
  }

  let domprops = ignore(props, ['indentLine', 'onClick', 'arrow'])
  return React.createElement('section', _extends({}, domprops, {
    className: css
  }), children)
}

Cell.Row = CellRow
export default Cell