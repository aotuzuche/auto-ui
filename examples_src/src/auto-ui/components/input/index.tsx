import cn from 'classnames'
import * as React from 'react'
import CloseIcon from '../icon/close'
import './style/index.scss'

interface IProps {
  type?: string
  className?: string
  addonBefore?: React.ReactChild
  addonAfter?: React.ReactChild
  error?: boolean
  multi?: boolean
  disabled?: boolean
  mini?: boolean
  value?: string
  allowClear?: boolean
  children?: null
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  inputProps?: React.InputHTMLAttributes<any>
  textareaProps?: React.TextareaHTMLAttributes<any>
  [otherProps: string]: any
}

interface IState {
  isFocus: boolean
}

export default class Input extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      isFocus: false,
    }
  }

  // 劫持onBlur事件，解决input失去焦点时页面卡在半当中的情况
  onBlur: React.FocusEventHandler<any> = evt => {
    const { multi, inputProps, textareaProps } = this.props
    evt.persist()
    if (multi && textareaProps && textareaProps.onBlur) {
      textareaProps.onBlur(evt)
    } else if (inputProps && inputProps.onBlur) {
      inputProps.onBlur(evt)
    }

    setTimeout(() => {
      this.setState({
        isFocus: false,
      })
    }, 0)

    setTimeout(() => {
      const ele = evt.target
      if (ele) {
        ;(ele as any).scrollIntoViewIfNeeded(false)
      }
    }, 300)
  }

  // 模拟onChange变化，将e.target.value赋值为空，外部接收的是ChangeEventHandler
  onInputClear: React.EventHandler<any> = e => {
    const { onChange, inputProps, textareaProps, multi } = this.props
    const props = multi ? textareaProps : inputProps
    e.target = { value: '', ...props }
    onChange && onChange(e)
  }

  // 劫持onFocus事件，当focus时，标记focus用于显示clear按钮
  onFocus: React.FocusEventHandler<any> = e => {
    const { multi, inputProps, textareaProps } = this.props

    e.persist()
    if (multi && textareaProps && textareaProps.onFocus) {
      textareaProps.onFocus(e)
    } else if (inputProps && inputProps.onFocus) {
      inputProps.onFocus(e)
    }

    this.setState({
      isFocus: true,
    })
  }

  render() {
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
    } = this.props

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
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
          {allowClear && value && this.state.isFocus && (
            <div className="x-input__iconclear" onClick={this.onInputClear}>
              <span>
                <CloseIcon />
              </span>
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
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />

        {allowClear && value && this.state.isFocus && (
          <div className="x-input__iconclear" onClick={this.onInputClear}>
            <span>
              <CloseIcon />
            </span>
          </div>
        )}

        {!!addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
      </div>
    )
  }
}
