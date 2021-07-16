import cn from 'classnames'
import * as React from 'react'
import { createPortal } from 'react-dom'
import Modal from '../modal/index'
import './style/index.scss'
import {isH5} from '../__utils/env';

interface IItem {
  name: React.ReactChild
  value: string | number | boolean
  className?: string
}

interface IProps {
  title?: React.ReactChild
  visible: boolean
  className?: string
  onClose?: () => void
  onClick: (value: string | number | boolean) => void
  items: IItem[]
  closeText?: string
  children?: null
  [otherProps: string]: any
}

class ActionSheet extends React.PureComponent<IProps, any> {
  private div: HTMLDivElement | null = null

  constructor(props: IProps) {
    super(props)
    this.div = document.createElement('div')
    this.div.classList.add('_x_actionsheet_')
    document.body.appendChild(this.div)
  }

  componentWillUnmount() {
    if (this.div) {
      document.body.removeChild(this.div)
    }
  }

  render() {
    if(!isH5) {
      return this.content();
    }
    if (this.div) {
      return createPortal(this.content(), this.div)
    }
   return null
  }
  private onItemClick = (value: any) => {
    return () => {
      if (this.props.onClick) {
        this.props.onClick(value)
      }
    }
  }

  private renderTitle = () => {
    const title = this.props.title
    if (title) {
      if (typeof title === 'string' || typeof title === 'number') {
        return <h1 className="x-actionsheet__title">{title}</h1>
      }
      return <header className="x-actionsheet__title">{title}</header>
    }
    return null
  }

  private renderItem = (children: React.ReactChild, value: any, className?: string) => {
    if (typeof children === 'string' || typeof children === 'number') {
      const composeClassName = cn('x-actionsheet__button', className)
      return (
        <button className={composeClassName} onClick={this.onItemClick(value)}>
          {children}
        </button>
      )
    }
    const composeClassName = cn('x-actionsheet__item-con', className)
    return (
      <div className={composeClassName} onClick={this.onItemClick(value)}>
        {children}
      </div>
    )
  }

  private content() {
    const {
      title,
      visible,
      className,
      onClose,
      onClick,
      items,
      closeText,
      ...otherProps
    } = this.props

    if (!Array.isArray(items)) {
      throw new TypeError('ActionSheet 的 items 必须是个数组')
    }

    const composeClassName = cn('x-actionsheet', className)

    return (
      <Modal visible={visible} onMaskClick={onClose} className={composeClassName} {...otherProps}>
        {this.renderTitle()}
        <div className="x-actionsheet__list">
          {items.map((item, index) => {
            const { name, value, className } = item
            return (
              <div className="x-actionsheet__item" key={index}>
                {this.renderItem(name, value, className)}
              </div>
            )
          })}
        </div>
        {!!closeText && (
          <button className="x-actionsheet__closebtn" onClick={onClose}>
            {closeText}
          </button>
        )}
      </Modal>
    )
  }
}

export default ActionSheet
