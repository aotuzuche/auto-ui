import classnames from 'classnames'
import React, { FC, MouseEventHandler } from 'react'

import { A } from '../a'

export interface SwitchProps {
  i?: boolean
  o?: boolean
  active?: boolean
  icon?: boolean
  disabled?: boolean
  className?: string
  onChange?: MouseEventHandler<HTMLAnchorElement>
  [otherProps: string]: any
}

export const Switch: FC<SwitchProps> = props => {
  const {
    i,
    o,
    active,
    icon,
    disabled,
    className,
    onChange,
    ...otherProps
  } = props
  const composeClassName = classnames(
    'x-switch',
    {
      'x-switch--active': active,
      'x-switch--io': i && o,
      'x-switch--icon': icon,
      'x-switch--disabled': disabled
    },
    className
  )
  const hasIO = i && o

  return (
    <A
      {...otherProps}
      href="javascript:;"
      className={composeClassName}
      onClick={onChange}
    >
      {hasIO && <sub>{props.i}</sub>}
      {hasIO && <sup>{props.o}</sup>}
      <em />
    </A>
  )
}
