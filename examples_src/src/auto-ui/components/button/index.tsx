import * as React from 'react';
import A from '../a/index';
import cn from 'classnames';
import Spin from '../spin/index';
import './style.scss';

interface ButtonProps {
  type?: 'primary' | 'danger' | 'default';
  disabled?: boolean;
  hollow?: boolean;
  mini?: boolean;
  shrink?: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  emit?: [string, any] | string;
  [otherProps: string]: any;
}

const Button: React.FC<ButtonProps> = props => {
  const { type, disabled, shrink, mini, hollow, loading, className, children, onClick, ...otherProps } = props;

  const composeClassName = cn(
    'x-button',
    {
      'x-button--disabled': disabled || loading,
      'x-button--mini': mini,
      'x-button--hollow': hollow,
      'x-button--shrink': shrink !== undefined ? shrink : !!mini,
    },
    `x-button--${type}`,
    className,
  );

  const clickHandle: React.MouseEventHandler<HTMLAnchorElement> = evt => {
    if (disabled || loading) {
      return;
    }
    onClick(evt);
  };

  return (
    <A {...otherProps} className={composeClassName} onClick={clickHandle}>
      {!!loading && <Spin className="x-button__loading" />}
      {children}
    </A>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
