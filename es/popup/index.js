"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("./style");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var _modal = _interopRequireDefault(require("../modal"));

var Popup =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Popup, _PureComponent);

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
    var css = (0, _classnames.default)('x-popup', {
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
    var innercss = (0, _classnames.default)('x-popup__inner', {
      'x-popup--no-scroll': hasScrollChildren,
      'x-popup--no-padding': this.props.noPadding
    });
    var domprops = (0, _ignoreProps.default)(this.props, ['visible', 'height', 'onBgClick', 'noPadding', 'top']);
    return _react.default.createElement(_modal.default, (0, _extends2.default)({}, domprops, {
      visible: this.props.visible,
      height: this.props.height,
      onBgClick: this.props.onBgClick,
      className: css
    }), _react.default.createElement("div", {
      className: innercss
    }, this.props.children));
  };

  _proto.render = function render() {
    if (this._container) {
      return (0, _reactDom.createPortal)(this._content(), this._container);
    }

    return null;
  };

  return Popup;
}(_react.PureComponent);

var Scroller = function Scroller(props) {
  var css = (0, _classnames.default)('x-popup__scroller', props.className);
  var domprops = (0, _ignoreProps.default)(props, []);
  return _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
    className: css
  }), _react.default.createElement("div", {
    className: "x-popup__inscroller"
  }, props.children));
};

Popup.Scroller = Scroller;
var _default = Popup;
exports.default = _default;