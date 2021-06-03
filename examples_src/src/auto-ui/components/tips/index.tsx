import cn from 'classnames'
import * as React from 'react'
import './style/index.scss'

interface IProps {
  className?: string
  children?: null
  onClick?: () => void
  link?: string
}

const Tips: React.FC<IProps> = props => {
  const { className, onClick, link } = props

  const composeClassName = cn('x-tips', className)

  if (!onClick && link) {
    return (
      <a href={link} className={composeClassName}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path d="M460.8 290.133c0 28.278 22.923 51.2 51.2 51.2s51.2-22.922 51.2-51.2-22.923-51.2-51.2-51.2-51.2 22.923-51.2 51.2zM512 785.067c-18.843 0-34.133-15.257-34.133-34.134v-307.2c0-18.842 15.29-34.133 34.133-34.133s34.133 15.29 34.133 34.133v307.2c0 18.877-15.29 34.134-34.133 34.134z" />
        </svg>
      </a>
    )
  }

  return (
    <i onClick={onClick} className={composeClassName}>
      <span>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path d="M460.8 290.133c0 28.278 22.923 51.2 51.2 51.2s51.2-22.922 51.2-51.2-22.923-51.2-51.2-51.2-51.2 22.923-51.2 51.2zM512 785.067c-18.843 0-34.133-15.257-34.133-34.134v-307.2c0-18.842 15.29-34.133 34.133-34.133s34.133 15.29 34.133 34.133v307.2c0 18.877-15.29 34.134-34.133 34.134z" />
        </svg>
      </span>
    </i>
  )
}

export default Tips
