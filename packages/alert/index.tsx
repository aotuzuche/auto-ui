import cn from 'classnames'
import { createBrowserHistory } from 'history'
import React, { MouseEventHandler } from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import './style.css'

import Button, { ButtonProps } from '../button'

export interface AlertProps {
  title?: React.ReactNode
  btns?: ButtonProps[]
  className?: string
  desc?: React.ReactNode
  onClose?: MouseEventHandler<Element>
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
              const {
                name,
                onClick,
                className,
                type = 'primary',
                ...otherProps
              } = btn

              const composeClassName = cn('auto-ui-alert__btns-btn', className)

              return (
                <Button
                  className={composeClassName}
                  onClick={e => {
                    onClick && onClick(e)
                    onClose && onClose(e)
                  }}
                  key={index}
                  type={type}
                  {...otherProps}
                >
                  {name}
                </Button>
              )
            })}
        </div>
      </div>
    )
  }
}

function Alert(params: AlertProps, callback: Function) {
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

  const browserHistory = createBrowserHistory()

  const unListen = browserHistory.listen((location, action) => {
    close()
  })

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
      unListen()
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

Alert.async = async (params: AlertProps) => {
  return new Promise(resolve => {
    Alert(params, () => {
      resolve()
    })
  })
}

export default Alert
