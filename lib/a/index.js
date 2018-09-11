"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _report = _interopRequireDefault(require("../__libs/report"));

var _ignoreProps = _interopRequireDefault(require("../__libs/ignoreProps"));

var A = function A(props) {
  var onClick =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!props.defer) {
                _context.next = 7;
                break;
              }

              if (!props.onClick) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return props.onClick(e);

            case 4:
              if (props.report) {
                (0, _report.default)(props.report);
              }

              _context.next = 9;
              break;

            case 7:
              if (props.report) {
                (0, _report.default)(props.report);
              }

              if (props.onClick) {
                props.onClick(e);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function onClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var domprops = (0, _ignoreProps.default)(props, ['defer', 'onClick', 'report']);
  domprops.className = props.className;
  return _react.default.createElement("a", (0, _extends2.default)({
    href: "javascript:;"
  }, domprops, {
    onClick: onClick
  }), props.children);
};

var _default = A;
exports.default = _default;