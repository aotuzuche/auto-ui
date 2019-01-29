import * as React from 'react';
import cn from 'classnames';
import './style.scss';

interface IProps {
  visible?: boolean;
  className?: string;
  onMaskClick?: () => void;
  height?: number | string;
}

interface IState {
  visible: boolean;
  ani: 'init' | 'enter' | 'leave';
}

class Modal extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      visible: false,
      ani: 'init',
    };
  }

  public componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: IProps) {
    if (!this.props.visible && nextProps.visible) {
      this.enter();
    } else if (this.props.visible && !nextProps.visible) {
      this.leave();
    }
  }

  public render() {
    const { onMaskClick, height, visible, className, ...otherProps } = this.props;

    const composeClassName = cn('x-modal', `x-modal--${this.state.ani}`, className);

    let heightVal = '';
    if (height) {
      if (typeof height === 'number') {
        heightVal = `${String(height)}%`;
      } else {
        heightVal = height;
      }
    }

    return (
      <div
        {...otherProps}
        className={composeClassName}
        style={{
          display: this.state.visible ? '' : 'none',
        }}>
        <div className="x-modal__mask" onClick={onMaskClick} />
        <div className="x-modal__inner" style={{ height: heightVal }} onAnimationEnd={this.onAnimationEnd}>
          {this.props.children}
        </div>
      </div>
    );
  }

  private enter() {
    this.setState({
      visible: true,
    });

    setTimeout(() => {
      this.setState({
        ani: 'enter',
      });
    });

    const focusdom = document.querySelector(':focus');
    const nodeName = (focusdom || ({} as any)).nodeName;
    if (focusdom && (nodeName === 'input' || nodeName === 'textarea')) {
      (focusdom as HTMLInputElement | HTMLTextAreaElement).blur();
    }
  }

  private leave() {
    this.setState({
      ani: 'leave',
    });
  }

  private onAnimationEnd = () => {
    if (this.state.ani !== 'leave') {
      return;
    }
    this.setState({
      ani: 'init',
      visible: false,
    });
  }
}

export default Modal;
