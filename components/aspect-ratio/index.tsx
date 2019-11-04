import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IProps {
  value: number
  children: React.ReactNode
  className?: string
  [otherProps: string]: any
}

const AspectRatio: React.FC<IProps> = props => {
  const { value, className, children, ...otherProps } = props
  const cls = cn('x-aspect-ratio', className)
  if (value < 0) {
    console.warn('AspectRatio组件的value值不能小于0')
    return null
  }
  return (
    <div {...otherProps} className={cls}>
      <div className="x-aspect-ratio__inner">{children}</div>
      <div className="x-aspect-ratio__ar" style={{ marginTop: `${(1 / value) * 100}%` }} />
    </div>
  )
}

export default AspectRatio
