import './style'
import React from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

const Input = props => {
  const type = props.type || 'text'

  const addonAfter = props.addonAfter && !props.multi ?
    <div className="x-input__addon-after">{props.addonAfter}</div> :
    ''
  const addonBefore = props.addonBefore && !props.multi ?
    <div className="x-input__addon-before">{props.addonBefore}</div> :
    ''

  const css = cn('x-input', {
    'x-input--error': props.error,
    'x-input--multi': props.multi,
    'x-input--disabled': props.disabled,
  }, props.className)

  const inputprops = ignore(props, [
    'addonAfter',
    'addonBefore',
    'multi',
    'error',
  ])

  return (
    <div className={css}>
      {addonBefore}
      {
        props.multi ?
          <textarea
            {...inputprops}
            className="x-input__ipt"
            value={props.value}
            onChange={props.onChange}
            type={type}
          /> :
          <input
            {...inputprops}
            className="x-input__ipt"
            value={props.value}
            onChange={props.onChange}
            type={type}
          />
      }
      {addonAfter}
    </div>
  )
}

export default Input
