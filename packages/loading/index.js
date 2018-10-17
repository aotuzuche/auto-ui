import './style'
import React from 'react'
import { createPortal, unmountComponentAtNode, render } from 'react-dom'
import Spin from '../spin'

export default function Loading(text) {
  const div = document.createElement('div')
  div.classList.add('x-loading', 'x-loading--show')
  document.body.appendChild(div)

  function close() {
    unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }
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
