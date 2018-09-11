import './style'
import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import Modal from '../modal'

class Dialog extends PureComponent {
  componentDidMount() {
    this._container = document.createElement('div')
    this._container.classList.add('_x_dialog_')
    document.body.appendChild(this._container)

    this.setState({})
  }

  componentWillUnmount() {
    document.body.removeChild(this._container)
  }

  _content() {
    const css = cn('x-dialog', this.props.className)

    const domprops = ignore(this.props, [
      'onBgClick',
      'visible',
      'height',
    ])

    return (
      <Modal
        {...domprops}
        visible={this.props.visible}
        height={this.props.height}
        onBgClick={this.props.onBgClick}
        className={css}
      >
        <div className="x-dialog__inner">
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
  const css = cn('x-dialog__scroller', props.className)

  const domprops = ignore(props, [])

  return (
    <div {...domprops} className={css}>
      <div className="x-dialog__inscroller">{props.children}</div>
    </div>
  )
}

Dialog.Scroller = Scroller

export default Dialog
