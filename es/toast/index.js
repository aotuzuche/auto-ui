import './style';

var Toast =
/*#__PURE__*/
function () {
  function Toast() {}

  Toast.show = function show(val, duration) {
    if (duration === void 0) {
      duration = 2000;
    }

    if (duration < 500) {
      duration = 500;
    }

    this.hide(false);
    var toast = document.createElement('div');
    toast.classList.add('x-toast');
    toast.id = 'j-x-toast';
    toast.innerHTML = "<div class=\"x-toast__inner\"><p>" + val + "</p></div>";
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.classList.add('x-toast--show');
    });
    clearTimeout(this._t);
    this._t = setTimeout(this.hide, duration);
    var focusdom = document.querySelector(':focus');

    if (focusdom) {
      focusdom.blur();
    }
  };

  Toast.hide = function hide(animate) {
    if (animate === void 0) {
      animate = true;
    }

    var toast = document.getElementById('j-x-toast');

    if (toast) {
      if (animate) {
        toast.classList.remove('x-toast--show');
        toast.classList.add('x-toast--hide');
        this.timeout = setTimeout(function () {
          try {
            document.body.removeChild(toast);
          } catch (e) {}
        }, 200);
      } else {
        document.body.removeChild(toast);
      }
    }
  };

  return Toast;
}();

export default Toast;