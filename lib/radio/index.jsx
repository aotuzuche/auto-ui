import './style'
import React from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const Radio = props => {
  const css = cn('x-radio', {
    'x-radio__checked': props.checked,
    'x-radio__disabled': props.disabled,
  }, props.className)

  const domprops = ignore(props, [
    'checked',
    'onChange',
    'value',
    'text',
  ])

  return (
    <A
      {...domprops}
      className={css}
      onClick={() => {
        if (!props.disabled && props.onChange) {
          props.onChange(props.value, props.text)
        }
      }}
    >
      <i className="x-radio__icon">
        <sup className="x-radio__tick"></sup>
      </i>
      {
        props.text ?
          <span className="x-radio__text">{props.text}</span> :
          null
      }
    </A>
  )
}

export default Radio
