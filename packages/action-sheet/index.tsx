import cn from 'classnames'
import React, { Component, MouseEventHandler } from 'react'
import './style.css'

import { ASData } from 'auto-libs'
import { createPortal } from 'react-dom'
import Modal from '../modal'
import { Report } from '../utils'

export interface ActionSheetPropsItems {
  name: string
  className?: string
  report?: ASData
  [otherProps: string]: any
}

export interface ActionSheetProps {
  title?: string
  visible?: boolean
  className?: string
  items: ActionSheetPropsItems[]
  closeText: any
  onClose?: MouseEventHandler<HTMLElement>
  onClick?: (item: ActionSheetPropsItems) => void
  [otherProps: string]: any
}

export default class ActionSheet extends Component<ActionSheetProps> {
  private _container: HTMLDivElement

  public constructor(props: ActionSheetProps) {
    super(props)
    this._container = document.createElement('div')
    this._container.classList.add('_x_actionsheet_')
    document.body.appendChild(this._container)
  }

  public componentWillUnmount() {
    document.body.removeChild(this._container)
  }

  public _content() {
    const {
      title,
      visible,
      className,
      onClose,
      onClick,
      items,
      closeText,
      ...otherProps
    } = this.props

    if (!Array.isArray(items)) {
      throw new TypeError('ActionSheet 的 items 必须是个数组')
    }

    const composeClassName = cn('x-actionsheet', className)

    return (
      <Modal
        visible={visible}
        onBgClick={onClose}
        className={composeClassName}
        {...otherProps}
      >
        {!!title && <h1 className="x-actionsheet__title">{title}</h1>}
        <div className="x-actionsheet__list">
          {items.map((item, index) => {
            const { name, className, ...otherProps } = item
            const composeClassName = cn('x-actionsheet__button', className)
            return (
              <div className="x-actionsheet__item" key={index}>
                <Report
                  {...otherProps}
                  key={index}
                  className={composeClassName}
                  onClick={() => {
                    onClick && onClick(item)
                  }}
                >
                  {name}
                </Report>
              </div>
            )
          })}
        </div>
        {!!closeText && (
          <a
            href="javascript:;"
            className="x-actionsheet__closebtn"
            onClick={onClose}
          >
            {closeText}
          </a>
        )}
      </Modal>
    )
  }

  public render() {
    if (this._container) {
      return createPortal(this._content(), this._container)
    }
    return null
  }
}
