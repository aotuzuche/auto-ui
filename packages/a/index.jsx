import { AS } from 'auto-libs'
import React from 'react'

const A = props => {
  const { report, children, onClick, ...otherProps } = props

  const handleClick = async e => {
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
