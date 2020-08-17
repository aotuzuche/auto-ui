import cn from 'classnames'
import * as React from 'react'
import { createPortal, render, unmountComponentAtNode } from 'react-dom'
import supportDarkMode from '../__utils/supportDarkMode'
import Button from '../button/index'
import './style/index.scss'

interface IBtn {
  name: string
  className?: string
  type?: 'primary' | 'danger' | 'default'
  value?: string | number | boolean
  onClick?: () => void
  [otherProps: string]: any
}

interface IProps {
  title?: string | React.ReactElement<any>
  desc?: string | React.ReactElement<any>
  className?: string
  btns?: IBtn[]
  btnDirection?: 'row' | 'column'
  onClose: (btn: IBtn) => void
}

const AlertComponent: React.FC<IProps> = props => {
  const { title, desc, onClose, btnDirection } = props
  let { btns } = props

  const onBtnClick = (onClick: () => void = () => {}, btn: IBtn) => {
    return () => {
      onClick()
      onClose(btn)
    }
  }

  const renderBtns = () => {
    if (!btns || btns.length === 0) {
      btns = [{ name: '确定', capsule: true }]
    }
    const onlyBtn = btns.length <= 1
    return btns.map((btn, index) => {
      const { name, className, onClick, type, value, ...otherProps } = btn
      let btnType = type
      if (typeof type === 'undefined') {
        if (onlyBtn) {
          btnType = 'primary'
        } else {
          btnType = index === 0 ? 'default' : 'primary'
        }
      }
      return (
        <Button
          {...otherProps}
          className={className}
          type={btnType}
          key={index}
          capsule={true}
          onClick={onBtnClick(onClick, btn)}
        >
          {name}
        </Button>
      )
    })
  }

  return (
    <div className="x-alert__inner">
      <div className="x-alert__body">
        {!!title && <h1>{title}</h1>}
        <div className={title ? 'desc' : 'desc no-title'}>{desc}</div>
      </div>
      <div
        className={cn('x-alert__btns', {
          'x-alert__btns--column': btnDirection === 'column',
        })}
      >
        {renderBtns()}
      </div>
    </div>
  )
}

interface IAlertParams {
  title?: string | React.ReactElement<any>
  desc?: string | React.ReactElement<any>
  className?: string
  btns?: IBtn[]
  btnDirection?: 'row' | 'column'
}

type IAsyncAlert = (params: IAlertParams | string) => Promise<string | number | boolean | undefined>
type IAlert = ((
  params: IAlertParams | string,
  callback?: (value?: string | number | boolean) => void,
) => [() => void, undefined]) & { async: IAsyncAlert }

const Alert: IAlert = (params, callback) => {
  const div = document.createElement('div')
  div.classList.add('x-alert', 'x-alert--show')
  if (typeof params !== 'string' && params.className) {
    div.classList.add(params.className)
  }

  if (supportDarkMode()) {
    div.classList.add('x-app--support-dark-mode')
  }

  document.body.appendChild(div)

  const close: (btn?: IBtn) => void = btn => {
    div.classList.remove('x-alert--show')
    div.classList.add('x-alert--hide')
    setTimeout(() => {
      if (div && div.parentNode) {
        unmountComponentAtNode(div)
        div.parentNode.removeChild(div)
      }
      if (callback && btn) {
        callback(btn.value)
      }
    }, 200)
  }

  if (typeof params === 'string') {
    render(createPortal(<AlertComponent desc={params} onClose={close} />, div), div)
  } else {
    render(
      createPortal(
        <AlertComponent
          {...params}
          btns={params.btns}
          btnDirection={params.btnDirection}
          title={params.title || ''}
          onClose={close}
        />,
        div,
      ),
      div,
    )
  }

  const resClose = close as () => void
  return [resClose, void 0]
}

Alert.async = params => {
  return new Promise(resolve => {
    Alert(params, value => {
      resolve(value)
    })
  })
}

export default Alert
