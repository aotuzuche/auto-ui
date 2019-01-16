import cn from 'classnames'
import React, { FC, MouseEventHandler, ReactNodeArray } from 'react'
import Spin from '../spin'
import { Report } from '../utils'

export interface ButtonProps {
  className?: string
  type?: 'primary' | 'danger' | 'default'
  disabled?: boolean
  mini?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  [otherProps: string]: any
}

const Button: FC<ButtonProps> = props => {
  const {
    type,
    disabled,
    mini,
    className,
    loading,
    children,
    onClick,
    ...otherProps
  } = props
  const css = cn(
    'x-button',
    {
      'x-button--disabled': disabled || loading,
      'x-button--mini': mini
    },
    'x-button--' + (type || 'primary'),
    className
  )

  let composeChildren: ReactNodeArray = []
  if (children) {
    composeChildren = composeChildren.concat(children)
  }

  const clickHandle: MouseEventHandler<HTMLDivElement> = e => {
    if (disabled || loading) {
      return
    }
    onClick && onClick(e)
  }

  return (
    <Report onClick={clickHandle} {...otherProps} className={css}>
      {!!loading && <Spin className="x-button__loading" />}
      {composeChildren.map((children, index) => {
        return (
          <p className="x-button__text" key={index}>
            {children}
          </p>
        )
      })}
    </Report>
  )
}

export default Button
