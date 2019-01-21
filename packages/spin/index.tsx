import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

export interface SpinProps {
  className?: string
  text?: ReactNode
  [otherProps: string]: any
}

const Spin: React.FC<SpinProps> = props => {
  const { className, text, ...otherProps } = props

  const loadingSpin = (
    <div className="auto-ui-loading__spin">
      <svg className="auto-ui-loading__spin_circular" viewBox="25 25 50 50">
        <circle
          className="auto-ui-loading__spin_path"
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

  let composeClassName = cn('auto-ui-spin', className)

  return (
    <div {...otherProps} className={composeClassName}>
      {loadingSpin}
      {!!text && <p className="auto-ui-spin__text">{text}</p>}
    </div>
  )
}

export default Spin
