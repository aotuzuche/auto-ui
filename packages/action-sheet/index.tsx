import cn from 'classnames'
import * as React from 'react'
import { createPortal } from 'react-dom'
import './style'

import { A } from '../a'
import { Modal } from '../modal'

export interface ActionSheetProps {
  title?: string
  visible?: boolean
  className?: string
  items: []
  closeText: any
  onClose?: (
    e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export class ActionSheet extends React.Component<ActionSheetProps> {
  public _container: HTMLDivElement

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
        a="1"
        {...otherProps}
      >
        {!!title && <h1 className="x-actionsheet__title">{title}</h1>}
        <div className="x-actionsheet__list">
          {items.map((item, index) => {
            const { name, className } = item
            const composeClassName = cn('x-actionsheet__button', className)
            return (
              <div className="x-actionsheet__item" key={index}>
                <A
                  key={index}
                  className={composeClassName}
                  onClick={() => {
                    onClick && onClick(item)
                  }}
                >
                  {name}
                </A>
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
