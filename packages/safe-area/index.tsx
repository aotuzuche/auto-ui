import cns from 'classnames'
import React, { Component } from 'react'

export interface SafeAreaProps {
  className?: string
  top?: boolean
  bottom?: boolean
}

export default class SafeArea extends Component<SafeAreaProps> {
  public render() {
    const { className, top, bottom } = this.props

    const cn = cns(
      'auto-safe-area',
      {
        'auto-safe-area-top': top || (!top && !bottom),
        'auto-safe-area-bottom': bottom
      },
      className
    )
    return <div className={cn} />
  }
}
