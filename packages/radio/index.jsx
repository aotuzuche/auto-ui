import './style'
import React from 'react'
import cn from 'classnames'

import A from '../a'

const Radio = props => {
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

export default Radio
