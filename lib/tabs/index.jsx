import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const TabsItem = (props) => {
  const css = cn('x-tabs__item', {
    'x-tabs--active': props.active,
  }, props.className)

  const domprops = ignore(props, [
    'active',
    'value',
    'onClick',
  ])

  return (
    <A
      {...domprops}
      href="javascript:;"
      className={css}
      onClick={() => props.onClick && props.onClick(props.value)}
    >
      {props.children}
    </A>
  )
}

const Tabs = props => {
  const css = cn('x-tabs', props.className)

  let activeOffset = -2

  let children = props.children
  if (children && !Array.isArray(children)) {
    children = [children]
  }

  if (!props.hasOwnProperty('children')) {
    children = []
  }

  children = children.map((res, index) => {
    let act = props.hasOwnProperty('active') && res.props.value === props.active
    if (act) {
      activeOffset = index
    }
    return cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick,
    })
  })

  const len = children.length

  const domprops = ignore(props, [
    'active',
    'onClick',
  ])

  return (
    <div {...domprops} className={css}>
      <sub
        className="x-tabs__line"
        style={{
          width: 100 / len + '%',
          'WebkitTransform': 'translate(' + activeOffset * 100 + '%,0)'
        }}
      />
      {children}
    </div>
  )
}

Tabs.Item = TabsItem
export default Tabs
