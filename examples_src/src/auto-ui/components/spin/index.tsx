import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IProps {
  className?: string
  children?: null
  [otherProps: string]: any
}

const Spin: React.FC<IProps> = props => {
  const { className, ...otherProps } = props

  const loadingSpin = (
    <div className="x-loading__spin">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  const composeClassName = cn('x-spin', className)

  return (
    <div {...otherProps} className={composeClassName}>
      {loadingSpin}
    </div>
  )
}

export default Spin
