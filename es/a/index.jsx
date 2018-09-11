import React from 'react'
import report from '../__libs/report'
import ignore from '../__libs/ignoreProps'

const A = props => {
  const onClick = async e => {
    if (props.defer) {
      if (props.onClick) {
        await props.onClick(e)
      }
      if (props.report) {
        report(props.report)
      }
    }
    else {
      if (props.report) {
        report(props.report)
      }
      if (props.onClick) {
        props.onClick(e)
      }
    }
  }

  const domprops = ignore(props, [
    'defer',
    'onClick',
    'report',
  ])
  domprops.className = props.className

  return (
    <a href="javascript:;" {...domprops} onClick={onClick}>{props.children}</a>
  )
}

export default A