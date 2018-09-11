import './style'
import React from 'react'
import classnames from 'classnames'


const Select = props => {
  const css = classnames('x-select', props.className)

  const children = props.children ?
    Array.isArray(props.children) ?
      props.children :
      [props.children] :
    []

  let value
  children.forEach(res => {
    if (res && res.props && res.props.value) {
      if (res.props.value === props.value) {
        value = res.props.children
      }
    }
  })

  return (
    <div className={css}>
      {
        value ?
          <p className="x-select__value">{value}</p> :
          props.placeholder ?
            <p className="x-select__placeholder">{props.placeholder}</p> :
            null
      }
      <select value={props.value} onChange={props.onChange}>
        {props.children}
      </select>
    </div>
  )
}

const SelectOption = props => {
  const css = classnames('x-select__option', {}, props.className)
  return (
    <option className={css} value={props.value}>{props.children}</option>
  )
}

Select.Option = SelectOption

export default Select
