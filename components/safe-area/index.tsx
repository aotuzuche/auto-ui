import * as React from 'react';
import cn from 'classnames';
import './style.scss';

interface IProps {
  inset: 'top' | 'bottom';
  color?: string;
  className?: string;
  children?: null;
}

const isiOS = () => {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

const isApp = () => {
  return navigator.userAgent.indexOf('atzuche') > -1;
};

const SafeArea: React.FC<IProps> = props => {
  let composeClassName = cn(`x-safe-area-inset-${props.inset}`, props.className);
  if (props.inset === 'top' && isiOS() && isApp()) {
    composeClassName += ' x-safe-area-ios-app';
  }
  return <div className={composeClassName} style={{ backgroundColor: props.color }} />;
};

SafeArea.defaultProps = {
  color: '#ffffff',
};

export default SafeArea;
