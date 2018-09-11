import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import './style';
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import ignore from '../__libs/ignoreProps';
import Modal from '../modal';

var Dialog =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Dialog, _PureComponent);

  function Dialog() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Dialog.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._container = document.createElement('div');

    this._container.classList.add('_x_dialog_');

    document.body.appendChild(this._container);
    this.setState({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this._container);
  };

  _proto._content = function _content() {
    var css = cn('x-dialog', this.props.className);
    var domprops = ignore(this.props, ['onBgClick', 'visible', 'height']);
    return React.createElement(Modal, _extends({}, domprops, {
      visible: this.props.visible,
      height: this.props.height,
      onBgClick: this.props.onBgClick,
      className: css
    }), React.createElement("div", {
      className: "x-dialog__inner"
    }, this.props.children));
  };

  _proto.render = function render() {
    if (this._container) {
      return createPortal(this._content(), this._container);
    }

    return null;
  };

  return Dialog;
}(PureComponent);

var Scroller = function Scroller(props) {
  var css = cn('x-dialog__scroller', props.className);
  var domprops = ignore(props, []);
  return React.createElement("div", _extends({}, domprops, {
    className: css
  }), React.createElement("div", {
    className: "x-dialog__inscroller"
  }, props.children));
};

Dialog.Scroller = Scroller;
export default Dialog;