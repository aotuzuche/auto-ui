import cn from 'classnames'
import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

import Modal from '../modal'

export interface DialogProps {
  className?: string
  height?: number
  visible?: boolean
  children?: ReactNode
  onBgClick?: MouseEventHandler<HTMLDivElement>
  [otherProps: string]: any
}

export default class Dialog extends React.Component<DialogProps, any> {
  public static Scroller: FC<DialogScrollerProps>
  private div: HTMLDivElement
  public constructor(props: DialogProps) {
    super(props)
    this.div = document.createElement('div')
    this.div.classList.add('_x_dialog_')
    document.body.appendChild(this.div)
  }

  public componentWillUnmount() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div)
    }
  }
  public _content() {
    const {
      className,
      height,
      visible,
      children,
      onBgClick,
      ...otherProps
    } = this.props

    const composeClassName = cn('x-dialog', className)

    return (
      <Modal
        {...otherProps}
        visible={visible}
        height={height}
        onBgClick={onBgClick}
        className={composeClassName}
      >
        <div className="x-dialog__inner">{children}</div>
      </Modal>
    )
  }

  public render() {
    return createPortal(this._content(), this.div)
  }
}

export interface DialogScrollerProps {
  className?: string
}

const Scroller: FC<DialogScrollerProps> = props => {
  const { className, children } = props
  const composeClassName = cn('x-dialog__scroller', className)

  return (
    <div className={composeClassName}>
      <div className="x-dialog__inscroller">{children}</div>
    </div>
  )
}

Dialog.Scroller = Scroller
