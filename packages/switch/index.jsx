import './style'
import React from 'react'
import classnames from 'classnames'

import A from '../a'

const Switch = props => {
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

export default Switch
