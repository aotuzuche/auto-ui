import * as React from 'react';
import cn from 'classnames';
import IconBack from '../icon/back_s';
import IconClose from '../icon/close_s';
import IconError from '../icon/error';
import SafeArea from '../safe-area';
import Spin from '../spin/index';
import './style.scss';

interface ILayoutProps {
  className?: string;
  topSafeAreaColor?: string;
  bottomSafeAreaColor?: string;
  [otherProps: string]: any;
}

interface ILayout {
  Header: React.FC<IHeaderProps>;
  Body: React.ComponentClass<IBodyProps>;
  Footer: React.FC<IFooterProps>;
}

const Layout: React.FC<ILayoutProps> & ILayout = props => {
  const { className, children, ...otherProps } = props;
  const composeClassName = cn('x-app', className);
  return (
    <div {...otherProps} className={composeClassName}>
      <SafeArea inset="top" color={props.topSafeAreaColor} />
      {children}
      <SafeArea inset="bottom" color={props.bottomSafeAreaColor} />
    </div>
  );
};

interface IBodyProps {
  loading?: boolean;
  errorInfo?: string;
  className?: string;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  onReachBottom?: {
    disabled: boolean;
    content?: React.ReactChild;
    handler: () => void;
  };
  [otherProps: string]: any;
}

interface IBodyState {
  bottomLoading: boolean;
}

class LayoutBody extends React.PureComponent<IBodyProps, IBodyState> {
  private timer: any = 0;

  constructor(props: IBodyProps) {
    super(props);
    this.state = {
      bottomLoading: false,
    };
  }

  public render() {
    const { loading, errorInfo, className, onScroll, onReachBottom, ...otherProps } = this.props;

    const composeClassName = cn('x-app-body', className, {
      'x-app-body--loading': loading,
      'x-app-body--error': errorInfo,
    });

    return (
      <div {...otherProps} className={composeClassName} onScroll={this.scroll}>
        {this.renderContent()}
        {this.renderReachBottom()}
      </div>
    );
  }

  private renderReachBottom() {
    const { onReachBottom, loading, errorInfo } = this.props;
    if (!onReachBottom || onReachBottom.disabled || loading || errorInfo) {
      return null;
    }
    return (
      <div className="x-app-body__bottom">
        {!this.state.bottomLoading && (
          <a href="javascript:;" onClick={this.handler} className="x-app-body__bottom-inner">
            {onReachBottom.content || '加载更多'}
          </a>
        )}
        {!!this.state.bottomLoading && (
          <div className="x-app-body__bottom-inner">
            <Spin text="加载中..." />
          </div>
        )}
      </div>
    );
  }

  private renderContent() {
    const { loading, errorInfo, children } = this.props;
    if (loading) {
      return <Spin className="x-app__loading" />;
    }
    if (errorInfo) {
      return (
        <p className="x-app__error-info">
          <IconError />
          {errorInfo}
        </p>
      );
    }
    return <div className="x-app-body__inner">{children}</div>;
  }

  private scroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { onScroll } = this.props;

    if (onScroll) {
      onScroll(e);
    }

    e.preventDefault();
    const { onReachBottom } = this.props;
    if (!onReachBottom || onReachBottom.disabled) {
      return;
    }

    const wrapper = e.target as Element;
    const inner = wrapper.querySelector('.x-app-body__inner');
    if (inner && wrapper.className.indexOf('x-app-body') > -1) {
      this.detectReachBottom(wrapper, inner);
    }
  }

  // 判断是否到达底部
  private detectReachBottom = (wrapper: Element, inner: Element) => {
    if (this.state.bottomLoading) {
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      const h = inner.clientHeight;
      const bh = wrapper.clientHeight + wrapper.scrollTop;
      // 快滚动到底部时
      if (h - bh < 200) {
        this.handler();
      }
    }, 300);
  }

  private handler = () => {
    const { onReachBottom } = this.props;
    const callback = async () => {
      if (onReachBottom && onReachBottom.handler) {
        await onReachBottom.handler();
      }
      this.setState({
        bottomLoading: false,
      });
    };
    this.setState({ bottomLoading: true }, callback);
  }
}

interface IFooterProps {
  className?: string;
  visible?: boolean;
  [otherProps: string]: any;
}

const LayoutFooter: React.FC<IFooterProps> = props => {
  const { className, visible, children, ...otherProps } = props;
  const composeClassName = cn('x-app-footer', className);

  if (!visible) {
    return null;
  }

  return (
    <footer {...otherProps} className={composeClassName}>
      {children}
    </footer>
  );
};

LayoutFooter.defaultProps = {
  visible: true,
};

interface IHeaderProps {
  className?: string;
  ghost?: boolean;
  addonBefore?: React.ReactNode;
  onBackClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onCloseClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  title?: string;
  addonAfter?: React.ReactNode;
  addonBottom?: React.ReactNode;
  borderType?: 'border' | 'shadow' | 'none';
  headline?: boolean;
  [otherProps: string]: any;
}

const LayoutHeader: React.FC<IHeaderProps> = props => {
  const {
    className,
    children,
    ghost,
    addonBefore,
    onBackClick,
    onCloseClick,
    title,
    addonAfter,
    addonBottom,
    borderType,
    headline,
    ...otherProps
  } = props;
  const composeClassName = cn(
    'x-app-header',
    {
      'x-app-header--ghost': ghost,
      'x-app-header--headline': headline,
    },
    className,
    borderType ? `x-app-header--${borderType}` : undefined,
  );

  return (
    <header {...otherProps} className={composeClassName}>
      <div className="x-app-header__inner">
        {(addonBefore || onBackClick || onCloseClick) && (
          <div className="x-app-header__addon-before">
            {!!onBackClick && (
              <a onClick={props.onBackClick} href="javascript:;" className="x-app-header__back">
                <IconBack />
              </a>
            )}
            {!!onCloseClick && (
              <a onClick={props.onCloseClick} href="javascript:;" className="x-app-header__close">
                <IconClose />
              </a>
            )}
            {addonBefore}
          </div>
        )}
        {!!title && <h1 className="x-app-header__title">{title}</h1>}
        {!title && children}
        {!!addonAfter && <div className="x-app-header__addon-after">{props.addonAfter}</div>}
      </div>
      {!!addonBottom && <div className="x-app-header__addon-bottom">{props.addonBottom}</div>}
    </header>
  );
};

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Footer = LayoutFooter;

export default Layout;
