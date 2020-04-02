import cn from 'classnames'
import * as React from 'react'
import IconBack from '../icon/back_s'
import IconClose from '../icon/close_s'
import IconError from '../icon/error'
import SafeArea from '../safe-area'
import Spin from '../spin/index'
import './style/index.scss'

import CustomProvider from '../provider'

const isBroswer = typeof self === 'object' && self.self === self && self

interface ILayoutProps {
  className?: string
  useTopSafeArea?: boolean
  topSafeAreaColor?: string
  useBottomSafeArea?: boolean
  bottomSafeAreaColor?: string
  [otherProps: string]: any
}

interface ILayout {
  Header: React.FC<IHeaderProps>
  Body: React.ComponentClass<IBodyProps>
  Footer: React.FC<IFooterProps>
}

const Layout: React.FC<ILayoutProps> & ILayout = props => {
  const {
    className,
    children,
    useTopSafeArea = true,
    useBottomSafeArea = true,
    topSafeAreaColor,
    bottomSafeAreaColor,
    ...otherProps
  } = props
  const composeClassName = cn('x-app', className)

  // 兼容服务端渲染，使其node环境可以获取到window
  // 客户端渲染请忽略,
  const context = React.useContext(CustomProvider) || {}
  return (
    <div {...otherProps} className={composeClassName} onTouchStart={() => {}}>
      {useTopSafeArea && (
        <SafeArea userAgent={context.userAgent} inset="top" color={topSafeAreaColor} />
      )}
      {children}
      {useBottomSafeArea && (
        <SafeArea userAgent={context.userAgent} inset="bottom" color={bottomSafeAreaColor} />
      )}
    </div>
  )
}

interface IBodyProps {
  loading?: boolean
  errorInfo?: string
  className?: string
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void
  skeleton?: React.ReactChild
  skeletonRepeat?: number
  onSkeletonFinish?: () => void
  onReachBottom?: {
    disabled: boolean
    content?: React.ReactChild
    handler: () => void
  }
  [otherProps: string]: any
}

interface IBodyState {
  bottomLoading: boolean
  skeletonAnimationEnd: boolean
}

class LayoutBody extends React.PureComponent<IBodyProps, IBodyState> {
  private timer: any = 0
  constructor(props: IBodyProps) {
    super(props)
    this.state = {
      bottomLoading: false,
      skeletonAnimationEnd: false,
    }
  }

  render() {
    const {
      loading,
      errorInfo,
      className,
      onScroll,
      onReachBottom,
      skeleton,
      skeletonRepeat,
      onSkeletonFinish,
      ...otherProps
    } = this.props

    const composeClassName = cn('x-app-body', className, {
      'x-app-body--loading': loading,
      'x-app-body--error': errorInfo,
    })

    return (
      <div
        {...otherProps}
        className={composeClassName}
        onScroll={onReachBottom ? this.scroll : onScroll}
      >
        {this.renderContent()}
        {this.renderReachBottom()}
      </div>
    )
  }

  private renderReachBottom() {
    const { onReachBottom, loading, errorInfo } = this.props
    if (!onReachBottom || onReachBottom.disabled || loading || errorInfo) {
      return null
    }
    return (
      <div className="x-app-body__bottom">
        {!this.state.bottomLoading && (
          <button onClick={this.handler} className="x-app-body__bottom-inner">
            {onReachBottom.content || '加载更多'}
          </button>
        )}
        {!!this.state.bottomLoading && (
          <div className="x-app-body__bottom-inner">
            <Spin />
          </div>
        )}
      </div>
    )
  }

  private onAnimationEnd = () => {
    this.setState(
      {
        skeletonAnimationEnd: true,
      },
      this.props.onSkeletonFinish,
    )
  }

  private renderContent() {
    const { loading, errorInfo, children, skeleton, skeletonRepeat = 1 } = this.props

    if (loading && !skeleton) {
      return <Spin className="x-app__loading" />
    }

    if (errorInfo) {
      return (
        <p className="x-app__error-info">
          <IconError />
          {errorInfo}
        </p>
      )
    }

    const skelotonClassName = cn('x-app-skeletonwrapper', {
      skeletonAnimationStart: !loading,
    })

    if (skeleton && !this.state.skeletonAnimationEnd) {
      return (
        <>
          <div className={skelotonClassName} onAnimationEnd={this.onAnimationEnd}>
            {'*'
              .repeat(skeletonRepeat)
              .split('')
              .map((_, key) => {
                return <div key={key}>{skeleton}</div>
              })}
          </div>
        </>
      )
    }

    return <div className="x-app-body__inner">{children}</div>
  }

  private scroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { onScroll } = this.props

    if (onScroll) {
      onScroll(e)
    }

    e.preventDefault()
    const { onReachBottom } = this.props
    if (!onReachBottom || onReachBottom.disabled) {
      return
    }

