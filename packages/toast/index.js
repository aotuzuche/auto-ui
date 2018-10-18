import './style'
import React from 'react'
import { render, createPortal, unmountComponentAtNode } from 'react-dom'

export default function Toast(text, timeout = 2000) {
  if (timeout < 500) {
    timeout = 500
  }
  const div = document.createElement('div')
  div.classList.add('x-toast', 'x-toast--show')
  document.body.appendChild(div)

  render(
    createPortal(
      <div className="x-toast__inner">
        <p>{text}</p>
      </div>,
      div
    ),
    div
  )

  const timer = setTimeout(() => {
    div.classList.remove('x-toast--show')
    div.classList.add('x-toast--hide')
    close()
  }, timeout)

  function close() {
    unmountComponentAtNode(div)
    clearTimeout(timer)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  return {
    close
  }
}
