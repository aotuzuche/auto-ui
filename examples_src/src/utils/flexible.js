/* eslint-disable */
// @ts-ignore

(function(window, lib) {
  var tid;
  var document = window.document;
  var documentEle = document.documentElement;
  var metaEl = document.querySelector('meta[name="viewport"]');
  var flexibleMeta = document.querySelector('meta[name="flexible"]');
  var dpr = 0;
  var scale = 0;
  var flexible = lib.flexible || (lib.flexible = {});

  if (metaEl) {
    const match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    match && ((scale = parseFloat(match[1])), (dpr = parseInt(1 / scale)));
  } else {
    if (flexibleMeta) {
      var content = flexibleMeta.getAttribute('content');
      if (content) {
        const initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
        const maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
        initialDpr && ((dpr = parseFloat(initialDpr[1])), (scale = parseFloat((1 / dpr).toFixed(2))));
        maximumDpr && ((dpr = parseFloat(maximumDpr[1])), (scale = parseFloat((1 / dpr).toFixed(2))));
      }
    }
  }
  if (!dpr && !scale) {
    var userAgent = window.navigator.userAgent,
      isIPhone = !!userAgent.match(/iphone/gi),
      devicePixelRatio = window.devicePixelRatio;
    devicePixelRatio = 1; // 不进行缩放
    dpr = isIPhone ? (devicePixelRatio >= 3 && (!dpr || dpr >= 3) ? 3 : devicePixelRatio >= 2 && (!dpr || dpr >= 2) ? 2 : 1) : 1;
    scale = 1 / dpr;
  }
  if ((documentEle.setAttribute('data-dpr', dpr), !metaEl)) {
    if (
      ((metaEl = document.createElement('meta')),
      metaEl.setAttribute('name', 'viewport'),
      metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no, viewport-fit=cover'),
      documentEle.firstElementChild)
    ) {
      documentEle.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = document.createElement('div');
      wrap.appendChild(metaEl), document.write(wrap.innerHTML);
    }
  }

  function refreshRem() {
    var width = documentEle.getBoundingClientRect().width;
    var d = ((width / (375 * dpr)) * 100 * dpr) / 2;
    d -= (d - 50 * dpr) / 2;
    d = Math.round(d);
    documentEle.style.fontSize = d + 'px';
    flexible.rem = window.rem = d;
    window.rem = d;
  }

  window.addEventListener(
    'resize',
    function() {
      clearTimeout(tid), (tid = setTimeout(refreshRem, 300));
    },
    false,
  );
  window.addEventListener(
    'pageshow',
    function(event) {
      event.persisted && (clearTimeout(tid), (tid = setTimeout(refreshRem, 300)));
    },
    false,
  );
  refreshRem();
  flexible.dpr = window.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    return typeof d === 'string' && d.match(/rem$/) && (val += 'px'), val;
  };
  flexible.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    return typeof d === 'string' && d.match(/px$/) && (val += 'rem'), val;
  };
  window.dpr = dpr;

  var ua = navigator.userAgent;
  window.isApp = /atzuche/gi.test(ua);
  window.isWX = /MicroMessenger/gi.test(ua);

  if (window.isWX) {
    var search = window.location.search,
      ls = window.localStorage,
      ss = window.sessionStorage;
    var token = (/[?&]token=(.*?)(&|$)/.exec(search) || [])[1];
    if (token) {
      ls.setItem('_app_token_', token);
    }
    var openId = (/[?&]openId=(.*?)(&|$)/.exec(search) || [])[1];
    if (openId) {
      ss.setItem('_app_openId_', openId);
    }
    var unionId = (/[?&]unionId=(.*?)(&|$)/.exec(search) || [])[1];
    if (unionId) {
      ss.setItem('_app_unionId_', unionId);
    }
    var virtualNo = (/[?&]virtualNo=(.*?)(&|$)/.exec(search) || [])[1];
    if (virtualNo) {
      ss.setItem('_app_virtualNo_', virtualNo);
    }
    var memNo = (/[?&]memNo=(.*?)(&|$)/.exec(search) || [])[1];
    if (memNo) {
      ss.setItem('_app_memNo_', memNo);
    }
  }
})(window, window['lib'] || (window['lib'] = {}));
