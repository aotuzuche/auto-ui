import cn from 'classnames'
import React, { FC, ReactNode } from 'react'

import { A } from '../a'

export interface RadioProps {
  checked?: boolean
  disabled?: boolean
  className?: string
  text?: ReactNode
  onChange?: (value?: string, text?: ReactNode) => void
  value?: string
  [otherProps: string]: any
}

export const Radio: FC<RadioProps> = props => {
  const {
    checked,
    disabled,
    className,
    text,
    onChange,
    value,
    ...otherProps
  } = props
  const composeClassName = cn(
    'x-radio',
    {
      'x-radio__checked': checked,
      'x-radio__disabled': disabled
    },
    className
  )

  return (
    <A
      {...otherProps}
      className={composeClassName}
      onClick={() => {
        if (disabled) {
          return
        }
        onChange && onChange(value, text)
      }}
    >
      <i className="x-radio__icon">
        <sup className="x-radio__tick" />
      </i>
      {!!text && <span className="x-radio__text">{text}</span>}
    </A>
  )
}
