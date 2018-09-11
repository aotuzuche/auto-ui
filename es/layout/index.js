import _extends from "@babel/runtime/helpers/esm/extends";
import './style';
import React from 'react';
import cn from 'classnames';
import Spin from '../spin';
import ignore from '../__libs/ignoreProps';

var Layout = function Layout(props) {
  var css = cn('x-app', props.className);
  return React.createElement("div", _extends({}, props, {
    className: css
  }), props.children);
};

var LayoutBody = function LayoutBody(props) {
  var css = cn('x-app-body', props.className, {
    'x-app-body--loading': props.loading,
    'x-app-body--error': props.errorInfo
  });
  var domprops = ignore(props, ['loading', 'errorInfo']);
  return React.createElement("div", _extends({}, domprops, {
    className: css
  }), props.loading ? React.createElement(Spin, {
    className: "x-app__loading"
  }) : props.errorInfo ? React.createElement("p", {
    className: "x-app__error-info"
  }, React.createElement("i", null, "!"), props.errorInfo) : props.children);
};

var LayoutFooter = function LayoutFooter(props) {
  var css = cn('x-app-footer', props.className);

  if (props.visible === false) {
    return null;
  }

  var domprops = ignore(props, ['visible']);
  return React.createElement("footer", _extends({}, domprops, {
    className: css
  }), props.children);
};

var LayoutHeader = function LayoutHeader(props) {
  var css = cn('x-app-header', {
    'x-app-header--ghost': props.ghost
  }, props.className);
  var inner = cn('x-app-header__inner', props.innerClassName);
  var domprops = ignore(props, ['ghost', 'innerClassName', 'addonBefore', 'onBackClick', 'onCloseClick', 'title', 'addonAfter', 'addonBottom']);
  return React.createElement("header", _extends({}, domprops, {
    className: css
  }), React.createElement("div", {
    className: inner
  }, props.addonBefore || props.onBackClick || props.onCloseClick ? React.createElement("div", {
    className: "x-app-header__addon-before"
  }, props.onBackClick ? React.createElement("a", {
    onClick: props.onBackClick,
    href: "javascript:;",
    className: "x-app-header__back"
  }) : props.onCloseClick ? React.createElement("a", {
    onClick: props.onCloseClick,
    href: "javascript:;",
    className: "x-app-header__close"
  }) : null, props.addonBefore) : null, props.title ? React.createElement("h1", {
    className: "x-app-header__title"
  }, props.title) : null, props.children, props.addonAfter ? React.createElement("div", {
    className: "x-app-header__addon-after"
  }, props.addonAfter) : null), props.addonBottom ? React.createElement("div", {
    className: "x-app-header__addon-bottom"
  }, props.addonBottom) : null);
};

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
Layout.Footer = LayoutFooter;
export default Layout;