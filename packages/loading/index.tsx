import React, { ReactNode } from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import Spin from '../spin'

let div: HTMLDivElement

function close() {
  if (!div) return
  unmountComponentAtNode(div)
  if (div && div.parentNode) {
    div.parentNode.removeChild(div)
  }
}

export default function Loading(text: ReactNode) {
  // 防止多次调用先 close 检查下
  close()

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
