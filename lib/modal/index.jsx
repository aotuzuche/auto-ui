import './style'
import React, { Component } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      ani: 'init',
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this._enter()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this._enter()
    }
    else if (this.props.visible && !nextProps.visible) {
      this._leave()
    }
  }

  _enter() {
    this.setState({
      visible: true,
    })

    setTimeout(e => {
      this.setState({
        ani: 'enter',
      })
    })

    const focusdom = document.querySelector(':focus')
    if (focusdom) {
      focusdom.blur()
    }
  }

  _leave() {
    this.setState({
      ani: 'leave',
    })
  }

  _onAnimationEnd = e => {
    if (this.state.ani !== 'leave') {
      return
    }
    this.setState({
      ani: 'init',
      visible: false,
    })
  }

  render() {
    const css = cn(
      'x-modal',
      `x-modal--${this.state.ani}`,
      this.props.className,
    )

    const domprops = ignore(this.props, [
      'onBgClick',
      'height',
      'visible',
    ])

    let height = this.props.height ? this.props.height : ''
    if (height && !isNaN(height - 0)) {
      height = height + '%'
    }

    return (
      <div
        {...domprops}
        className={css}
        style={{
          display: this.state.visible ? '' : 'none'
        }}
      >
        <div
          className="x-modal__bg"
          onClick={this.props.onBgClick}
        />
        <div
          className="x-modal__inner"
          style={{
            height: height
          }}
          onAnimationEnd={this._onAnimationEnd}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default Modal
