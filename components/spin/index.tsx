import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

interface IProps {
  className?: string
  children?: null
  type?: 'primary' | 'secondary'
  [otherProps: string]: any
}

const Spin: React.FC<IProps> = props => {
  const { className, ...otherProps } = props

  const loadingSpin = (
    <div className="x-loading__spin">
      <span />
      <span />
      <span />
    </div>
  )

  const composeClassName = cn('x-spin', className, {
    'x-spin--primary': props.type === 'primary' || !props.type,
    'x-spin--secondary': props.type === 'secondary',
  })

  return (
    <div {...otherProps} className={composeClassName}>
      {loadingSpin}
    </div>
  )
}

export default Spin
