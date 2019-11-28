import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import './style.scss'

const close = (id: string) => {
  const div = document.getElementById(id)
  if (div && div.classList.contains('x-message--show')) {
    div.classList.remove('x-message--show')
    div.classList.add('x-message--hide')
    setTimeout(() => {
      if (div && div.parentNode) {
        unmountComponentAtNode(div)
        div.parentNode.removeChild(div)
      }
    }, 280)
  }
}

interface IMessageParams {
  title: string
  desc?: string
  feedback?: string | React.ReactElement<any>
  onFeedbackClick?: () => void
}

type IMessage = ((params: IMessageParams | string, duration?: number) => void) & {
  close: () => void
}

const Message: IMessage = (params, duration) => {
  const divs = document.querySelectorAll('.x-message.x-message--show')
  if (divs.length) {
    Message.close()
  }
  const div = document.createElement('div')
  div.classList.add('x-message', 'x-message--show')
  const id = `j-x-message--${new Date().valueOf()}-${Math.random() * 999999}`
  div.id = id
  const layoutFooter = document.querySelector('.x-app > .x-app-footer')
  if (layoutFooter && layoutFooter.clientHeight > 0) {
    div.style.paddingBottom = layoutFooter.clientHeight + 'px'
    div.classList.add('x-message--behind-footer')
    layoutFooter.before(div)
  } else {
    document.body.appendChild(div)
  }

  const _params: IMessageParams = { title: '' }
  if (typeof params === 'string') {
    _params.title = params
    _params.feedback = '知道了'
    _params.onFeedbackClick = () => close(id)
  } else {
    _params.title = params.title
    _params.desc = params.desc
    _params.feedback = params.feedback || '知道了'
    _params.onFeedbackClick = () => {
      params.onFeedbackClick && params.onFeedbackClick()
      close(id)
    }
  }

  render(
    createPortal(
      <div className="x-message__inner">
        <div className="info">
          <h6>{_params.title}</h6>
          {_params.desc && <p>{_params.desc}</p>}
        </div>
        {_params.feedback && <button onClick={_params.onFeedbackClick}>{_params.feedback}</button>}
      </div>,
      div,
    ),
    div,
  )

  if (duration && duration > 0) {
    setTimeout(close, Math.max(duration, 500), id)
  }
}
// 清除全部message
Message.close = () => {
  const divs = document.querySelectorAll('.x-message.x-message--show')
  if (divs.length) {
    divs.forEach(div => close(div.id))
  }
}

export default Message
