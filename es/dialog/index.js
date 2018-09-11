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

var Dialog =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Dialog, _PureComponent);

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
    var css = (0, _classnames.default)('x-dialog', this.props.className);
    var domprops = (0, _ignoreProps.default)(this.props, ['onBgClick', 'visible', 'height']);
    return _react.default.createElement(_modal.default, (0, _extends2.default)({}, domprops, {
      visible: this.props.visible,
      height: this.props.height,
      onBgClick: this.props.onBgClick,
      className: css
    }), _react.default.createElement("div", {
      className: "x-dialog__inner"
    }, this.props.children));
  };

  _proto.render = function render() {
    if (this._container) {
      return (0, _reactDom.createPortal)(this._content(), this._container);
    }

    return null;
  };

  return Dialog;
}(_react.PureComponent);

var Scroller = function Scroller(props) {
  var css = (0, _classnames.default)('x-dialog__scroller', props.className);
  var domprops = (0, _ignoreProps.default)(props, []);
  return _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
    className: css
  }), _react.default.createElement("div", {
    className: "x-dialog__inscroller"
  }, props.children));
};

Dialog.Scroller = Scroller;
var _default = Dialog;
exports.default = _default;