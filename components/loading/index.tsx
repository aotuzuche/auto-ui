import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import Spin from '../spin/index'
import './style/index.scss'

let div: HTMLDivElement | null

const close = (): void => {
  if (div && div.parentNode) {
    unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
    div = null
  }
}

type ILoading = (() => [() => void, void]) & { hide: () => void }

const Loading: ILoading = () => {
  // 防止多次调用先 close 检查下
  close()

  div = document.createElement('div')
  div.classList.add('x-loading', 'x-loading--show')
  document.body.appendChild(div)

  render(
    createPortal(
      <div className="x-loading__inner">
        <Spin />
      </div>,
      div,
    ),
    div,
  )

  return [close, void 0]
}

Loading.hide = close

export default Loading
