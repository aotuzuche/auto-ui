import cn from 'classnames'
import * as React from 'react'
import IconCheck from '../icon/check'
import './style/index.scss'

interface IProps {
  checked: boolean
  disabled?: boolean
  hollow?: boolean
  className?: string
  text?: string
  children?: null
  /**
   * @description 小程序中不支持传type 来改颜色，请直接传color
   */
  color?: string
  onChange?: (checked: boolean) => void
  [otherProps: string]: any
}

const Radio: React.FC<IProps> = props => {
  const { checked, disabled, className, text, onChange, hollow, color, ...otherProps } = props

  const composeClassName = cn(
    'x-radio',
    {
      'x-radio--checked': checked,
      'x-radio--disabled': disabled,
      'x-radio--hollow': hollow,
    },
    className,
  )

  const onClick = () => {
    if (disabled) {
      return
    }
    if (onChange) {
      onChange(!checked)
    }
  }
  const bgColor = () => {
    if(!hollow) {
      return checked ? color : '#d3d3d3'
    }
    return '#ffffff'
  }
  const borderColor = () => {
    if(!hollow) {
      return undefined
    }
    return checked ? (color || '#00cf97') : '#d3d3d3'
  }
  const iconColor = () => {
    if(!hollow) {
      return '#ffffff'
    }
    return checked ? (color || '#00cf97') : '#d3d3d3'
  }
  if (onChange) {
    return (
      <button {...otherProps} className={composeClassName} onClick={onClick}>
        <span className="x-radio__icon" style={{backgroundColor: bgColor(), boxShadow: `0 0 0 1rpx ${borderColor()} inset;`}}>
          <IconCheck color={iconColor()}/>
        </span>
        {!!text && <span className="x-radio__text">{text}</span>}
      </button>
    )
  }
  return (
    <span {...otherProps} className={composeClassName} onClick={onClick}>
        <span className="x-radio__icon" style={{backgroundColor: bgColor(), boxShadow: `0 0 0 1rpx ${borderColor()} inset;`}}>
          <IconCheck color={iconColor()}/>
      </span>
      {!!text && <span className="x-radio__text">{text}</span>}
    </span>
  )
}

export default Radio
