import * as React from 'react'

interface IProps {
  color?: string
  className?: string
}

const IconArrow: React.FC<IProps> = props => {
  const color = props.color || '#000'
  return (
    <svg
      fill={color}
      className={props.className}
      viewBox="110 110 800 800"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <path d="M384 349.866667l166.4 166.4L384 682.666667a41.258667 41.258667 0 0 0 0 59.733333 41.258667 41.258667 0 0 0 59.733333 0l196.266667-196.266667a41.258667 41.258667 0 0 0 0-59.733333l-196.266667-196.266667A42.24 42.24 0 1 0 384 349.866667z" />
    </svg>
  )
}

export default IconArrow
