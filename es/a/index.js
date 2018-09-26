import _extends from '@babel/runtime/helpers/esm/extends'
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator'
import React from 'react'
import report from '../__libs/report'
import ignore from '../__libs/ignoreProps'

let A = function A(props) {
  let onClick =
  /* #__PURE__ */
  (function () {
    let _ref = _asyncToGenerator(
    /* #__PURE__ */
      regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!props.defer) {
                  _context.next = 7
                  break
                }

                if (!props.onClick) {
                  _context.next = 4
                  break
                }

                _context.next = 4
                return props.onClick(e)

              case 4:
                if (props.report) {
                  report(props.report)
                }

                _context.next = 9
                break

              case 7:
                if (props.report) {
                  report(props.report)
                }

                if (props.onClick) {
                  props.onClick(e)
                }

              case 9:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee, this)
      }))

    return function onClick(_x) {
      return _ref.apply(this, arguments)
    }
  })()

  let domprops = ignore(props, ['defer', 'onClick', 'report'])
  domprops.className = props.className
  return React.createElement('a', _extends({
    href: 'javascript:;'
  }, domprops, {
    onClick: onClick
  }), props.children)
}

export default A