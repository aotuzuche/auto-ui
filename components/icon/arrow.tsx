import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

interface IProps {
  className?: string
}

const IconArrow: React.FC<IProps> = props => {
  return (
    <svg
      className={cn('x-icon', props.className)}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <path d="M267.93966356 202.85690778l317.27843739 317.2784374L267.93966356 837.41378258a78.66878241 78.66878241 0 0 0 0 113.89482304 78.66878241 78.66878241 0 0 0 113.89482304 0l374.22584984-374.22584985a78.66878241 78.66878241 0 0 0 0-113.89482306l-374.22584984-374.22584988A80.53991103 80.53991103 0 1 0 267.93966356 202.85690778z" />
    </svg>
  )
}

export default IconArrow
