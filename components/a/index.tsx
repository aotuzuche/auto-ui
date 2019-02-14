import * as React from 'react';
import emitter from '../emitter/index';

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  emit?: [string, any] | string;
  [otherProps: string]: any;
}

const A: React.FC<IProps> = props => {
  const { onClick, children, emit, ...otherProps } = props;

  const _onClick = async (e: any) => {
    if (onClick) {
      onClick(e);
    }
    if (typeof emit === 'string') {
      emitter.emit(emit);
    } else if (Array.isArray(emit)) {
      emitter.emit(emit[0], emit[1]);
    }
  };

  return (
    <a {...otherProps} onClick={_onClick} href="javascript:;">
      {children}
    </a>
  );
};

export default A;
