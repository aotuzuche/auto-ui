import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const CellRow = props => {
  const css = cn('x-cell__row', {
    'x-cell--activeable': props.onClick || props.activeable,
  }, props.className)

  const domprops = ignore(props, [
    'activeable',
    'onClick',
    'value',
    'label',
    'arrow',
  ])

  let Node = 'div'
  if (props.hasOwnProperty('onClick')) {
    Node = A
  }

  return (
    <Node
      {...domprops}
      className={css}
      onClick={() => props.hasOwnProperty('onClick') && props.onClick(props.value)}
    >
      {
        props.hasOwnProperty('label') ?
          <label>{props.label}</label> :
          null
      }
      {props.children}
      {
        props.arrow ? <span className="x-cell__arrow"></span> : null
      }
    </Node>
  )
}


const Cell = props => {
  const css = cn('x-cell', props.className, {
    'x-cell--indent-line': props.indentLine,
    'x-cell--arrow': props.arrow,
  })
  let children = props.children

  if (children && typeof props.onClick === 'function') {
    if (!Array.isArray(children)) {
      children = [children]
    }
    children = children.map((res, index) => {
      return cloneElement(res, {
        value: res.props.value || '',
        key: index,
        onClick: props.onClick,
        arrow: props.arrow,
      })
    })
  }

  const domprops = ignore(props, [
    'indentLine',
    'onClick',
    'arrow',
  ])

  return (
    <section {...domprops} className={css}>
      {children}
    </section>
  )
}

Cell.Row = CellRow

export default Cell
