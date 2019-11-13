import cn from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface IRowProps {
  value?: any
  arrow?: boolean
  onClick?: (value?: any) => void
  href?: string
  to?: string
  activable?: boolean
  className?: string
  children: React.ReactNode
  title?: string
  indentLine?: boolean
  endIndentLine?: boolean
  [otherProps: string]: any
}

const CellRow: React.FC<IRowProps> = props => {
  const {
    value,
    arrow,
    onClick,
    href,
    to,
    activable,
    className,
    children,
    title,
    indentLine,
    endIndentLine,
    ...otherProps
  } = props

  const composeClassName = cn('x-cell__row', className, {
    'x-cell__row--activable': onClick || to || href || activable,
    'x-cell__row--arrow': arrow,
    'x-cell__row--indent-line': indentLine,
    'x-cell__row--end-indent-line': endIndentLine,
  })

  const content = () => (
    <>
      {title && <label>{title}</label>}
      {children}
    </>
  )

  if (onClick) {
    const onClickHandle = () => onClick(value)

    return (
      <div {...otherProps} className={composeClassName} onClick={onClickHandle}>
        {content()}
      </div>
    )
  }

  if (to) {
    return (
      <Link {...otherProps} className={composeClassName} to={to}>
        {content()}
      </Link>
    )
  }

  if (href) {
    return (
      <a {...otherProps} className={composeClassName} href={href}>
        {content()}
      </a>
    )
  }

  return (
    <div {...otherProps} className={composeClassName}>
      {content()}
    </div>
  )
}

interface ITitleProps {
  text: string
  className?: string
}

const CellTitle: React.FC<ITitleProps> = props => {
  const { text, className, ...otherProps } = props
  const composeClassName = cn('x-cell__title', className)
  return (
    <div {...otherProps} className={composeClassName}>
      <h2>{props.text}</h2>
    </div>
  )
}

interface ICellProps {
  arrow?: boolean
  indentLine?: boolean
  endIndentLine?: boolean
  onClick?: (value?: any) => void
  className?: string
  children: React.ReactNode
  [otherProps: string]: any
}

const Cell: React.FC<ICellProps> & {
  Row: React.FC<IRowProps>
  Title: React.FC<ITitleProps>
} = props => {
  const { arrow, indentLine, endIndentLine, className, children, onClick, ...otherProps } = props

  const composeClassName = cn('x-cell', className)

  const composeChildren: any[] = []
  if (Array.isArray(children)) {
    composeChildren.push(...children)
  } else {
    composeChildren.push(children)
  }

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((children, index) => {
        if (children && children.type === CellRow) {
          return React.cloneElement(children, {
            key: index,
            arrow: children.props.arrow === false ? false : arrow || children.props.arrow,
            onClick:
              children.props.href || children.props.to ? void 0 : onClick || children.props.onClick,
            indentLine: indentLine,
            endIndentLine: endIndentLine,
          })
        }
        return children
      })}
    </section>
  )
}

Cell.Row = CellRow
Cell.Title = CellTitle

export default Cell
