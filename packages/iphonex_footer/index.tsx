import cn from 'classnames'
import React, { FC } from 'react'

export interface IphoneXHeaderProps {
  className?: string
}

export const IphoneXFooter: FC<IphoneXHeaderProps> = props => {
  const { className } = props
  const composeClassName = cn('iphonex-footer', className)

  return <div className={composeClassName} />
}
