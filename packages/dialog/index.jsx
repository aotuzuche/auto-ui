import './style'
import React from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

import Modal from '../modal'

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.div = document.createElement('div')
    this.div.classList.add('_x_dialog_')
    document.body.appendChild(this.div)
  }

  componentWillUnmount() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div)
    }
  }
  _content() {
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

  render() {
    return createPortal(this._content(), this.div)
  }
}

const Scroller = props => {
  const { className, children } = props
  const composeClassName = cn('x-dialog__scroller', className)

  return (
    <div className={composeClassName}>
      <div className="x-dialog__inscroller">{children}</div>
    </div>
  )
}

Dialog.Scroller = Scroller

export default Dialog
