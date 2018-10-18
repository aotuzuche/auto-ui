import './style'
import React from 'react'
import { render, createPortal, unmountComponentAtNode } from 'react-dom'

let timer = null

export default function Toast(text, timeout = 2000) {
  if (timeout < 500) {
    timeout = 500
  }
  const oldDiv = document.getElementById('j-x-toast')
  oldDiv && oldDiv.parentNode && oldDiv.parentNode.removeChild(oldDiv)
  timer && clearTimeout(timer)
  const div = document.createElement('div')
  div.classList.add('x-toast', 'x-toast--show')
  div.id = 'j-x-toast'
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

  timer = setTimeout(() => {
    close()
  }, timeout)

  function close() {
    div.classList.remove('x-toast--show')
    div.classList.add('x-toast--hide')
    clearTimeout(timer)
    setTimeout(() => {
      unmountComponentAtNode(div)
      if (div && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }, 200)
  }

  return {
    close
  }
}
