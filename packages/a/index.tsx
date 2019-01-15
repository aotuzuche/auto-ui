import { AS } from 'auto-libs'
import React from 'react'

export interface AProps {
  report?: object
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  [otherProps: string]: any
}

const A: React.FC<AProps> = props => {
  const { report, children, onClick, ...otherProps } = props

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick && onClick(e)

    report && AS(report)
  }

  return (
    <a {...otherProps} onClick={handleClick}>
      {children}
    </a>
  )
}

export default A
