import cns from 'classnames'
import React, { Component } from 'react'

export interface SafeAreaProps {
  className?: string
  top?: boolean
  bottom?: boolean
  [otherProps: string]: any
}

export default class SafeArea extends Component<SafeAreaProps> {
  public render() {
    const { className, top, bottom, ...otherProps } = this.props

    const cn = cns(
      'auto-safe-area',
      {
        'auto-safe-area-top': top || (!top && !bottom),
        'auto-safe-area-bottom': bottom
      },
      className
    )
    return <div {...otherProps} className={cn} />
  }
}
