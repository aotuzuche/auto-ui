import cn from 'classnames'
import React, {
  ComponentClass,
  FC,
  MouseEventHandler,
  ReactNode,
  UIEventHandler
} from 'react'
import './style.css'

import SafeArea from '../safe-area'
import Spin from '../spin'

export interface LayoutProps {
  className?: string
  [otherProps: string]: any
}

const Layout: FC<LayoutProps> & {
  Header: FC<LayoutHeaderProps>;
  Footer: FC<LayoutFooterProps>;
  Body: ComponentClass<LayoutBodyProps>;
} = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app', className)
  return (
    <div {...otherProps} className={composeClassName}>
      <SafeArea />
      {children}
      <SafeArea bottom />
    </div>
  )
}

export interface LayoutBodyProps {
  loading?: boolean
  errorInfo?: ReactNode
  className?: string
  onScroll?: UIEventHandler<HTMLDivElement>
  onReachBottom?: {
    content?: ReactNode;
    handler: () => void;
    disable?: boolean;
  }
}

class LayoutBody extends React.Component<LayoutBodyProps, any> {
  private timer = 0
  public constructor(props: LayoutBodyProps) {
    super(props)
    this.state = {
      bottomLoading: false
    }
  }
  public content() {
    const { loading, errorInfo, children } = this.props
    if (loading) {
      return <Spin className="x-app__loading" />
    } else if (errorInfo) {
      return (
        <p className="x-app__error-info">
          <i>!</i>
          {errorInfo}
        </p>
      )
    } else {
      return children
    }
  }

  public scroll: UIEventHandler<HTMLDivElement> = e => {
    const { onScroll } = this.props
    onScroll && onScroll(e)

    e.preventDefault()
    const { onReachBottom } = this.props
    if (onReachBottom && onReachBottom.disable) {
      return
    }

    const wrapper = e.target as Element
    const inner = wrapper.querySelector('.x-app-body__inner')
    if (wrapper.className.indexOf('x-app-body') > -1) {
      this.detectReachBottom(wrapper, inner)
    }
  }

  // 判断是否到达底部
  public detectReachBottom = (wrapper: Element, inner: Element | null) => {
    if (this.state.bottomLoading || !inner) {
      return
    }
    const { onReachBottom } = this.props
    this.timer && clearTimeout(this.timer)
    const timeNumber = 300
    this.timer = setTimeout(() => {
      const h = inner.clientHeight
      const bh = wrapper.clientHeight + wrapper.scrollTop
      const value = 200
      // 快滚动到底部时
      if (h - bh < value) {
        this.setState(
          {
            bottomLoading: true
          },
          async () => {
            onReachBottom && (await onReachBottom.handler())
            this.setState({
              bottomLoading: false
            })
          }
        )
      }
    }, timeNumber)
  }

  public render() {
    const {
      loading,
      errorInfo,
      className,
      onScroll,
      onReachBottom,
      ...otherProps
    } = this.props
    const composeClassName = cn('x-app-body', className, {
      'x-app-body--loading': loading,
      'x-app-body--error': errorInfo
    })
    return (
      <div {...otherProps} className={composeClassName} onScroll={this.scroll}>
        <div className="x-app-body__inner">{this.content()}</div>
        {onReachBottom && (
          <div className="x-app-body__bottom">
            {!this.state.bottomLoading && (
              <div className="x-app-body__bottom-inner">
                {onReachBottom.content}
              </div>
            )}
            {!!this.state.bottomLoading && (
              <div className="x-app-body__bottom-inner">
                <Spin text="加载中..." />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export interface LayoutFooterProps {
  className?: string
  [otherProps: string]: any
}

const LayoutFooter: FC<LayoutFooterProps> = props => {
  const { className, visible, children, ...otherProps } = props
  const composeClassName = cn('x-app-footer', className)
  if (visible === false) {
    return null
  }

  return (
    <footer {...otherProps} className={composeClassName}>
      {children}
    </footer>
  )
}

export interface LayoutHeaderProps {
  className?: string
  children?: ReactNode
  ghost?: boolean
  addonBefore?: ReactNode
  onBackClick?: MouseEventHandler<HTMLAnchorElement>
  onCloseClick?: MouseEventHandler<HTMLAnchorElement>
  title?: string
  addonAfter?: ReactNode
  addonBottom?: ReactNode
  [otherProps: string]: any
}

const LayoutHeader: FC<LayoutHeaderProps> = props => {
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
    ...otherProps
  } = props
  const composeClassName = cn(
    'x-app-header',
    {
      'x-app-header--ghost': ghost
    },
    className
  )

  return (
    <header {...otherProps} className={composeClassName}>
      <div className="x-app-header__inner">
        {(addonBefore || onBackClick || onCloseClick) && (
          <div className="x-app-header__addon-before">
            {!!onBackClick && (
              <a
                onClick={props.onBackClick}
                href="javascript:;"
                className="x-app-header__back"
              />
            )}
            {!!onCloseClick && (
              <a
                onClick={props.onCloseClick}
                href="javascript:;"
                className="x-app-header__close"
              />
            )}
            {addonBefore}
          </div>
        )}
        {!!title && <h1 className="x-app-header__title">{title}</h1>}
        {children}
        {!!addonAfter && (
          <div className="x-app-header__addon-after">{props.addonAfter}</div>
        )}
      </div>
      {!!addonBottom && (
        <div className="x-app-header__addon-bottom">{props.addonBottom}</div>
      )}
    </header>
  )
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter

export default Layout
