import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'

import A from '../a'

function CellRow(props) {
  const {
    className,
    arrow,
    onClick,
    activeable,
    children,
    ...otherProps
  } = props
  const composeClassName = cn('x-cell__row', className, {
    'x-cell--activeable': onClick || activeable,
    'x-cell--arrow': arrow
  })

  return (
    <A {...otherProps} className={composeClassName} onClick={onClick}>
      {children}
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
    'x-cell--indent-line': indentLine
  })

  const composeChildren = [].concat(children)

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((children, index) => {
        if (children.type === CellRow) {
          return cloneElement(children, {
            key: index,
            arrow: arrow || children.props.arrow,
            onClick: () => {
              const value = children.props && children.props.value
              if (onClick) {
                return onClick(value)
              }
              children.props.onClick && children.props.onClick(value)
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
