import './style'
import React from 'react'
import cn from 'classnames'

const IphoneXHeader = props => {
  const { className } = props
  const composeClassName = cn('iphonex-footer', className)

  return <div className={composeClassName} />
}

export default IphoneXHeader
