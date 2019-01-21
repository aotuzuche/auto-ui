import cn from 'classnames'
import React from 'react'
import './style.css'

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

export default class Modal extends React.Component<ModalProps, ModalState> {
  public constructor(props: ModalProps) {
    super(props)

    this.state = {
      visible: false,
      ani: 'init'
    }
  }

  public componentDidMount() {
    if (this.props.visible) {
      this._enter()
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: ModalProps) {
    if (!this.props.visible && nextProps.visible) {
      this._enter()
    } else if (this.props.visible && !nextProps.visible) {
      this._leave()
    }
  }

  public _enter() {
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

  public _leave() {
    this.setState({
      ani: 'leave'
    })
  }

  public _onAnimationEnd: (
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

  public render() {
    const { className, height, onBgClick, visible, ...otherProps } = this.props
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
            height: composeHeight ? composeHeight + '%' : 'auto'
          }}
          onAnimationEnd={this._onAnimationEnd}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
