import cn from 'classnames'
import React, { FC, ReactNodeArray } from 'react'
import Spin from '../spin'
import { Report } from '../utils'

export interface ButtonProps {
  className?: string
  type?: string
  disabled?: boolean
  mini?: boolean
  loading?: boolean
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

  return (
    <Report {...otherProps} className={css}>
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
