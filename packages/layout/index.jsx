import './style'
import React from 'react'
import cn from 'classnames'
import Spin from '../spin'
import IPhoneXHeader from '../iphonex_header'
import IPhoneXFooter from '../iphonex_footer'

const Layout = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app', className)
  return (
    <div {...otherProps} className={composeClassName}>
      <IPhoneXHeader />
      {children}
      <IPhoneXFooter />
    </div>
  )
}

class LayoutBody extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      bottomLoading: false
    }
  }
  content() {
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

  scroll = e => {
    e.preventDefault()
    const { onReachBottom } = this.props
    if (onReachBottom && onReachBottom.disable) {
      return
    }

    const wrapper = e.target
    const inner = e.target.querySelector('.x-app-body__inner')
    if (e.target.className.indexOf('x-app-body') > -1) {
      this.detectReachBottom(wrapper, inner)
    }
  }

  // 判断是否到达底部
  detectReachBottom = (wrapper, inner) => {
    if (this.state.bottomLoading) {
      return
    }
    const { onReachBottom } = this.props
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const h = inner.clientHeight
      const bh = wrapper.clientHeight + wrapper.scrollTop
      // 快滚动到底部时
      if (h - bh < 200) {
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
    }, 300)
  }

  render() {
    const {
      loading,
      errorInfo,
      className,
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

const LayoutFooter = props => {
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

const LayoutHeader = props => {
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
