import './style'
import React, { Component, cloneElement } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'
import Modal from '../modal'

class ActionSheet extends Component {
  componentDidMount() {
    this._container = document.createElement('div')
    this._container.classList.add('_x_actionsheet_')
    document.body.appendChild(this._container)

    this.setState({})
  }

  componentWillUnmount() {
    document.body.removeChild(this._container)
  }

  _content() {
    const title = this.props.title ?
      <h1 className="x-actionsheet__title">{this.props.title}</h1> :
      null

    const isArray = Array.isArray(this.props.children)

    const children = this.props.children ? isArray ? this.props.children : [this.props.children] : null

    const css = cn('x-actionsheet', this.props.className)

    const domprops = ignore(this.props, [
      'onBgClick',
      'title',
      'visible',
      'onClose',
      'closeText',
      'onClick'
    ])

    return (
      <Modal {...domprops} visible={this.props.visible} onBgClick={this.props.onBgClick} className={css}>
        {title}
        <div className="x-actionsheet__list">
          {
            children && children.map((res, index) => {
              const css = cn('x-actionsheet__item', res.props.outerClassName)
              if (res.type === Item) {
                res = cloneElement(res, {
                  onClick: this.props.onClick
                })
              }
              return (
                <div className={css} key={index}>{res}</div>
              )
            })
          }
        </div>
        <a
          href="javascript:;"
          className="x-actionsheet__closebtn"
          onClick={this.props.onClose}
        >
          {this.props.closeText || '取消'}
        </a>
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

const Item = props => {
  const css = cn('x-actionsheet__button', props.className)

  const domprops = ignore(props, [
    'onClick',
    'value'
  ])

  return (
    <A
      {...domprops}
      href="javascript:;"
      className={css}
      onClick={e => props.onClick && props.onClick.call(this, props.value)}
    >
      {props.text}
    </A>
  )
}

ActionSheet.Item = Item

export default ActionSheet
