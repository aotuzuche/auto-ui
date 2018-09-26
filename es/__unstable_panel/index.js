import './style';
import React from 'react';
import cn from 'classnames';

var Panel = function Panel(props) {
  var css = cn('x-panel', props.className);
  return React.createElement("div", {
    className: css
  }, props.children);
};

Panel.Header = function (props) {
  var css = cn('x-panel__header', props.className);
  return React.createElement("div", {
    className: css
  }, props.children);
};

Panel.Header.displayName = 'Panel.Header';

Panel.Body = function (props) {
  var css = cn('x-panel__body', props.className);
  return React.createElement("div", {
    className: css
  }, props.children);
};

Panel.Body.displayName = 'Panel.Body';

Panel.Footer = function (props) {
  var css = cn('x-panel__footer', props.className);
  return React.createElement("div", {
    className: css
  }, props.children);
};

Panel.Footer.displayName = 'Panel.Footer';
export default Panel;