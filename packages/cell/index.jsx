import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'

import A from '../a'

function CellRow(props) {
  const { className, ...otherProps } = props
  const composeClassName = cn(
    'x-cell__row',
    className,
    {
      'x-cell--activeable': props.onClick || props.activeable
    },
    props.className
  )

  return (
    <A
      {...otherProps}
      className={composeClassName}
      onClick={() =>
        props.hasOwnProperty('onClick') && props.onClick(props.value)
      }
    >
      {props.hasOwnProperty('label') ? <label>{props.label}</label> : null}
      {props.children}
      {props.arrow ? <span className="x-cell__arrow" /> : null}
    </A>
  )
}

function Cell(props) {
  const {
    arrow,
    indentLine,
    className,
    children,
    onClick,
    ...otherProps
  } = props
  const composeClassName = cn('x-cell', className, {
    'x-cell--indent-line': indentLine,
    'x-cell--arrow': arrow
  })

  const composeChildren = [].concat(children)

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((children, index) => {
        if (children.type === CellRow) {
          return cloneElement(children, {
            onClick: () => {
              children.props.onClick && children.props.onClick()
              onClick && onClick()
            }
          })
        }
        return children
      })}
    </section>
  )
}

Cell.Row = CellRow

export default Cell
