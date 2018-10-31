import './style'
import React from 'react'
import cn from 'classnames'
import reg from '../__libs/reg'

const IphoneXHeader = props => {
  const { className } = props
  const composeClassName = cn(className, {
    isAtzucheiOSNotiPhoneX: reg.isAtzuche() && reg.isiOS() && !reg.isiPhoneX(),
    'iphonex-header': reg.isAtzuche() && reg.isiPhoneX()
  })

  return <div className={composeClassName} />
}

export default IphoneXHeader
