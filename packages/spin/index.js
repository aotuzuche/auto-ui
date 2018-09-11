import './style'
import React from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

const string = `
  <div class="x-loading__spin">
    <svg class="x-loading__spin_circular" viewBox="25 25 50 50">
      <circle class="x-loading__spin_path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
`

const Spin = props => {
  let css = cn('x-loading__spin', props.className)
  let domprops = {}

  // 有文字时，样式加在外层上
  if (props.text) {
    css = 'x-loading__spin'
  }
  else {
    domprops = ignore(props, [])
  }

  const loadingSpin = (
    <div {...domprops} className={css}>
      <svg className="x-loading__spin_circular" viewBox="25 25 50 50">
        <circle
          className="x-loading__spin_path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )

  if (props.text) {
    let css = cn('x-spin', props.className)
    let domprops = ignore(props, [
      'text',
    ])
    return (
      <div {...domprops} className={css}>
        {loadingSpin}
        <p className="x-spin__text">{props.text}</p>
      </div>
    )
  }

  return loadingSpin
}

Spin.toString = () => string
export default Spin
