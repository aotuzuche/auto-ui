import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IProps {
  size?: 1 | 2 | 3 | 4
  className?: string
  children?: null
  [otherProps: string]: any
}

const Space: React.FC<IProps> = props => {
  const { size, className, ...otherProps } = props

  const composeClassName = cn('x-space', `x-space--${size}`, className)

  return <span {...otherProps} className={composeClassName} />
}

Space.defaultProps = {
  size: 1,
}

export default Space
