import './style'
import React from 'react'
import classnames from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const Switch = props => {
  const io = props.hasOwnProperty('i') && props.hasOwnProperty('o')
  const css = classnames('x-switch', {
    'x-switch--active': props.active,
    'x-switch--io': io,
    'x-switch--icon': props.icon,
    'x-switch--disabled': props.disabled,
  }, props.className)

  const domprops = ignore(props, [
    'active',
    'i',
    'o',
    'onChange',
    'icon',
    'disabled',
  ])

  return (
    <A {...domprops} href="javascript:;" className={css} onClick={props.onChange}>
      {
        io ? <sub>{props.i}</sub> : null
      }
      {
        io ? <sup>{props.o}</sup> : null
      }
      <em></em>
    </A>
  )
}

export default Switch
