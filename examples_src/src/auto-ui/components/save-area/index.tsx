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

const SaveArea: React.FC<IProps> = props => {
  const composeClassName = cn(`x-save-area-inset-${props.inset}`, props.className);
  const node = <div className={composeClassName} style={{ backgroundColor: props.color }} />;
  if (props.inset === 'top' && isiOS && isApp) {
    return (
      <React.Fragment>
        {node}
        <div style={{ backgroundColor: props.color }} className="x-save-area-ios-app" />
      </React.Fragment>
    );
  }
  return node;
};

SaveArea.defaultProps = {
  color: '#ffffff',
};

export default SaveArea;
