import cn from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  to?: string
  href?: string
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
    to,
    href,
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

  const content = () => (
    <>
      {!!loading && <Spin className="x-button__loading" />}
      {children}
    </>
  )

  if (onClick) {
    const clickHandle: React.MouseEventHandler<HTMLButtonElement> = evt => {
      if (disabled || loading || !onClick) {
        return
      }
      onClick(evt)
    }

    return (
      <button {...otherProps} className={composeClassName} onClick={clickHandle}>
        {content()}
      </button>
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
    <button {...otherProps} className={composeClassName}>
      {content()}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
  capsule: true,
}

export default Button
