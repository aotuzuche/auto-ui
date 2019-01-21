import cn from 'classnames'
import React, { cloneElement, FC, MouseEventHandler } from 'react'
import './style.css'

export interface CellRowProps {
  className?: string
  arrow?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  value?: any
  activeable?: boolean
}

const CellRow: FC<CellRowProps> = props => {
  const {
    className,
    arrow,
    onClick,
    activeable,
    children,
    value,
    ...otherProps
  } = props
  const composeClassName = cn('x-cell__row', className, {
    'x-cell--activeable': onClick || activeable,
    'x-cell--arrow': arrow
  })

  return (
    <div
      {...otherProps}
      className={composeClassName}
      onClick={() => {
        onClick && onClick(value)
      }}
    >
      {children}
    </div>
  )
}

export interface CellProps {
  className?: string
  indentLine?: boolean
  arrow?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Cell: FC<CellProps> & {
  Row: FC<CellRowProps>;
} = props => {
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

  let composeChildren: any[] = []
  if (children) {
    composeChildren = composeChildren.concat(children)
  }

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((children, index) => {
        if (children && children.type === CellRow) {
          return cloneElement(children, {
            key: index,
            arrow: arrow || children.props.arrow,
            onClick: onClick || children.props.onClick
          })
        }
        return children
      })}
    </section>
  )
}

Cell.Row = CellRow

export default Cell
