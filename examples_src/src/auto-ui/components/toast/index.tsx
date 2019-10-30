import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import './style.scss'

let timer: any = 0
let div: HTMLDivElement | null

const close = () => {
  if (div) {
    div.classList.remove('x-toast--show')
    div.classList.add('x-toast--hide')
    clearTimeout(timer)
    setTimeout(remove, 200)
  }
}

const remove = () => {
  if (div && div.parentNode) {
    unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
    div = null
  }
}

type IToast = ((text: string, duration?: number) => [() => void, void]) & { hide: () => void }

const Toast: IToast = (text, duration = 2000) => {
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
    close()
  }, Math.max(duration, 500))

  return [close, void 0]
}

Toast.hide = close

export default Toast
