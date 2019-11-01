import cn from 'classnames'
import * as React from 'react'
import Spin from '../spin/index'
import './style.scss'

interface ButtonProps {
  type?: 'primary' | 'danger' | 'default'
  disabled?: boolean
  hollow?: boolean
  capsule?: boolean
  mini?: boolean
  shrink?: boolean
  shadow?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
  loading?: boolean
  className?: string
  children: React.ReactNode
  [otherProps: string]: any
}

const Button: React.FC<ButtonProps> = props => {
  const {
    type,
    disabled,
    shrink,
    capsule,
    mini,
    hollow,
    shadow,
    loading,
    className,
    children,
    onClick,
    ...otherProps
  } = props

  const composeClassName = cn(
    'x-button',
    {
      'x-button--disabled': disabled,
      'x-button--loading': loading,
      'x-button--mini': mini,
      'x-button--capsule': capsule,
      'x-button--hollow': hollow,
      'x-button--shrink': shrink !== void 0 ? shrink : !!mini,
      'x-button--shadow': (type === 'primary' || type === 'danger') && !hollow && shadow,
    },
    `x-button--${type}`,
    className,
  )

  const clickHandle: React.MouseEventHandler<HTMLButtonElement> = evt => {
    if (disabled || loading) {
      return
    }
    onClick(evt)
  }

  return (
    <button {...otherProps} className={composeClassName} onClick={clickHandle}>
      {!!loading && <Spin className="x-button__loading" />}
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
