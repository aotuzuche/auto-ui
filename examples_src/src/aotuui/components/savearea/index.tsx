import * as React from 'react';
import cn from 'classnames';
import './style.scss';

interface IProps {
  inset: 'top' | 'bottom';
  color?: string;
  className?: string;
  children?: null;
}

const SaveArea: React.FC<IProps> = props => {
  const composeClassName = cn(`x-save-area-inset-${props.inset}`, props.className);

  return <div className={composeClassName} style={{ backgroundColor: props.color }} />;
};

SaveArea.defaultProps = {
  color: '#ffffff',
};

export default SaveArea;
