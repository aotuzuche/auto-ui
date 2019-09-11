import * as React from 'react';
import cn from 'classnames';
import './style.scss';

interface IRowProps {
  value?: any;
  arrow?: boolean;
  onClick?: (value?: any) => void;
  activeable?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
  emit?: [string, any] | string;
  [otherProps: string]: any;
}

const CellRow: React.FC<IRowProps> = props => {
  const { value, arrow, onClick, activeable, className, children, title, ...otherProps } = props;

  const composeClassName = cn('x-cell__row', className, {
    'x-cell__row--activeable': onClick || activeable,
    'x-cell__row--arrow': arrow,
  });

  const onClickHandle = onClick ? () => {
    onClick(value);
  } : undefined;

  return (
    <div {...otherProps} className={composeClassName} onClick={onClickHandle}>
      {title && <label>{title}</label>}
      {children}
    </div>
  );
};

interface ITitleProps {
  text: string;
  className?: string;
}

const CellTitle: React.FC<ITitleProps> = props => {
  const { text, className, ...otherProps } = props;
  const composeClassName = cn('x-cell__title', className);
  return (
    <div {...otherProps} className={composeClassName}>
      <h2>{props.text}</h2>
    </div>
  );
};

interface ICellProps {
  arrow?: boolean;
  indentLine?: boolean;
  onClick?: (value?: any) => void;
  className?: string;
  children: React.ReactNode;
  [otherProps: string]: any;
}

const Cell: React.FC<ICellProps> & {
  Row: React.FC<IRowProps>;
  Title: React.FC<ITitleProps>;
} = props => {
  const { arrow, indentLine, className, children, onClick, ...otherProps } = props;

  const composeClassName = cn('x-cell', className, {
    'x-cell--indent-line': indentLine,
  });

  const composeChildren: any[] = [];
  if (Array.isArray(children)) {
    composeChildren.push(...children);
  } else {
    composeChildren.push(children);
  }

  return (
    <section {...otherProps} className={composeClassName}>
      {composeChildren.map((children, index) => {
        if (children && children.type === CellRow) {
          return React.cloneElement(children, {
            key: index,
            arrow: arrow || children.props.arrow,
            onClick: onClick || children.props.onClick,
          });
        }
        return children;
      })}
    </section>
  );
};

Cell.Row = CellRow;
Cell.Title = CellTitle;

export default Cell;
