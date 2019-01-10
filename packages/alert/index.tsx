import cn from 'classnames'
import React, { MouseEventHandler } from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import { A } from '../a'

export interface AlertProps {
  title?: React.ReactNode
  btns?: [
    {
      name: string;
      className?: string;
      onClick?: MouseEventHandler<HTMLAnchorElement>;
      [otherProps: string]: any;
    }
  ]
  className?: string
  desc?: React.ReactNode
  onClose?: MouseEventHandler<HTMLAnchorElement>
  [otherProps: string]: any
}

class AlertCom extends React.Component<AlertProps, any> {
  public render() {
    const { title, desc, btns, onClose, ...otherProps } = this.props
    return (
      <div className="x-alert__inner" {...otherProps}>
        <div className="x-alert__body">
          {!!title && <h1>{title}</h1>}
          <p className={title ? '' : 'no-title'}>{desc}</p>
        </div>
        <div className="x-alert__btns">
          {!!btns &&
            btns.map((btn, index) => {
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
                  onClick={e => {
                    onClick && onClick(e)
                    onClose && onClose(e)
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

export function Alert(params: AlertProps, callback: Function) {
  let composeParams: AlertProps = params
  if (typeof params === 'string') {
    composeParams = {
      title: params
    }
  }

  let { className, btns } = composeParams

  const div = document.createElement('div')
  div.classList.add('x-alert', 'x-alert--show')
  className && div.classList.add(className)
  document.body.appendChild(div)

  function close() {
    div.classList.remove('x-alert--show')

    div.classList.add('x-alert--hide')
    const timeNumber = 200
    setTimeout(() => {
      unmountComponentAtNode(div)
      if (div && div.parentNode) {
        div.parentNode.removeChild(div)
      }
      callback && callback()
    }, timeNumber)
  }

  btns = btns ? btns : [{ name: '确定' }]

  render(
    createPortal(
      <AlertCom btns={btns} {...composeParams} onClose={close} />,
      div
    ),
    div
  )

  return {
    close
  }
}
