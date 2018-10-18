import './style'
import React, { cloneElement } from 'react'
import cn from 'classnames'
import ignore from '../__libs/ignoreProps'

import A from '../a'

const TabsItem = props => {
  const css = cn(
    'x-tabs__item',
    {
      'x-tabs--active': props.active
    },
    props.className
  )

  const domprops = ignore(props, ['active', 'value', 'onClick'])

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
  const { className, children, active, onClick, ...otherProps } = props
  const composeClassName = cn('x-tabs', className)

  let activeOffset = -2

  let composeChildren = [].concat(children)

  composeChildren = composeChildren.map((res, index) => {
    let act = props.hasOwnProperty('active') && res.props.value === props.active
    if (act) {
      activeOffset = index
    }
    return cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick
    })
  })

  const len = children.length

  return (
    <div {...otherProps} className={composeClassName}>
      <sub
        className="x-tabs__line"
        style={{
          width: 100 / len + '%',
          WebkitTransform: 'translate(' + activeOffset * 100 + '%,0)'
        }}
      />
      {composeChildren}
    </div>
  )
}

Tabs.Item = TabsItem
export default Tabs
