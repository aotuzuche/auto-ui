import * as React from 'react';
import A from '../a/index';
import cn from 'classnames';
import IconCheck from '../icon/check';
import './style.scss';

interface IProps {
  checked: boolean;
  disabled?: boolean;
  className?: string;
  text?: string;
  children?: null;
  onChange?: (checked: boolean) => void;
  emit?: [string, any] | string;
  [otherProps: string]: any;
}

const Radio: React.FC<IProps> = props => {
  const { checked, disabled, className, text, onChange, ...otherProps } = props;

  const composeClassName = cn(
    'x-radio',
    {
      'x-radio__checked': checked,
      'x-radio__disabled': disabled,
    },
    className,
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
