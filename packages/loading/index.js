import './style'
import React from 'react'
import { createPortal, unmountComponentAtNode, render } from 'react-dom'
import Spin from '../spin'
let div

function close() {
  if (!div) return
  unmountComponentAtNode(div)
  if (div && div.parentNode) {
    div.parentNode.removeChild(div)
  }
}

function Loading(text) {
  div = document.createElement('div')
  div.classList.add('x-loading', 'x-loading--show')
  document.body.appendChild(div)

  render(
    createPortal(
      <div className="x-loading__inner">
        <Spin />
        {!!text && <p>{text}</p>}
      </div>,
      div
    ),
    div
  )

  return {
    close
  }
}

Loading.hide = close

export default Loading
