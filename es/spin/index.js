import _extends from '@babel/runtime/helpers/esm/extends'
import './style'
import React from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'
let string = '\n  <div class="x-loading__spin">\n    <svg class="x-loading__spin_circular" viewBox="25 25 50 50">\n      <circle class="x-loading__spin_path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>\n    </svg>\n  </div>\n'

let Spin = function Spin(props) {
  let css = cn('x-loading__spin', props.className)
  let domprops = {} // 有文字时，样式加在外层上

  if (props.text) {
    css = 'x-loading__spin'
  } else {
    domprops = ignore(props, [])
  }

  let loadingSpin = React.createElement('div', _extends({}, domprops, {
    className: css
  }), React.createElement('svg', {
    className: 'x-loading__spin_circular',
    viewBox: '25 25 50 50'
  }, React.createElement('circle', {
    className: 'x-loading__spin_path',
    cx: '50',
    cy: '50',
    r: '20',
    fill: 'none',
    strokeWidth: '2',
    strokeMiterlimit: '10'
  })))

  if (props.text) {
    let _css = cn('x-spin', props.className)

    let _domprops = ignore(props, ['text'])

    return React.createElement('div', _extends({}, _domprops, {
      className: _css
    }), loadingSpin, React.createElement('p', {
      className: 'x-spin__text'
    }, props.text))
  }

  return loadingSpin
}

Spin.toString = function () {
  return string
}

export default Spin