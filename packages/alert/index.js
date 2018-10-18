import React from 'react'
import { render, createPortal, unmountComponentAtNode } from 'react-dom'
import './style'
import A from '../a'
import cn from 'classnames'

class Alert extends React.Component {
  render() {
    const { title, desc, btns, onClose } = this.props
    return (
      <div className="x-alert__inner">
        <div className="x-alert__body">
          {!!title && <h1>{title}</h1>}
          <p className={title ? '' : 'no-title'}>{desc}</p>
        </div>
        <div className="x-alert__btns">
          {btns.map((btn, index) => {
            const { name, className, onClick, ...otherProps } = btn
            let composeClassName
            if (index === 0) {
              composeClassName = cn('x-alert__btn-y', className)
            } else if (index === 1) {
              composeClassName = cn('x-alert__btn-n', className)
            } else {
              composeClassName = cn('x-alert__btn-y', className)
            }
            return (
              <A
                className={composeClassName}
                {...otherProps}
                onClick={() => {
                  onClick && onClick()
                  onClose()
                }}
                key={index}
              >
                {name}
              </A>
            )
          })}
        </div>
      </div>
    )
  }
}

export default function alert(params) {
  let { className, btns } = params
  const div = document.createElement('div')
  div.classList.add('x-alert', 'x-alert--show')
  className && div.classList.add(className)
  document.body.appendChild(div)

  function close() {
    div.classList.remove('x-alert--show')
    div.classList.add('x-alert--hide')
    setTimeout(() => {
      unmountComponentAtNode(div)
      if (div && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }, 200)
  }

  btns = btns ? btns : [{ name: '确定' }]

  if (typeof params === 'string') {
    render(
      createPortal(<Alert title={params} btns={btns} onClose={close} />, div),
      div
    )
  } else {
    render(
      createPortal(<Alert btns={btns} {...params} onClose={close} />, div),
      div
    )
  }

  return {
    close
  }
}
