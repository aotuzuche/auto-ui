import cn from 'classnames'
import React, { FC } from 'react'
import { Reg } from '../utils'

export interface IphoneXHeaderProps {
  className?: string
}

export const IphoneXHeader: FC<IphoneXHeaderProps> = props => {
  const { className } = props
  const composeClassName = cn(className, {
    isAtzucheiOSNotiPhoneX: Reg.isAtzuche() && Reg.isiOS() && !Reg.isiPhoneX(),
    'iphonex-header': Reg.isAtzuche() && Reg.isiPhoneX()
  })

  return <div className={composeClassName} />
}
