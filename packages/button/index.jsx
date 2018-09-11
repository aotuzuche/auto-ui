import './style'
import React from 'react'
import cn from 'classnames'
import Spin from '../spin'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const Button = props => {
  const type = props.type ? props.type : 'primary'
  const css = cn('x-button', {
    'x-button--disabled': props.disabled || props.loading,
    'x-button--mini': props.mini,
  }, 'x-button--' + type, props.className)

  let children = props.children
  if (!Array.isArray(children)) {
    children = [children]
  }

  let fChildren = []
  children.forEach(i => {
    const last = fChildren[fChildren.length - 1] || ''
    if (typeof i !== 'object') {
      if (typeof last === 'object') {
        fChildren.push(i)
      }
      else {
        fChildren[Math.max(fChildren.length - 1, 0)] = last + i
      }
    }
    else {
      fChildren.push(i)
    }
  })

  const domprops = ignore(props, [
    'type',
    'disabled',
    'mini',
    'loading',
    'onClick',
  ])

  return (
    <A {...domprops} className={css} onClick={props.onClick}>
      {
        props.loading ?
          <Spin className="x-button__loading" /> :
          null
      }
      {
        fChildren.map((res, i) => {
          if (typeof res !== 'object') {
            return <p className="x-button__text" key={i}>{res}</p>
          }
          return res
        })
      }
    </A>
  )
}

export default Button
