import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import './style';
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import ignore from '../__libs/ignoreProps';
import Modal from '../modal';

var Popup =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Popup, _PureComponent);

  function Popup() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._container = document.createElement('div');

    this._container.classList.add('_x_popup_');

    document.body.appendChild(this._container);
    this.setState({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this._container);
  };

  _proto._content = function _content() {
    var css = cn('x-popup', {
      'x-popup--top': this.props.top
    }, this.props.className);
    var children = this.props.children;

    if (!Array.isArray(children)) {
      children = [children];
    }

    var hasScrollChildren = false;
    children.forEach(function (res) {
      if (res.type === Scroller && !hasScrollChildren) {
        hasScrollChildren = true;
      }
    });
    var innercss = cn('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': this.props.noPadding
    });
    var domprops = ignore(this.props, ['visible', 'height', 'onBgClick', 'noPadding', 'top']);
    return React.createElement(Modal, _extends({}, domprops, {
      visible: this.props.visible,
      height: this.props.height,
      onBgClick: this.props.onBgClick,
      className: css
    }), React.createElement("div", {
      className: innercss
    }, this.props.children));
  };

  _proto.render = function render() {
    if (this._container) {
      return createPortal(this._content(), this._container);
    }

    return null;
  };

  return Popup;
}(PureComponent);

var Scroller = function Scroller(props) {
  var css = cn('x-popup__scroller', props.className);
  var domprops = ignore(props, []);
  return React.createElement("div", _extends({}, domprops, {
    className: css
  }), React.createElement("div", {
    className: "x-popup__inscroller"
  }, props.children));
};

Popup.Scroller = Scroller;
export default Popup;