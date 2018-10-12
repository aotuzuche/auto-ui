import './style'
import React from 'react'
import cn from 'classnames'
import Spin from '../spin'

import A from '../a'

const Button = props => {
  const {
    type,
    disabled,
    mini,
    className,
    loading,
    children,
    ...otherProps
  } = props
  console.log('type', type)
  const css = cn(
    'x-button',
    {
      'x-button--disabled': disabled || loading,
      'x-button--mini': mini
    },
    'x-button--' + (type || 'primary'),
    className
  )

  const composeChildren = [].concat(children)

  return (
    <A {...otherProps} className={css}>
      {!!loading && <Spin className="x-button__loading" />}
      {composeChildren.map((res, i) => {
        return (
          <p className="x-button__text" key={i}>
            {res}
          </p>
        )
      })}
    </A>
  )
}

export default Button
