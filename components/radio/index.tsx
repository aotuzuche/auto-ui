import cn from 'classnames'
import * as React from 'react'
import A from '../a/index'
import IconCheck from '../icon/check'
import './style.scss'

interface IProps {
  checked: boolean;
  disabled?: boolean;
  border?: boolean;
  className?: string;
  text?: string;
  children?: null;
  onChange?: (checked: boolean) => void;
  emit?: [string, any] | string;
  [otherProps: string]: any;
}

const Radio: React.FC<IProps> = props => {
  const { checked, disabled, className, text, onChange, border, ...otherProps } = props;

  const composeClassName = cn(
    'x-radio',
    {
      'x-radio--checked': checked,
      'x-radio--disabled': disabled,
      'x-radio--border': border,
    },
    className
  );

  const onClick = () => {
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(!checked);
    }
  };
  if (onChange) {
    return (
      <A {...otherProps} className={composeClassName} onClick={onClick}>
        <i className="x-radio__icon">
          <IconCheck />
        </i>
        {!!text && <span className="x-radio__text">{text}</span>}
      </A>
    );
  }
  return (
    <span {...otherProps} className={composeClassName} onClick={onClick}>
      <i className="x-radio__icon">
        <IconCheck />
      </i>
      {!!text && <span className="x-radio__text">{text}</span>}
    </span>
  );
};

export default Radio;
