import { AS, ASData } from 'auto-libs'
import { createElement, FC, MouseEventHandler, ReactNode } from 'react'

export interface ReportProps {
  report?: ASData
  onClick?: MouseEventHandler<Element>
  children?: ReactNode
  type?: string
  [otherProps: string]: any
}

export const Report: FC<ReportProps> = props => {
  const { report, type = 'div', onClick, children, ...otherProps } = props

  const clickHandle: MouseEventHandler<Element> = e => {
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
