import cn from 'classnames'
import React, { ChangeEventHandler, ReactNode } from 'react'

export interface InputProps {
  type?: string
  className?: string
  addonBefore?: ReactNode
  addonAfter?: ReactNode
  error?: boolean
  multi?: boolean
  disabled?: boolean
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  [otherProps: string]: any
}

export class Input extends React.Component<InputProps> {
  public render() {
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
      ...otherProps
    } = this.props

    const composeClassName = cn(
      'x-input',
      {
        'x-input--error': error,
        'x-input--multi': multi,
        'x-input--disabled': disabled
      },
      className
    )

    if (multi) {
      return (
        <div className={composeClassName}>
          {!!addonBefore && (
            <div className="x-input__addon-before">{addonBefore}</div>
          )}
          <textarea
            {...otherProps}
            className="x-input__ipt"
            value={value}
            onChange={onChange}
          />
          {!!addonAfter && (
            <div className="x-input__addon-after">{addonAfter}</div>
          )}
        </div>
      )
    }

    return (
      <div className={composeClassName}>
        {!!addonBefore && (
          <div className="x-input__addon-before">{addonBefore}</div>
        )}
        <input
          {...otherProps}
          disabled={disabled}
          className="x-input__ipt"
          value={value}
          onChange={onChange}
          type={type || 'text'}
        />
        {!!addonAfter && (
          <div className="x-input__addon-after">{addonAfter}</div>
        )}
      </div>
    )
  }
}
