import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'
import CustomProvider from '../provider'

const isBroswer = typeof self === 'object' && self.self === self && self

interface IProps {
  inset: 'top' | 'bottom'
  color?: string
  className?: string
  children?: null
  userAgent?: string
}

const isiOS = (userAgent: string) => {
  return userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

const isApp = (userAgent: string) => {
  return userAgent.indexOf('atzuche') > -1
}

const SafeArea: React.FC<IProps> = props => {
  const context = React.useContext(CustomProvider) || {}
  const userAgent =
    props.userAgent || context.userAgent || (isBroswer ? window.navigator.userAgent : '')
  let composeClassName = cn(`x-safe-area-inset-${props.inset}`, props.className)
  if (props.inset === 'top' && isiOS(userAgent) && isApp(userAgent)) {
    composeClassName += ' x-safe-area-ios-app'
  }
  return <div className={composeClassName} style={{ backgroundColor: props.color }} />
}

SafeArea.defaultProps = {
  color: '#ffffff',
}

export default SafeArea
