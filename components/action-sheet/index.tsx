import * as React from 'react';
import cn from 'classnames';
import Modal from '../modal/index';
import { createPortal } from 'react-dom';
import './style.scss';

interface IItem {
  name: React.ReactChild;
  value: string | number | boolean;
  className?: string;
}

interface IProps {
  title?: React.ReactChild;
  visible: boolean;
  className?: string;
  onClose?: () => void;
  onClick: (value: string | number | boolean) => void;
  items: IItem[];
  closeText?: string;
  children?: null;
  [otherProps: string]: any;
}

class ActionSheet extends React.PureComponent<IProps, any> {
  private div: HTMLDivElement | null = null;

  constructor(props: IProps) {
    super(props);
    this.div = document.createElement('div');
    this.div.classList.add('_x_actionsheet_');
    document.body.appendChild(this.div);
  }

  public componentWillUnmount() {
    if (this.div) {
      document.body.removeChild(this.div);
    }
  }

  public render() {
    if (this.div) {
      return createPortal(this.content(), this.div);
    }
    return null;
  }

  private onItemClick = (value: any) => {
    return () => {
      if (this.props.onClick) {
        this.props.onClick(value);
      }
    };
  }

  private renderTitle = () => {
    const title = this.props.title;
    if (!!title) {
      if (typeof title === 'string' || typeof title === 'number') {
        return <h1 className="x-actionsheet__title">{title}</h1>;
      }
      return <header className="x-actionsheet__title">{title}</header>;
    }
    return null;
  }

  private renderItem = (children: React.ReactChild, value: any, className?: string) => {
    if (typeof children === 'string' || typeof children === 'number') {
      const composeClassName = cn('x-actionsheet__button', className);
      return (
        <a className={composeClassName} onClick={this.onItemClick(value)} children={children} />
      );
    }
    const composeClassName = cn('x-actionsheet__item-con', className);
    return <div className={composeClassName} onClick={this.onItemClick(value)} children={children} />;
  }

  private content() {
    const { title, visible, className, onClose, onClick, items, closeText, ...otherProps } = this.props;

    if (!Array.isArray(items)) {
      throw new TypeError('ActionSheet 的 items 必须是个数组');
    }

    const composeClassName = cn('x-actionsheet', className);

    return (
      <Modal visible={visible} onMaskClick={onClose} className={composeClassName} {...otherProps}>
        {this.renderTitle()}
        <div className="x-actionsheet__list">
          {items.map((item, index) => {
            const { name, value, className } = item;
            return (
              <div className="x-actionsheet__item" key={index}>
                {this.renderItem(name, value, className)}
              </div>
            );
          })}
        </div>
        {!!closeText && (
          <a className="x-actionsheet__closebtn" onClick={onClose} children={closeText} />
        )}
      </Modal>
    );
  }
}

export default ActionSheet;
