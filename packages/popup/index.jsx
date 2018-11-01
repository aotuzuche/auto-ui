import './style'
import React from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

import Modal from '../modal'

class Popup extends React.Component {
  componentDidMount() {
    // 在当前节点中展示
    if (this.props.local) {
      return
    }

    this._container = document.createElement('div')
    this._container.classList.add('_x_popup_')
    document.body.appendChild(this._container)
  }

  componentWillUnmount() {
    this._container && document.body.removeChild(this._container)
  }

  _content() {
    const {
      className,
      top,
      onBgClick,
      height,
      visible,
      noPadding,
      children,
      ...otherProps
    } = this.props
    const composeClassName = cn(
      'x-popup',
      {
        'x-popup--top': top
      },
      className
    )

    const composeChildren = [].concat(children)
    let hasScrollChildren = false
    composeChildren.forEach(res => {
      if (res.type === Scroller && !hasScrollChildren) {
        hasScrollChildren = true
      }
    })

    const innercss = cn('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': noPadding
    })

    // DOM没有local这个属性，需要删除
    delete otherProps.local

    return (
      <Modal
        {...otherProps}
        visible={visible}
        height={height}
        onBgClick={onBgClick}
        className={composeClassName}
      >
        <div className={innercss}>{children}</div>
      </Modal>
    )
  }

  render() {
    if (this._container) {
      return createPortal(this._content(), this._container)
    }
    else if (this.props.local) {
      return this._content()
    }
    return null
  }
}

const Scroller = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-popup__scroller', className)

  return (
    <div {...otherProps} className={composeClassName}>
      <div className="x-popup__inscroller">{children}</div>
    </div>
  )
}

Popup.Scroller = Scroller

export default Popup
