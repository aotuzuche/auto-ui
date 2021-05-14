import cn from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Spin from '../spin/index'
import './style/index.scss'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'lighter' | 'danger' | 'default'
  disabled?: boolean
  hollow?: boolean
  lighter?: boolean
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
    lighter,
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
      'x-button--lighter': lighter || type === 'lighter',
      'x-button--shrink': shrink !== void 0 ? shrink : !!mini,
      'x-button--shadow':
        (type === 'primary' || type === 'danger' || type === 'secondary') && !hollow && shadow,
    },
    `x-button--${type === 'lighter' ? 'primary' : type}`,
    className,
  )

  const content = () => (
    <>
      {!!loading && (
        <div className="x-button__loading">
          <Spin />
        </div>
      )}
      {loading ? <div className="x-button__loading--opacity">{children}</div> : children}
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
