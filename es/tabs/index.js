import _extends from "@babel/runtime/helpers/esm/extends";
import './style';
import React, { cloneElement } from 'react';
import cn from 'classnames';
import ignore from '../__libs/ignoreProps';
import A from '../a';

var TabsItem = function TabsItem(props) {
  var css = cn('x-tabs__item', {
    'x-tabs--active': props.active
  }, props.className);
  var domprops = ignore(props, ['active', 'value', 'onClick']);
  return React.createElement(A, _extends({}, domprops, {
    href: "javascript:;",
    className: css,
    onClick: function onClick() {
      return props.onClick && props.onClick(props.value);
    }
  }), props.children);
};

var Tabs = function Tabs(props) {
  var css = cn('x-tabs', props.className);
  var activeOffset = -2;
  var children = props.children;

  if (children && !Array.isArray(children)) {
    children = [children];
  }

  if (!props.hasOwnProperty('children')) {
    children = [];
  }

  children = children.map(function (res, index) {
    var act = props.hasOwnProperty('active') && res.props.value === props.active;

    if (act) {
      activeOffset = index;
    }

    return cloneElement(res, {
      active: act,
      key: index,
      value: res.props.value,
      onClick: props.onClick
    });
  });
  var len = children.length;
  var domprops = ignore(props, ['active', 'onClick']);
  return React.createElement("div", _extends({}, domprops, {
    className: css
  }), React.createElement("sub", {
    className: "x-tabs__line",
    style: {
      width: 100 / len + '%',
      'WebkitTransform': 'translate(' + activeOffset * 100 + '%,0)'
    }
  }), children);
};

Tabs.Item = TabsItem;
export default Tabs;