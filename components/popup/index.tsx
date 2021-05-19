import cn from 'classnames'
import * as React from 'react'
import { createPortal } from 'react-dom'
import Modal from '../modal/index'
import './style/index.scss'

interface IProps {
  className?: string
  local?: boolean
  top?: boolean
  direction?: 'top' | 'left' | 'right' | 'bottom'
  height?: number | string
  width?: number | string
  visible?: boolean
  keepalive?: boolean
  smoothBorder?: boolean
  children: React.ReactNode
  onMaskClick?: () => void
  noPadding?: boolean
  [otherProps: string]: any
}

class Popup extends React.PureComponent<IProps> {
  static Scroller: React.FC<IScrollerProps>
  private div: Element | undefined = void 0

  constructor(props: IProps) {
    super(props)

    // 在当前节点中展示
    if (props.local) {
      return
    }

    this.div = document.createElement('div')
    this.div.classList.add('_x_popup_')
    document.body.appendChild(this.div)
  }

  componentWillUnmount() {
    if (this.div) {
      document.body.removeChild(this.div)
    }
  }

  content() {
    let {
      className,
      top,
      direction = 'top',
      onMaskClick,
      height,
      width,
      visible,
      keepalive = true,
      noPadding,
      smoothBorder,
      children,
      ...otherProps
    } = this.props

    if (top) {
      console.warn('auto-ui: Popup组件的top属性请使用direction属性来代替')
      direction = 'bottom'
    }

    const composeClassName = cn(
      'x-popup',
      {
        'x-popup--smooth-border': smoothBorder,
      },
      `x-popup--${direction}`,
      className,
    )

    const composeChildren: any[] = []
    if (Array.isArray(children)) {
      composeChildren.push(...children)
    } else {
      composeChildren.push(children)
    }

    let hasScrollChildren = false
    composeChildren.forEach(res => {
      if (res.type === Scroller && !hasScrollChildren) {
        hasScrollChildren = true
      }
    })

    const innercss = cn('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': noPadding,
    })

    // DOM没有local这个属性，需要删除
    delete otherProps.local

    return (
      <Modal
        {...otherProps}
        visible={visible}
        keepalive={keepalive}
        height={height}
        width={width}
        onMaskClick={onMaskClick}
        className={composeClassName}
      >
        <div className={innercss}>{children}</div>
      </Modal>
    )
  }

  render() {
    if (this.div) {
      return createPortal(this.content(), this.div)
    }
    if (this.props.local) {
      return this.content()
    }
    return null
  }
}

interface IScrollerProps {
  className?: string
  [otherProps: string]: any
}

const Scroller: React.FC<IScrollerProps> = props => {
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
