import './style'
import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import Modal from '../modal'

class Popup extends PureComponent {
  componentDidMount() {
    this._container = document.createElement('div')
    this._container.classList.add('_x_popup_')
    document.body.appendChild(this._container)

    this.setState({})
  }

  componentWillUnmount() {
    document.body.removeChild(this._container)
  }

  _content() {
    const css = cn('x-popup', {
      'x-popup--top': this.props.top,
    }, this.props.className)

    let children = this.props.children
    if (!Array.isArray(children)) {
      children = [children]
    }
    let hasScrollChildren = false
    children.forEach(res => {
      if (res.type === Scroller && !hasScrollChildren) {
        hasScrollChildren = true
      }
    })

    const innercss = cn('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': this.props.noPadding,
    })

    const domprops = ignore(this.props, [
      'visible',
      'height',
      'onBgClick',
      'noPadding',
      'top',
    ])

    return (
      <Modal
        {...domprops}
        visible={this.props.visible}
        height={this.props.height}
        onBgClick={this.props.onBgClick}
        className={css}
      >
        <div className={innercss}>
          {this.props.children}
        </div>
      </Modal>
    )
  }

  render() {
    if (this._container) {
      return createPortal(
        this._content(),
        this._container,
      )
    }
    return null
  }
}

const Scroller = props => {
  const css = cn('x-popup__scroller', props.className)

  const domprops = ignore(props, [])

  return (
    <div {...domprops} className={css}>
      <div className="x-popup__inscroller">{props.children}</div>
    </div>
  )
}

Popup.Scroller = Scroller

export default Popup
