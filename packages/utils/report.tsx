import { AS, ASData } from 'auto-libs'
import React, { FC, MouseEventHandler, ReactNode } from 'react'

export interface ReportProps {
  report?: ASData
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
  [otherProps: string]: any
}

export const Report: FC<ReportProps> = props => {
  const { report, onClick, children, ...otherProps } = props
  return (
    <div
      onClick={e => {
        if (report) {
          AS(report)
        }
        onClick && onClick(e)
      }}
      {...otherProps}
    >
      {children}
    </div>
  )
}