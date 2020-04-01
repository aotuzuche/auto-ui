import cn from 'classnames'
import * as React from 'react'
import './style.scss'
import CustomProvider from '../provider'

interface IProps {
  inset: 'top' | 'bottom'
  color?: string
  className?: string
  children?: null
}

const isiOS = (context: any) => {
  const userAgent = context.userAgent || window.navigator.userAgent
  return userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

const isApp = (context: any) => {
  const userAgent = context.userAgent || window.navigator.userAgent
  return userAgent.indexOf('atzuche') > -1
}

const SafeArea: React.FC<IProps> = props => {
  const context = React.useContext(CustomProvider) || {}
  let composeClassName = cn(`x-safe-area-inset-${props.inset}`, props.className)
  if (props.inset === 'top' && isiOS(context) && isApp(context)) {
    composeClassName += ' x-safe-area-ios-app'
  }
  return <div className={composeClassName} style={{ backgroundColor: props.color }} />
}

SafeArea.defaultProps = {
  color: '#ffffff',
}

export default SafeArea