    const wrapper = e.target as Element
    const inner = wrapper.querySelector('.x-app-body__inner')
    if (inner && wrapper.className.indexOf('x-app-body') > -1) {
      this.detectReachBottom(wrapper, inner)
    }
  }

  // 判断是否到达底部
  private detectReachBottom = (wrapper: Element, inner: Element) => {
    if (this.state.bottomLoading) {
      return
    }
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      const h = inner.clientHeight
      const bh = wrapper.clientHeight + wrapper.scrollTop
      // 快滚动到底部时
      if (h - bh < 200) {
        this.handler()
      }
    }, 300)
  }

  private handler = () => {
    const { onReachBottom } = this.props
    const callback = async () => {
      if (onReachBottom && onReachBottom.handler) {
        await onReachBottom.handler()
      }
      this.setState({
        bottomLoading: false,
      })
    }
    this.setState({ bottomLoading: true }, callback)
  }
}

interface IFooterProps {
  className?: string
  visible?: boolean
  [otherProps: string]: any
}

const LayoutFooter: React.FC<IFooterProps> = props => {
  const { className, visible, children, ...otherProps } = props
  const composeClassName = cn('x-app-footer', className)

  if (!visible) {
    return null
  }

  return (
    <footer {...otherProps} className={composeClassName}>
      {children}
    </footer>
  )
}

LayoutFooter.defaultProps = {
  visible: true,
}

interface IHeaderProps {
  className?: string
  ghost?: boolean
  addonBefore?: React.ReactNode
  onBackClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | boolean
  onCloseClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | boolean
  title?: string
  addonAfter?: React.ReactNode
  addonBottom?: React.ReactNode
  borderType?: 'border' | 'shadow' | 'none'
  headline?: boolean
  hideInAlipay?: boolean
  hideInAlipayMP?: boolean
  hideInApp?: boolean
  tabs?: React.ReactNode
  homepage?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | string | boolean
  useSafeArea?: boolean
  [otherProps: string]: any
}

const LayoutHeader: React.FC<IHeaderProps> = props => {
  const context = React.useContext(CustomProvider) || {}

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
    hideInAlipay,
    hideInAlipayMP,
    hideInApp,
    homepage,
    useSafeArea,
    tabs,
    ...otherProps
  } = props

  // headline模式下，如果标题上方没有内容，去掉上方的空隙
  let fixPaddingTop = false
  if (headline && !addonBefore && !onBackClick && !onCloseClick) {
    fixPaddingTop = true
  }

  const composeClassName = cn(
    'x-app-header',
    {
      'x-app-header--ghost': ghost,
      'x-app-header--has-tabs': !!tabs,
      'x-app-header--headline': headline,
      'x-app-header--headline-fix-padding': fixPaddingTop,
    },
    className,
    borderType && borderType !== 'none' ? `x-app-header--bottom-${borderType}` : void 0,
  )

  const ua = context.userAgent || (isBroswer ? window.navigator.userAgent : '')

  // 在app中隐藏
  if (hideInApp && /atzuche/gi.test(ua)) {
    return null
  }

  // 在支付宝中隐藏，包括扫一扫进入的网页和小程序
  if (hideInAlipay && /AlipayClient/gi.test(ua)) {
    return null
  }

  const gotoHomepage = (evt: any) => {
    if (!homepage) return
    if (typeof homepage === 'string') {
      window.location.href = homepage
    } else if (typeof homepage === 'boolean') {
      window.location.href = '/m/index'
    } else {
      homepage(evt)
    }
  }

  const _onBackClick = (evt: any) => {
    if (!onBackClick) return
    if (typeof onBackClick === 'boolean') {
      window.history.back()
    } else {
      onBackClick(evt)
    }
  }

  const _onCloseClick = (evt: any) => {
    if (!onCloseClick) return
    if (typeof onCloseClick === 'boolean') {
      window.history.back()
    } else {
      onCloseClick(evt)
    }
  }

  return (
    <header {...otherProps} className={composeClassName}>
      {useSafeArea && <SafeArea userAgent={ua} inset="top" color="transparent" />}
      <div className="x-app-header__inner">
        {(addonBefore || onBackClick || onCloseClick) && (
          <div className="x-app-header__addon-before">
            {!!onBackClick && (
              <button onClick={_onBackClick} className="x-app-header__back">
                <IconBack />
              </button>
            )}
            {!!onCloseClick && (
              <button onClick={_onCloseClick} className="x-app-header__close">
                <IconClose />
              </button>
            )}
            {addonBefore}
          </div>
        )}
        {!!title && <h1 className="x-app-header__title">{title}</h1>}
        {!title && children}
        {(!!addonAfter || homepage) && (
          <div className="x-app-header__addon-after">
            {props.addonAfter}
            {homepage && (
              <button className="x-app-header__homepage-button" onClick={gotoHomepage} />
            )}
          </div>
        )}
      </div>
      {!!addonBottom && <div className="x-app-header__addon-bottom">{props.addonBottom}</div>}
      {!!tabs && tabs}
    </header>
  )
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter
export default Layout
