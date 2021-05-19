import cn from 'classnames'
import * as React from 'react'
import supportDarkMode from '../__utils/supportDarkMode'
import './style/index.scss'

interface IProps {
  visible?: boolean
  className?: string
  onMaskClick?: () => void
  height?: number | string
  width?: number | string
  addonTop?: React.ReactNode
  addonBottom?: React.ReactNode
}

interface IState {
  visible: boolean
  supportDarkMode?: boolean
  ani: 'init' | 'enter' | 'leave'
  noContent: boolean // 无内容，首次加载时不渲染内容，第一次打开后保持内容数据
}

class Modal extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      visible: false,
      ani: 'init',
      noContent: true,
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this.enter()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps) {
    if (!this.props.visible && nextProps.visible) {
      this.enter()
    } else if (this.props.visible && !nextProps.visible) {
      this.leave()
    }
  }

  render() {
    const {
      onMaskClick,
      height,
      width,
      visible,
      className,
      addonTop,
      addonBottom,
      ...otherProps
    } = this.props

    const composeClassName = cn(
      'x-modal',
      `x-modal--${this.state.ani}`,
      {
        'x-app--support-dark-mode': this.state.supportDarkMode,
      },
      className,
    )

    let heightval = ''
    if (height) {
      if (typeof height === 'number') {
        heightval = `${String(height)}%`
      } else {
        heightval = height
      }
    }

    let widthval = ''
    if (width) {
      if (typeof width === 'number') {
        widthval = `${String(width)}%`
      } else {
        widthval = width
      }
    }

    return (
      <div
        {...otherProps}
        className={composeClassName}
        style={{
          display: this.state.visible ? '' : 'none',
        }}
      >
        <div className="x-modal__mask" onClick={onMaskClick} />
        {addonTop}
        <div
          className="x-modal__inner"
          style={{ height: heightval, width: widthval }}
          onAnimationEnd={this.onAnimationEnd}
        >
          {!this.state.noContent && this.props.children}
        </div>
        {addonBottom}
      </div>
    )
  }

  private enter() {
    this.setState({
      visible: true,
      noContent: false,
      supportDarkMode: supportDarkMode(),
    })

    setTimeout(() => {
      this.setState({
        ani: 'enter',
      })
    })

    const focusdom = document.querySelector(':focus')
    const nodeName = (focusdom || ({} as any)).nodeName
    if (focusdom && (nodeName === 'input' || nodeName === 'textarea')) {
      ;(focusdom as HTMLInputElement | HTMLTextAreaElement).blur()
    }
  }

  private leave() {
    this.setState({
      ani: 'leave',
    })
  }

  private onAnimationEnd = () => {
    if (this.state.ani !== 'leave') {
      return
    }
    this.setState({
      ani: 'init',
      visible: false,
    })
  }
}

export default Modal
