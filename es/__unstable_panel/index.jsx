import './style'
import React from 'react'
import cn from 'classnames'

const Panel = props => {
  const css = cn('x-panel', props.className)
  return (
    <div className={css}>
      {props.children}
    </div>
  )
}

Panel.Header = props => {
  const css = cn('x-panel__header', props.className)
  return (
    <div className={css}>
      {props.children}
    </div>
  )
}
Panel.Header.displayName = 'Panel.Header'

Panel.Body = props => {
  const css = cn('x-panel__body', props.className)
  return (
    <div className={css}>
      {props.children}
    </div>
  )
}
Panel.Body.displayName = 'Panel.Body'

Panel.Footer = props => {
  const css = cn('x-panel__footer', props.className)
  return (
    <div className={css}>
      {props.children}
    </div>
  )
}
Panel.Footer.displayName = 'Panel.Footer'

export default Panel
