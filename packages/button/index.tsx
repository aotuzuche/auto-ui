import cn from 'classnames'
import React, { Component, MouseEventHandler, ReactNodeArray } from 'react'
import Spin from '../spin'
import { Report } from '../utils'

export interface ButtonProps {
  className?: string
  type?: 'primary' | 'danger' | 'default'
  disabled?: boolean
  hollow?: boolean
  mini?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  [otherProps: string]: any
}

export default class Button extends Component<ButtonProps, null> {
  public render() {
    const {
      type = 'default',
      disabled,
      hollow,
      mini,
      className,
      loading,
      children,
      onClick,
      ...otherProps
    } = this.props
    const css = cn(
      'auto-ui-button',
      {
        'auto-ui-button--disabled': disabled || loading,
        'auto-ui-button--hollow': hollow,
        'auto-ui-button--mini': mini
      },
      'auto-ui-button--' + type,
      className
    )

    let composeChildren: ReactNodeArray = []
    if (children) {
      composeChildren = composeChildren.concat(children)
    }

    const clickHandle: MouseEventHandler<HTMLDivElement> = e => {
      if (disabled || loading) {
        return
      }
      onClick && onClick(e)
    }

    return (
      <Report
        type="button"
        onClick={clickHandle}
        {...otherProps}
        className={css}
      >
        {!!loading && <Spin className="auto-ui-button__loading" />}
        {composeChildren.map((children, index) => {
          return (
            <span className="auto-ui-button__text" key={index}>
              {children}
            </span>
          )
        })}
      </Report>
    )
  }
}
