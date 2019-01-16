import { AS, ASData } from 'auto-libs'
import React, { createElement, FC, MouseEventHandler, ReactNode } from 'react'

export interface ReportProps {
  report?: ASData
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  type?: string
  [otherProps: string]: any
}

export const Report: FC<ReportProps> = props => {
  const { report, type = 'div', onClick, children, ...otherProps } = props

  const clickHandle: MouseEventHandler<HTMLDivElement> = e => {
    if (report) {
      AS(report)
    }
    onClick && onClick(e)
  }
  return createElement(
    type,
    {
      ...otherProps,
      onClick: clickHandle
    },
    children
  )
}
