import './style'
import React from 'react'
import cn from 'classnames'
import Spin from '../spin'

const Layout = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app', className)
  return (
    <div {...otherProps} className={composeClassName}>
      {children}
    </div>
  )
}

const LayoutBody = props => {
  const { className, loading, errorInfo, children, ...otherProps } = props
  const composeClassName = cn('x-app-body', className, {
    'x-app-body--loading': loading,
    'x-app-body--error': errorInfo
  })

  function content() {
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

  return (
    <div {...otherProps} className={composeClassName}>
      {content()}
    </div>
  )
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
