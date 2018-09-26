import _extends from '@babel/runtime/helpers/esm/extends'
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose'
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized'
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty'
import './style'
import React, { Component } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

let Modal =
/* #__PURE__ */
(function (_Component) {
  _inheritsLoose(Modal, _Component)

  function Modal(props) {
    let _this

    _this = _Component.call(this, props) || this

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), '_onAnimationEnd', function (e) {
      if (_this.state.ani !== 'leave') {
        return
      }

      _this.setState({
        ani: 'init',
        visible: false
      })
    })

    _this.state = {
      visible: false,
      ani: 'init'
    }
    return _this
  }

  let _proto = Modal.prototype

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.visible) {
      this._enter()
    }
  }

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this._enter()
    } else if (this.props.visible && !nextProps.visible) {
      this._leave()
    }
  }

  _proto._enter = function _enter() {
    let _this2 = this

    this.setState({
      visible: true
    })
    setTimeout(function (e) {
      _this2.setState({
        ani: 'enter'
      })
    })
    let focusdom = document.querySelector(':focus')

    if (focusdom) {
      focusdom.blur()
    }
  }

  _proto._leave = function _leave() {
    this.setState({
      ani: 'leave'
    })
  }

  _proto.render = function render() {
    let css = cn('x-modal', 'x-modal--' + this.state.ani, this.props.className)
    let domprops = ignore(this.props, ['onBgClick', 'height', 'visible'])
    let height = this.props.height ? this.props.height : ''

    if (height && !isNaN(height - 0)) {
      height = height + '%'
    }

    return React.createElement('div', _extends({}, domprops, {
      className: css,
      style: {
        display: this.state.visible ? '' : 'none'
      }
    }), React.createElement('div', {
      className: 'x-modal__bg',
      onClick: this.props.onBgClick
    }), React.createElement('div', {
      className: 'x-modal__inner',
      style: {
        height: height
      },
      onAnimationEnd: this._onAnimationEnd
    }, this.props.children))
  }

  return Modal
})(Component)

export default Modal