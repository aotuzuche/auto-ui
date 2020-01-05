import cn from 'classnames'
import * as React from 'react'
import './style.scss'

interface IProps {
  type?: string
  className?: string
  addonBefore?: React.ReactChild
  addonAfter?: React.ReactChild
  error?: boolean
  multi?: boolean
  disabled?: boolean
  mini?: boolean
  value: string
  allowClear?: boolean
  children?: null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  inputProps?: React.InputHTMLAttributes<any>
  textareaProps?: React.TextareaHTMLAttributes<any>
  [otherProps: string]: any
}

const Input: React.FC<IProps> = props => {
  const {
    type,
    className,
    addonBefore,
    addonAfter,
    error,
    multi,
    disabled,
    value,
    onChange,
    onReset,
    placeholder,
    mini,
    inputProps,
    textareaProps,
    allowClear,
    ...otherProps
  } = props

  const composeClassName = cn(
    'x-input',
    {
      'x-input--error': error,
      'x-input--multi': multi,
      'x-input--disabled': disabled,
      'x-input--mini': mini,
      'x-input--clear': allowClear,
    },
    className,
  )

  // 劫持onBlur事件，解决input失去焦点时页面卡在半当中的情况
  const onBlur: React.FocusEventHandler<any> = evt => {
    evt.persist()
    if (multi && textareaProps && textareaProps.onBlur) {
      textareaProps.onBlur(evt)
    } else if (inputProps && inputProps.onBlur) {
      inputProps.onBlur(evt)
    }
    setTimeout(() => {
      const ele = evt.target
      if (ele) {
        ;(ele as any).scrollIntoViewIfNeeded(false)
      }
    }, 300)
  }

  // 模拟onChange变化，将e.target.value赋值为空，外部接收的是ChangeEventHandler
  const onInputClear: React.EventHandler<any> = e => {
    e.target = { value: '' }
    onChange && onChange(e)
  }

  if (multi) {
    return (
      <div {...otherProps} className={composeClassName}>
        {!!addonBefore && <div className="x-input__addon-before">{addonBefore}</div>}
        <textarea
          disabled={disabled}
          className="x-input__ipt"
          value={value}
          placeholder={placeholder}
          onChange={onChange as any}
          {...textareaProps}
          onBlur={onBlur}
        />
        {allowClear && value && (
          <div className="x-input__iconclear" onClick={onInputClear}>
            <span />
          </div>
        )}
        {!!addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
      </div>
    )
  }

  return (
    <div {...otherProps} className={composeClassName}>
      {!!addonBefore && <div className="x-input__addon-before">{addonBefore}</div>}
      <input
        disabled={disabled}
        className="x-input__ipt"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type || 'text'}
        {...inputProps}
        onBlur={onBlur}
      />
      {allowClear && value && (
        <div className="x-input__iconclear" onClick={onInputClear}>
          <span />
        </div>
      )}
      {!!addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
    </div>
  )
}

export default Input
