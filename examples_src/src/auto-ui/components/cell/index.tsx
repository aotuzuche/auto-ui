import cn from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import './style/index.scss'

interface IRowProps {
  value?: any
  arrow?: boolean
  onClick?: (value?: any) => void
  href?: string
  to?: string
  activable?: boolean
  className?: string
  children?: React.ReactNode
  title?: string
  addonAfter?: React.ReactNode
  dividerIndent?: 'left' | 'both'
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
    dividerIndent,
    indentLine,
    endIndentLine,
    addonAfter,
    ...otherProps
  } = props

  if (indentLine || endIndentLine) {
    // TODO: 需要废弃这两个属性
    console.warn('indentLine与endIndentLine将被废弃，请使用dividerIndent代替')
  }

  // 兼容老的属性
  // TODO: indentLine 和 endIndentLine 废弃后，该部分代码需要一起删除
  let finalDividerIndent = dividerIndent
  if (!finalDividerIndent && (indentLine || endIndentLine)) {
    if (indentLine && !endIndentLine) {
      finalDividerIndent = 'left'
    } else {
      finalDividerIndent = 'both'
    }
  }

  const composeClassName = cn('x-cell__row', className, {
    'x-cell__row--activable': onClick || to || href || activable,
    'x-cell__row--arrow': arrow,
    'x-cell__row--divider-indent-left': finalDividerIndent === 'left',
    'x-cell__row--divider-indent-both': finalDividerIndent === 'both',
  })

  const content = () => (
    <>
      {title && <label>{title}</label>}
      {children}
      {addonAfter && <span className="x-cell__addon-after">{addonAfter}</span>}
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
  dividerIndent?: 'left' | 'both'
  onClick?: (value?: any) => void
  className?: string
  children: React.ReactNode
  [otherProps: string]: any
}

const Cell: React.FC<ICellProps> & {
  Row: React.FC<IRowProps>
  Title: React.FC<ITitleProps>
} = props => {
  const { arrow, indentLine, endIndentLine, dividerIndent, className, children, onClick, ...otherProps } = props

  if (indentLine || endIndentLine) {
    // TODO: 需要废弃这两个属性
    console.warn('indentLine与endIndentLine将被废弃，请使用dividerIndent代替')
  }

  // 兼容老的属性
  // TODO: indentLine 和 endIndentLine 废弃后，该部分代码需要一起删除
  let finalDividerIndent = dividerIndent
  if (!finalDividerIndent && (indentLine || endIndentLine)) {
    if (indentLine && !endIndentLine) {
      finalDividerIndent = 'left'
    } else {
      finalDividerIndent = 'both'
    }
  }

  const composeClassName = cn('x-cell', className)

  const composeChildren: any[] = React.Children.toArray(children)

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((child, index) => {
        if (child && child.type === CellRow) {
          return React.cloneElement(child, {
            key: index,
            arrow: child.props.arrow === false ? false : arrow || child.props.arrow,
            onClick:
              child.props.href || child.props.to ? void 0 : onClick || child.props.onClick,
            dividerIndent: finalDividerIndent,
          })
        }
        return child
      })}
    </section>
  )
}

Cell.Row = CellRow
Cell.Title = CellTitle

export default Cell
