import './style'
import React from 'react'
import cn from 'classnames'

export interface ModalProps {
  visible?: boolean
  onBgClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  height?: number
  className?: string
  [otherProps: string]: any
}

export interface ModalState {
  visible: boolean
  ani: string
}

export class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props)

    this.state = {
      visible: false,
      ani: 'init'
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this._enter()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: ModalProps) {
    if (!this.props.visible && nextProps.visible) {
      this._enter()
    } else if (this.props.visible && !nextProps.visible) {
      this._leave()
    }
  }

  _enter() {
    this.setState({
      visible: true
    })

    setTimeout((e: any) => {
      this.setState({
        ani: 'enter'
      })
    })

    const focusdom: HTMLElement | null = document.querySelector(':focus')
    if (focusdom) {
      focusdom.blur()
    }
  }

  _leave() {
    this.setState({
      ani: 'leave'
    })
  }

  _onAnimationEnd: (
    event: React.AnimationEvent<HTMLDivElement>
  ) => void = e => {
    if (this.state.ani !== 'leave') {
      return
    }
    this.setState({
      ani: 'init',
      visible: false
    })
  }

  render() {
    const { className, height, onBgClick, ...otherProps } = this.props
    const css = cn('x-modal', `x-modal--${this.state.ani}`, className)

    const composeHeight = height || 0

    return (
      <div
        {...otherProps}
        className={css}
        style={{
          display: this.state.visible ? '' : 'none'
        }}
      >
        <div className="x-modal__bg" onClick={onBgClick} />
        <div
          className="x-modal__inner"
          style={{
            height: composeHeight + '%'
          }}
          onAnimationEnd={this._onAnimationEnd}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
