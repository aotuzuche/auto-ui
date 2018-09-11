"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("./style");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var _a = _interopRequireDefault(require("../a"));

var _modal = _interopRequireDefault(require("../modal"));

var _this2 = void 0;

var ActionSheet =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(ActionSheet, _Component);

  function ActionSheet() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ActionSheet.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._container = document.createElement('div');

    this._container.classList.add('_x_actionsheet_');

    document.body.appendChild(this._container);
    this.setState({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this._container);
  };

  _proto._content = function _content() {
    var _this = this;

    var title = this.props.title ? _react.default.createElement("h1", {
      className: "x-actionsheet__title"
    }, this.props.title) : null;
    var isArray = Array.isArray(this.props.children);
    var children = this.props.children ? isArray ? this.props.children : [this.props.children] : null;
    var css = (0, _classnames.default)('x-actionsheet', this.props.className);
    var domprops = (0, _ignoreProps.default)(this.props, ['onBgClick', 'title', 'visible', 'onClose', 'closeText', 'onClick']);
    return _react.default.createElement(_modal.default, (0, _extends2.default)({}, domprops, {
      visible: this.props.visible,
      onBgClick: this.props.onBgClick,
      className: css
    }), title, _react.default.createElement("div", {
      className: "x-actionsheet__list"
    }, children && children.map(function (res, index) {
      var css = (0, _classnames.default)('x-actionsheet__item', res.props.outerClassName);

      if (res.type === Item) {
        res = (0, _react.cloneElement)(res, {
          onClick: _this.props.onClick
        });
      }

      return _react.default.createElement("div", {
        className: css,
        key: index
      }, res);
    })), _react.default.createElement("a", {
      href: "javascript:;",
      className: "x-actionsheet__closebtn",
      onClick: this.props.onClose
    }, this.props.closeText || '取消'));
  };

  _proto.render = function render() {
    if (this._container) {
      return (0, _reactDom.createPortal)(this._content(), this._container);
    }

    return null;
  };

  return ActionSheet;
}(_react.Component);

var Item = function Item(props) {
  var css = (0, _classnames.default)('x-actionsheet__button', props.className);
  var domprops = (0, _ignoreProps.default)(props, ['onClick', 'value']);
  return _react.default.createElement(_a.default, (0, _extends2.default)({}, domprops, {
    href: "javascript:;",
    className: css,
    onClick: function onClick(e) {
      return props.onClick && props.onClick.call(_this2, props.value);
    }
  }), props.text);
};

ActionSheet.Item = Item;
var _default = ActionSheet;
exports.default = _default;