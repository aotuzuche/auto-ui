import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import './style/index.scss'

let timer: any = 0
let div: HTMLDivElement | null

const close = (callback?: () => void) => {
  if (div) {
    div.classList.remove('x-toast--show')
    div.classList.add('x-toast--hide')
    clearTimeout(timer)
    setTimeout(() => {
      remove()
      callback && callback()
    }, 200)
  }
}

const remove = () => {
  if (div && div.parentNode) {
    unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
    div = null
  }
}

type IToast = ((text: string, duration?: number | (() => void), callback?: () => void) => void) & {
  close: () => void
}

const Toast: IToast = (text, duration = 2000, callback) => {
  remove()

  div = document.createElement('div')
  div.classList.add('x-toast', 'x-toast--show')
  div.id = 'j-x-toast'
  document.body.appendChild(div)

  render(
    createPortal(
      <div className="x-toast__inner">
        <p>{text}</p>
      </div>,
      div,
    ),
    div,
  )

  clearTimeout(timer)
  timer = setTimeout(() => {
    close(typeof duration === 'function' ? duration : callback)
  }, Math.max(typeof duration === 'number' ? duration : 2000, 500))
}

Toast.close = close

export default Toast
