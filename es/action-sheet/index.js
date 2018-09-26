import _extends from '@babel/runtime/helpers/esm/extends'
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose'

let _this2 = this

import './style'
import React, { Component, cloneElement } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'
import A from '../a'
import Modal from '../modal'

let ActionSheet =
/* #__PURE__ */
(function (_Component) {
  _inheritsLoose(ActionSheet, _Component)

  function ActionSheet() {
    return _Component.apply(this, arguments) || this
  }

  let _proto = ActionSheet.prototype

  _proto.componentDidMount = function componentDidMount() {
    this._container = document.createElement('div')

    this._container.classList.add('_x_actionsheet_')

    document.body.appendChild(this._container)
    this.setState({})
  }

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this._container)
  }

  _proto._content = function _content() {
    let _this = this

    let title = this.props.title ? React.createElement('h1', {
      className: 'x-actionsheet__title'
    }, this.props.title) : null
    let isArray = Array.isArray(this.props.children)
    let children = this.props.children ? isArray ? this.props.children : [this.props.children] : null
    let css = cn('x-actionsheet', this.props.className)
    let domprops = ignore(this.props, ['onBgClick', 'title', 'visible', 'onClose', 'closeText', 'onClick'])
    return React.createElement(Modal, _extends({}, domprops, {
      visible: this.props.visible,
      onBgClick: this.props.onBgClick,
      className: css
    }), title, React.createElement('div', {
      className: 'x-actionsheet__list'
    }, children && children.map(function (res, index) {
      let css = cn('x-actionsheet__item', res.props.outerClassName)

      if (res.type === Item) {
        res = cloneElement(res, {
          onClick: _this.props.onClick
        })
      }

      return React.createElement('div', {
        className: css,
        key: index
      }, res)
    })), React.createElement('a', {
      href: 'javascript:;',
      className: 'x-actionsheet__closebtn',
      onClick: this.props.onClose
    }, this.props.closeText || '取消'))
  }

  _proto.render = function render() {
    if (this._container) {
      return createPortal(this._content(), this._container)
    }

    return null
  }

  return ActionSheet
})(Component)

var Item = function Item(props) {
  let css = cn('x-actionsheet__button', props.className)
  let domprops = ignore(props, ['onClick', 'value'])
  return React.createElement(A, _extends({}, domprops, {
    href: 'javascript:;',
    className: css,
    onClick: function onClick(e) {
      return props.onClick && props.onClick.call(_this2, props.value)
    }
  }), props.text)
}

ActionSheet.Item = Item
export default ActionSheet