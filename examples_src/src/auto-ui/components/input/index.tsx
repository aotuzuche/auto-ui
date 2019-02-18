import * as React from 'react';
import cn from 'classnames';
import './style.scss';

interface IProps {
  type?: string;
  className?: string;
  addonBefore?: React.ReactChild;
  addonAfter?: React.ReactChild;
  error?: boolean;
  multi?: boolean;
  disabled?: boolean;
  mini?: boolean;
  value: string;
  children?: null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputProps?: React.InputHTMLAttributes<any>;
  [otherProps: string]: any;
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
    placeholder,
    mini,
    inputProps,
    ...otherProps
  } = props;

  const composeClassName = cn(
    'x-input',
    {
      'x-input--error': error,
      'x-input--multi': multi,
      'x-input--disabled': disabled,
      'x-input--mini': mini,
    },
    className,
  );

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
        />
        {!!addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
      </div>
    );
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
      />
      {!!addonAfter && <div className="x-input__addon-after">{addonAfter}</div>}
    </div>
  );
};

export default Input;
