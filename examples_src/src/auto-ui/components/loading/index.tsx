import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import supportDarkMode from '../__utils/supportDarkMode'
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

interface IParams {
  hideMask?: boolean
  type: 'primary' | 'secondary'
}

type ILoading = ((params?: React.ReactNode | IParams) => [() => void, undefined]) & {
  hide: () => void
}

const Loading: ILoading = params => {
  // 防止多次调用先 close 检查下
  close()

  const isReactChild = React.isValidElement(params)
  let spinType: any = void 0

  div = document.createElement('div')
  div.classList.add('x-loading', 'x-loading--show')
  if (!isReactChild && params) {
    if ((params as IParams).hideMask) {
      div.classList.add('x-loading--no-mask')
    }
    if ((params as IParams).type) {
      spinType = (params as IParams).type
    }
  }

  if (supportDarkMode()) {
    div.classList.add('x-app--support-dark-mode')
  }

  document.body.appendChild(div)

  render(
    createPortal(
      <div className="x-loading__inner">{isReactChild ? params : <Spin type={spinType} />}</div>,
      div,
    ),
    div,
  )

  return [close, void 0]
}

Loading.hide = close

export default Loading
