import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IProps {
  active: 'index' | 'collection' | 'order' | 'user'
  [otherProps: string]: any
}

const AtNav: React.FC<IProps> = props => {
  const { active, className, ...otherProps } = props

  return (
    <nav {...otherProps} className={cn('x-at-nav', className)}>
      {active === 'index' ? (
        <p className="x-at-navitem x-at-navitem__index">
          <i />
          <small>首页</small>
        </p>
      ) : (
        <a className="x-at-navitem x-at-navitem__index" href="/m/user/index">
          <i />
          <small>首页</small>
        </a>
      )}
      {active === 'collection' ? (
        <p className="x-at-navitem x-at-navitem__collection">
          <i />
          <small>收藏</small>
        </p>
      ) : (
        <a className="x-at-navitem x-at-navitem__collection" href="/m/user/collection">
          <i />
          <small>收藏</small>
        </a>
      )}
      {active === 'order' ? (
        <p className="x-at-navitem x-at-navitem__order">
          <i />
          <small>行程</small>
        </p>
      ) : (
        <a className="x-at-navitem x-at-navitem__order" href="/m/order">
          <i />
          <small>行程</small>
        </a>
      )}
      {active === 'user' ? (
        <p className="x-at-navitem x-at-navitem__user">
          <i />
          <small>我的</small>
        </p>
      ) : (
        <a className="x-at-navitem x-at-navitem__user" href="/m/user">
          <i />
          <small>我的</small>
        </a>
      )}
    </nav>
  )
}

export default AtNav
