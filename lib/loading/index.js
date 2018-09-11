"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("./style");

var _spin = _interopRequireDefault(require("../spin"));

var Loading =
/*#__PURE__*/
function () {
  function Loading() {}

  Loading.show = function show(tips, timeout) {
    if (timeout === void 0) {
      timeout = 0;
    }

    this.hide(false);
    var loading = document.createElement('div');
    loading.classList.add('x-loading');
    loading.id = 'j-x-loading';

    if (tips) {
      loading.innerHTML = "<div class=\"x-loading__inner\">" + _spin.default.toString() + "<p>" + tips.toString() + "</p></div>";
    } else {
      loading.innerHTML = "<div class=\"x-loading__inner\">" + _spin.default.toString() + "</div>";
    }

    document.body.appendChild(loading);
    setTimeout(function () {
      loading.classList.add('x-loading--show');
    });

    if (timeout !== 0) {
      if (timeout < 500) {
        timeout = 500;
      }

      this.__timer = setTimeout(this.hide, timeout);
    }

    var focusdom = document.querySelector(':focus');

    if (focusdom) {
      focusdom.blur();
    }
  };

  Loading.hide = function hide() {
    var loading = document.getElementById('j-x-loading');

    if (loading) {
      clearTimeout(this.__timer);
      document.body.removeChild(loading);
    }
  };

  return Loading;
}();

var _default = Loading;
exports.default = _default;