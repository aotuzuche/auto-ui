import cn from 'classnames'
import React, { ReactNode } from 'react'

export interface SpinProps {
  className?: string
  text?: ReactNode
  [otherProps: string]: any
}

export const Spin: React.FC<SpinProps> = props => {
  const { className, text, ...otherProps } = props

  const loadingSpin = (
    <div className="x-loading__spin">
      <svg className="x-loading__spin_circular" viewBox="25 25 50 50">
        <circle
          className="x-loading__spin_path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )

  let composeClassName = cn('x-spin', className)

  return (
    <div {...otherProps} className={composeClassName}>
      {loadingSpin}
      {!!text && <p className="x-spin__text">{text}</p>}
    </div>
  )
}
