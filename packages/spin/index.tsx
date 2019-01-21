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

  let innerClassName
  let outClassName

  if (text) {
    innerClassName = cn('auto-ui-loading__spin')
    outClassName = cn('auto-ui-spin', className)
  } else {
    innerClassName = cn('auto-ui-loading__spin', className)
    outClassName = cn('auto-ui-spin')
  }

  const loadingSpin = (
    <div className={innerClassName}>
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

  return (
    <div {...otherProps} className={outClassName}>
      {loadingSpin}
      {!!text && <p className="auto-ui-spin__text">{text}</p>}
    </div>
  )
}

export default Spin
