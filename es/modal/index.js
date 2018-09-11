"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./style");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var Modal =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Modal, _Component);

  function Modal(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "_onAnimationEnd", function (e) {
      if (_this.state.ani !== 'leave') {
        return;
      }

      _this.setState({
        ani: 'init',
        visible: false
      });
    });
    _this.state = {
      visible: false,
      ani: 'init'
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.visible) {
      this._enter();
    }
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this._enter();
    } else if (this.props.visible && !nextProps.visible) {
      this._leave();
    }
  };

  _proto._enter = function _enter() {
    var _this2 = this;

    this.setState({
      visible: true
    });
    setTimeout(function (e) {
      _this2.setState({
        ani: 'enter'
      });
    });
    var focusdom = document.querySelector(':focus');

    if (focusdom) {
      focusdom.blur();
    }
  };

  _proto._leave = function _leave() {
    this.setState({
      ani: 'leave'
    });
  };

  _proto.render = function render() {
    var css = (0, _classnames.default)('x-modal', "x-modal--" + this.state.ani, this.props.className);
    var domprops = (0, _ignoreProps.default)(this.props, ['onBgClick', 'height', 'visible']);
    var height = this.props.height ? this.props.height : '';

    if (height && !isNaN(height - 0)) {
      height = height + '%';
    }

    return _react.default.createElement("div", (0, _extends2.default)({}, domprops, {
      className: css,
      style: {
        display: this.state.visible ? '' : 'none'
      }
    }), _react.default.createElement("div", {
      className: "x-modal__bg",
      onClick: this.props.onBgClick
    }), _react.default.createElement("div", {
      className: "x-modal__inner",
      style: {
        height: height
      },
      onAnimationEnd: this._onAnimationEnd
    }, this.props.children));
  };

  return Modal;
}(_react.Component);

var _default = Modal;
exports.default = _default;