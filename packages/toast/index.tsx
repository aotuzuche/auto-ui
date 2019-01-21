import React, { ReactNode } from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import './style.css'

let timer: number
const DefaultTime = 500
const minTimeNum = 200
// const DefaultTimeNum = 1500

export default function Toast(text: ReactNode, timeout: number) {
  let composeTimeout = timeout || DefaultTime
  if (timeout < minTimeNum) {
    composeTimeout = DefaultTime
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
  }, composeTimeout)

  function close() {
    div.classList.remove('x-toast--show')
    div.classList.add('x-toast--hide')
    setTimeout(() => {
      unmountComponentAtNode(div)
      if (div && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }, minTimeNum)
  }

  return {
    close
  }
}
