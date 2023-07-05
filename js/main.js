/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

// import './components/swiper'
console.log('components');

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_aos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/aos.js */ "./src/js/vendor/aos.js");
/* harmony import */ var _vendor_aos_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_aos_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_swiper_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../node_modules/swiper/swiper-bundle.js */ "./node_modules/swiper/swiper-bundle.js");
/* harmony import */ var _vendor_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/swiper-bundle.js */ "./src/js/vendor/swiper-bundle.js");
/* harmony import */ var _vendor_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");


(function () {
  var _document, _document2, _document3, _document4;
  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const disableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const enableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/aos.js":
/*!******************************!*\
  !*** ./src/js/vendor/aos.js ***!
  \******************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
      r = n(1),
      a = (o(r), n(6)),
      u = o(a),
      c = n(7),
      f = o(c),
      s = n(8),
      d = o(s),
      l = n(9),
      p = o(l),
      m = n(10),
      b = o(m),
      v = n(11),
      y = o(v),
      g = n(14),
      h = o(g),
      w = [],
      k = !1,
      x = {
        offset: 120,
        delay: 0,
        easing: "ease",
        duration: 400,
        disable: !1,
        once: !1,
        startEvent: "DOMContentLoaded",
        throttleDelay: 99,
        debounceDelay: 50,
        disableMutationObserver: !1
      },
      j = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      },
      O = function () {
        w = (0, h.default)(), j();
      },
      _ = function () {
        w.forEach(function (e, t) {
          e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
        });
      },
      S = function (e) {
        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
      },
      z = function (e) {
        x = i(x, e), w = (0, h.default)();
        var t = document.all && !window.atob;
        return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
          j(!0);
        }) : document.addEventListener(x.startEvent, function () {
          j(!0);
        }), window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || (0, d.default)("[data-aos]", O), w);
      };
    e.exports = {
      init: z,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
            o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }
        function r(e) {
          return k = e, h = setTimeout(s, t), _ ? o(e) : g;
        }
        function a(e) {
          var n = e - w,
            o = e - k,
            i = t - n;
          return S ? j(i, y - o) : i;
        }
        function c(e) {
          var n = e - w,
            o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }
        function s() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
        }
        function d(e) {
          return h = void 0, z && b ? o(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(O());
        }
        function m() {
          var e = O(),
            n = c(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), o(w);
          }
          return void 0 === h && (h = setTimeout(s, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          k = 0,
          _ = !1,
          S = !1,
          z = !0;
        if ("function" != typeof e) throw new TypeError(f);
        return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }
      function o(e, t, o) {
        var r = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError(f);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }
      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }
      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }
      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }
      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return s;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
      }
      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
        f = "Expected a function",
        s = NaN,
        d = "[object Symbol]",
        l = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        b = /^0o[0-7]+$/i,
        v = parseInt,
        y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
        g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
        h = y || g || Function("return this")(),
        w = Object.prototype,
        k = w.toString,
        x = Math.max,
        j = Math.min,
        O = function () {
          return h.Date.now();
        };
      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
            o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }
        function r(e) {
          return O = e, h = setTimeout(s, t), _ ? i(e) : g;
        }
        function u(e) {
          var n = e - w,
            o = e - O,
            i = t - n;
          return S ? x(i, y - o) : i;
        }
        function f(e) {
          var n = e - w,
            o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }
        function s() {
          var e = j();
          return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
        }
        function d(e) {
          return h = void 0, z && b ? i(e) : (b = v = void 0, g);
        }
        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }
        function p() {
          return void 0 === h ? g : d(j());
        }
        function m() {
          var e = j(),
            n = f(e);
          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(s, t), i(w);
          }
          return void 0 === h && (h = setTimeout(s, t)), g;
        }
        var b,
          v,
          y,
          g,
          h,
          w,
          O = 0,
          _ = !1,
          S = !1,
          z = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m;
      }
      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }
      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }
      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s;
      }
      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return f;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
      }
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        },
        c = "Expected a function",
        f = NaN,
        s = "[object Symbol]",
        d = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        b = parseInt,
        v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
        y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
        g = v || y || Function("return this")(),
        h = Object.prototype,
        w = h.toString,
        k = Math.max,
        x = Math.min,
        j = function () {
          return g.Date.now();
        };
      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      var n = window.document,
        r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        a = new r(o);
      i = t, a.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }
    function o(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes),
          o = t.concat(n).filter(function (e) {
            return e.hasAttribute && e.hasAttribute("data-aos");
          }).length;
        o && i();
      });
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {};
    t.default = n;
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }(),
      r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
      a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
      f = function () {
        function e() {
          n(this, e);
        }
        return i(e, [{
          key: "phone",
          value: function () {
            var e = o();
            return !(!r.test(e) && !a.test(e.substr(0, 4)));
          }
        }, {
          key: "mobile",
          value: function () {
            var e = o();
            return !(!u.test(e) && !c.test(e.substr(0, 4)));
          }
        }, {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          }
        }]), e;
      }();
    t.default = new f();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e, t, n) {
        var o = e.node.getAttribute("data-aos-once");
        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
      },
      o = function (e, t) {
        var o = window.pageYOffset,
          i = window.innerHeight;
        e.forEach(function (e, r) {
          n(e, i + o, t);
        });
      };
    t.default = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(12),
      r = o(i),
      a = function (e, t) {
        return e.forEach(function (e, n) {
          e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
        }), e;
      };
    t.default = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(13),
      r = o(i),
      a = function (e, t) {
        var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
          };
        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n += e.offsetHeight;
            break;
          case "top-center":
            n += i / 2;
            break;
          case "bottom-center":
            n += i / 2 + e.offsetHeight;
            break;
          case "center-center":
            n += i / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            n += i;
            break;
          case "bottom-top":
            n += e.offsetHeight + i;
            break;
          case "center-top":
            n += e.offsetHeight / 2 + i;
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
      };
    t.default = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      return {
        top: n,
        left: t
      };
    };
    t.default = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function (e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };
    t.default = n;
  }]);
});

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/swiper-bundle.js":
/*!****************************************!*\
  !*** ./src/js/vendor/swiper-bundle.js ***!
  \****************************************/
/***/ (function(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }
  function t(s, a) {
    void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach(i => {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
      initEvent() {}
    }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({
      getPropertyValue: () => ""
    }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function o(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = function (e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);
    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }
  function d(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function c(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !c(a)) {
        const s = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r && r.enumerable && (d(e[i]) && d(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : p(e[i], a[i]) : !d(e[i]) && d(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : p(e[i], a[i])) : e[i] = a[i]);
        }
      }
    }
    return e;
  }
  function u(e, t, s) {
    e.style.setProperty(t, s);
  }
  function m(e) {
    let {
      swiper: t,
      targetPosition: s,
      side: a
    } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
      u = () => {
        l = new Date().getTime(), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = .5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
          [a]: c
        }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [a]: c
          });
        }), void i.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function h(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e;
  }
  function f(e, t) {
    return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t));
  }
  function g(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function v(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return {
      top: i.top + d - l,
      left: i.left + c - o
    };
  }
  function w(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function b(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function y(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
    return s;
  }
  function E(e, t) {
    t && e.addEventListener("transitionend", function s(a) {
      a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s));
    });
  }
  function x(e, t, s) {
    const a = r();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  let S, T, M;
  function C() {
    return S || (S = function () {
      const e = r(),
        t = a();
      return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), S;
  }
  function P(e) {
    return void 0 === e && (e = {}), T || (T = function (e) {
      let {
        userAgent: t
      } = void 0 === e ? {} : e;
      const s = C(),
        a = r(),
        i = a.navigator.platform,
        n = t || a.navigator.userAgent,
        l = {
          ios: !1,
          android: !1
        },
        o = a.screen.width,
        d = a.screen.height,
        c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
      let p = n.match(/(iPad).*OS\s([\d_]+)/);
      const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        h = "Win32" === i;
      let f = "MacIntel" === i;
      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l;
    }(e)), T;
  }
  function L() {
    return M || (M = function () {
      const e = r();
      let t = !1;
      function s() {
        const t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }
      if (s()) {
        const s = String(e.navigator.userAgent);
        if (s.includes("Version/")) {
          const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
          t = e < 16 || 16 === e && a < 2;
        }
      }
      return {
        isSafari: t || s(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), M;
  }
  var z = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return e.split(" ").forEach(e => {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r);
      }
      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(e => {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
          e.apply(a, [t, ...s]);
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
          e.apply(a, s);
        });
      }), e;
    }
  };
  const A = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    $ = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    I = e => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return r.push(...Array.from({
          length: t
        }).map((e, t) => s + a + t)), void e.slides.forEach((t, s) => {
          r.includes(t.column) && $(e, s);
        });
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop) for (let a = i - t; a <= r + t; a += 1) {
        const t = (a % s + s) % s;
        (t < i || t > r) && $(e, t);
      } else for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && $(e, a);
    };
  var k = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(w(a, "padding-left") || 0, 10) - parseInt(w(a, "padding-right") || 0, 10), s = s - parseInt(w(a, "padding-top") || 0, 10) - parseInt(w(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal() ? t : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        {
          wrapperEl: i,
          slidesEl: r,
          size: n,
          rtlTranslate: l,
          wrongRTL: o
        } = e,
        d = e.virtual && a.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        p = f(r, `.${e.params.slideClass}, swiper-slide`),
        m = d ? e.virtual.slides.length : p.length;
      let h = [];
      const g = [],
        v = [];
      let b = a.slidesOffsetBefore;
      "function" == typeof b && (b = a.slidesOffsetBefore.call(e));
      let y = a.slidesOffsetAfter;
      "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
      const E = e.snapGrid.length,
        S = e.slidesGrid.length;
      let T = a.spaceBetween,
        M = -b,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)), e.virtualSize = -T, p.forEach(e => {
        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
      }), a.centeredSlides && a.cssMode && (u(i, "--swiper-centered-offset-before", ""), u(i, "--swiper-centered-offset-after", ""));
      const L = a.grid && a.grid.rows > 1 && e.grid;
      let z;
      L && e.grid.initSlides(m);
      const A = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(e => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
      for (let i = 0; i < m; i += 1) {
        let r;
        if (z = 0, p[i] && (r = p[i]), L && e.grid.updateSlide(i, r, m, t), !p[i] || "none" !== w(r, "display")) {
          if ("auto" === a.slidesPerView) {
            A && (p[i].style[t("width")] = "");
            const n = getComputedStyle(r),
              l = r.style.transform,
              o = r.style.webkitTransform;
            if (l && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), a.roundLengths) z = e.isHorizontal() ? x(r, "width", !0) : x(r, "height", !0);else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                a = s(n, "padding-right"),
                i = s(n, "margin-left"),
                l = s(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) z = e + i + l;else {
                const {
                  clientWidth: s,
                  offsetWidth: n
                } = r;
                z = e + t + a + i + l + (n - s);
              }
            }
            l && (r.style.transform = l), o && (r.style.webkitTransform = o), a.roundLengths && (z = Math.floor(z));
          } else z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView, a.roundLengths && (z = Math.floor(z)), p[i] && (p[i].style[t("width")] = `${z}px`);
          p[i] && (p[i].swiperSlideSize = z), v.push(z), a.centeredSlides ? (M = M + z / 2 + C / 2 + T, 0 === C && 0 !== i && (M = M - n / 2 - T), 0 === i && (M = M - n / 2 - T), Math.abs(M) < .001 && (M = 0), a.roundLengths && (M = Math.floor(M)), P % a.slidesPerGroup == 0 && h.push(M), g.push(M)) : (a.roundLengths && (M = Math.floor(M)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && h.push(M), g.push(M), M = M + z + T), e.virtualSize += z + T, C = z, P += 1;
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, n) + y, l && o && ("slide" === a.effect || "coverflow" === a.effect) && (i.style.width = `${e.virtualSize + T}px`), a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + T}px`), L && e.grid.updateWrapperSize(z, h, t), !a.centeredSlides) {
        const t = [];
        for (let s = 0; s < h.length; s += 1) {
          let i = h[s];
          a.roundLengths && (i = Math.floor(i)), h[s] <= e.virtualSize - n && t.push(i);
        }
        h = t, Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - n);
      }
      if (d && a.loop) {
        const t = v[0] + T;
        if (a.slidesPerGroup > 1) {
          const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / a.slidesPerGroup),
            i = t * a.slidesPerGroup;
          for (let e = 0; e < s; e += 1) h.push(h[h.length - 1] + i);
        }
        for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1) 1 === a.slidesPerGroup && h.push(h[h.length - 1] + t), g.push(g[g.length - 1] + t), e.virtualSize += t;
      }
      if (0 === h.length && (h = [0]), 0 !== T) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        p.filter((e, t) => !(a.cssMode && !a.loop) || t !== p.length - 1).forEach(e => {
          e.style[s] = `${T}px`;
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        v.forEach(t => {
          e += t + (T || 0);
        }), e -= T;
        const t = e - n;
        h = h.map(e => e <= 0 ? -b : e > t ? t + y : e);
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (v.forEach(t => {
          e += t + (T || 0);
        }), e -= T, e < n) {
          const t = (n - e) / 2;
          h.forEach((e, s) => {
            h[s] = e - t;
          }), g.forEach((e, s) => {
            g[s] = e + t;
          });
        }
      }
      if (Object.assign(e, {
        slides: p,
        snapGrid: h,
        slidesGrid: g,
        slidesSizesGrid: v
      }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
        u(i, "--swiper-centered-offset-before", -h[0] + "px"), u(i, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + s);
      }
      if (m !== c && e.emit("slidesLengthChange"), h.length !== E && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== S && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(d || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        m <= a.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach(e => {
          s.push(e);
        });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
          const e = t.activeIndex + i;
          if (e > t.slides.length && !a) break;
          s.push(n(e));
        }
      } else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
        const e = s[i].offsetHeight;
        r = e > r ? e : r;
      }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
      for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      const t = this,
        s = t.params,
        {
          slides: a,
          rtlTranslate: i,
          snapGrid: r
        } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), a.forEach(e => {
        e.classList.remove(s.slideVisibleClass);
      }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e];
        (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)), o.progress = i ? -c : c, o.originalProgress = i ? -p : p;
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let {
        progress: i,
        isBeginning: r,
        isEnd: n,
        progressLoop: l
      } = t;
      const o = r,
        d = n;
      if (0 === a) i = 0, r = !0, n = !0;else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          slidesEl: a,
          activeIndex: i
        } = e,
        r = e.virtual && s.virtual.enabled,
        n = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (t.forEach(e => {
        e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
      }), r) {
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = n(`[data-swiper-slide-index="${t}"]`);
        } else l = n(`[data-swiper-slide-index="${i}"]`);
      } else l = t[i];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = function (e, t) {
          const s = [];
          for (; e.nextElementSibling;) {
            const a = e.nextElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), e = a;
          }
          return s;
        }(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let a = function (e, t) {
          const s = [];
          for (; e.previousElementSibling;) {
            const a = e.previousElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), e = a;
          }
          return s;
        }(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !a && (a = t[t.length - 1]), a && a.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l
        } = t;
      let o,
        d = e;
      const c = e => {
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };
      if (void 0 === d && (d = function (e) {
        const {
            slidesGrid: t,
            params: s
          } = e,
          a = e.rtlTranslate ? e.translate : -e.translate;
        let i;
        for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
        return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i;
      }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if (o >= a.length && (o = a.length - 1), d === r) return o !== l && (t.snapIndex = o, t.emit("snapIndexChange")), void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
      let p;
      p = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: n,
        realIndex: p,
        previousIndex: r,
        activeIndex: d
      }), t.initialized && I(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), n !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = e.closest(`.${s.slideClass}, swiper-slide`);
      let i,
        r = !1;
      if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
        r = !0, i = e;
        break;
      }
      if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var O = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const {
        params: t,
        rtlTranslate: s,
        translate: a,
        wrapperEl: i
      } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = o(i, e);
      return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: a,
          params: i,
          wrapperEl: r,
          progress: n
        } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
      const c = s.maxTranslate() - s.minTranslate();
      l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this,
        {
          params: n,
          wrapperEl: l
        } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;else {
          if (!r.support.smoothScroll) return m({
            swiper: r,
            targetPosition: -c,
            side: e ? "left" : "top"
          }), !0;
          l.scrollTo({
            [e ? "left" : "top"]: -c,
            behavior: "smooth"
          });
        }
        return !0;
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
      }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  function D(e) {
    let {
      swiper: t,
      runCallbacks: s,
      direction: a,
      step: i
    } = e;
    const {
      activeIndex: r,
      previousIndex: n
    } = t;
    let l = a;
    if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
  }
  var G = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: f
      } = r;
      if (r.animating && l.preventInteractionOnTransition || !f && !a && !i) return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
        const t = -Math.floor(100 * w),
          s = Math.floor(100 * d[e]),
          a = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e);
      }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      let b;
      if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
            h[e ? "scrollLeft" : "scrollTop"] = s;
          })) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(() => {
            r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
          });
        } else {
          if (!r.support.smoothScroll) return m({
            swiper: r,
            targetPosition: s,
            side: e ? "left" : "top"
          }), !0;
          h.scrollTo({
            [e ? "left" : "top"]: s,
            behavior: "smooth"
          });
        }
        return !0;
      }
      return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
      }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function (e, t, s, a) {
      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10);
      }
      const i = this;
      let r = e;
      return i.params.loop && (i.virtual && i.params.virtual.enabled ? r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          enabled: i,
          params: r,
          animating: n
        } = a;
      if (!i) return a;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        a.loopFix({
          direction: "next"
        }), a._clientLeft = a.wrapperEl.clientLeft;
      }
      return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d
        } = a;
      if (!o) return a;
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({
          direction: "prev"
        }), a._clientLeft = a.wrapperEl.clientLeft;
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map(e => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }), void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function () {
      const e = this,
        {
          params: t,
          slidesEl: s
        } = e,
        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${l}[data-swiper-slide-index="${i}"]`)[0]), n(() => {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${l}[data-swiper-slide-index="${i}"]`)[0]), n(() => {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var H = {
    loopCreate: function (e) {
      const t = this,
        {
          params: s,
          slidesEl: a
        } = t;
      if (!s.loop || t.virtual && t.params.virtual.enabled) return;
      f(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }), t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
      });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: d,
        allowSlidePrev: c,
        allowSlideNext: p,
        slidesEl: u,
        params: m
      } = o;
      if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
      const h = "auto" === m.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
      let f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - f % m.slidesPerGroup), o.loopedSlides = f;
      const g = [],
        v = [];
      let w = o.activeIndex;
      void 0 === r ? r = o.getSlideIndex(o.slides.filter(e => e.classList.contains(m.slideActiveClass))[0]) : w = r;
      const b = "next" === a || !a,
        y = "prev" === a || !a;
      let E = 0,
        x = 0;
      if (r < f) {
        E = Math.max(f - r, m.slidesPerGroup);
        for (let e = 0; e < f - r; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          g.push(d.length - t - 1);
        }
      } else if (r > o.slides.length - 2 * f) {
        x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (let e = 0; e < x; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          v.push(t);
        }
      }
      if (y && g.forEach(e => {
        o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1;
      }), b && v.forEach(e => {
        o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1;
      }), o.recalcSlides(), "auto" === m.slidesPerView && o.updateSlides(), m.watchSlidesProgress && o.updateSlidesOffset(), s) if (g.length > 0 && y) {
        if (void 0 === t) {
          const e = o.slidesGrid[w],
            t = o.slidesGrid[w + E] - e;
          l ? o.setTranslate(o.translate - t) : (o.slideTo(w + E, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
        } else i && o.slideToLoop(t, 0, !1, !0);
      } else if (v.length > 0 && b) if (void 0 === t) {
        const e = o.slidesGrid[w],
          t = o.slidesGrid[w - x] - e;
        l ? o.setTranslate(o.translate - t) : (o.slideTo(w - x, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t));
      } else o.slideToLoop(t, 0, !1, !0);
      if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
        const e = {
          slideRealIndex: t,
          slideTo: !1,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(t => {
          !t.destroyed && t.params.loop && t.loopFix(e);
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(e);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        {
          params: t,
          slidesEl: s
        } = e;
      if (!t.loop || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach(e => {
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        a[t] = e;
      }), e.slides.forEach(e => {
        e.removeAttribute("data-swiper-slide-index");
      }), a.forEach(e => {
        s.append(e);
      }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
    }
  };
  function X(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const {
      params: o,
      touches: d,
      enabled: c
    } = t;
    if (!c) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let u = p.target;
    if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in p && 3 === p.which) return;
    if ("button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && h && (u = h[0]);
    const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
      g = !(!p.target || !p.target.shadowRoot);
    if (o.noSwiping && (g ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === a() || s === r()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
      }(t);
    }(f, u) : u.closest(f))) return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    d.currentX = p.pageX, d.currentY = p.pageY;
    const v = d.currentX,
      w = d.currentY,
      b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (b && (v <= y || v >= i.innerWidth - y)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), d.startX = v, d.startY = w, n.touchStartTime = l(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1);
    let E = !0;
    u.matches(n.focusableElements) && (E = !1, "SELECT" === u.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== u && s.activeElement.blur();
    const x = E && t.allowTouchMove && o.touchStartPreventDefault;
    !o.touchStartForcePreventDefault && !x || u.isContentEditable || p.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p);
  }
  function Y(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      {
        params: r,
        touches: n,
        rtlTranslate: o,
        enabled: d
      } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    const p = i.evCache.findIndex(e => e.pointerId === c.pointerId);
    p >= 0 && (i.evCache[p] = c);
    const u = i.evCache.length > 1 ? i.evCache[0] : c,
      m = u.pageX,
      h = u.pageY;
    if (c.preventedByNestedSwiper) return n.startX = m, void (n.startY = h);
    if (!s.allowTouchMove) return c.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
      startX: m,
      startY: h,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: m,
      currentY: h
    }), i.touchStartTime = l()));
    if (r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (h < n.startY && s.translate <= s.maxTranslate() || h > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (m < n.startX && s.translate <= s.maxTranslate() || m > n.startX && s.translate >= s.minTranslate()) return;
    if (t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = m, n.currentY = h;
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      let e;
      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    let v = s.isHorizontal() ? f : g,
      w = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, w = -w);
    const b = s.touchesDirection;
    s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next";
    const y = s.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (y && s.loopFix({
        direction: s.swipeDirection
      }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        s.wrapperEl.dispatchEvent(e);
      }
      i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c);
    }
    let E;
    i.isMoved && b !== s.touchesDirection && y && Math.abs(v) >= 1 && (s.loopFix({
      direction: s.swipeDirection,
      setTranslate: !0
    }), E = !0), s.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
    let x = !0,
      S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0), v > 0 ? (y && !E && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (x = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** S))) : v < 0 && (y && !E && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (x = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** S))), x && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }
  function B(e) {
    const t = this,
      s = t.touchEventsData,
      a = s.evCache.findIndex(t => t.pointerId === e.pointerId);
    if (a >= 0 && s.evCache.splice(a, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
      if (!("pointercancel" === e.type && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    const {
      params: i,
      touches: r,
      rtlTranslate: o,
      slidesGrid: d,
      enabled: c
    } = t;
    if (!c) return;
    if (!i.simulateTouch && "mouse" === e.pointerType) return;
    let p = e;
    if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const u = l(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = p.path || p.composedPath && p.composedPath();
      t.updateClickedSlide(e && e[0] || p.target), t.emit("tap click", p), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p);
    }
    if (s.lastClickTime = l(), n(() => {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? o ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
    if (i.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    let f = 0,
      g = t.slidesSizesGrid[0];
    for (let e = 0; e < d.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== d[e + t] ? h >= d[e] && h < d[e + t] && (f = e, g = d[e + t] - d[e]) : h >= d[e] && (f = e, g = d[d.length - 1] - d[d.length - 2]);
    }
    let v = null,
      w = null;
    i.rewind && (t.isBeginning ? w = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const b = (h - d[f]) / g,
      y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (m > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + y) : t.slideTo(f)), "prev" === t.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(w) : t.slideTo(f));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl) ? p.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function N() {
    const e = this,
      {
        params: t,
        el: s
      } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: a,
        allowSlidePrev: i,
        snapGrid: r
      } = e,
      n = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function q(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      {
        wrapperEl: t,
        rtlTranslate: s,
        enabled: a
      } = e;
    if (!a) return;
    let i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function F(e) {
    const t = this;
    A(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
  }
  let _ = !1;
  function V() {}
  const j = (e, t) => {
    const s = a(),
      {
        params: i,
        el: r,
        wrapperEl: n,
        device: l
      } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r[d]("pointerdown", e.onTouchStart, {
      passive: !1
    }), s[d]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: o
    }), s[d]("pointerup", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerout", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e[c]("observerUpdate", N, !0), r[d]("load", e.onLoad, {
      capture: !0
    });
  };
  const W = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var U = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function K(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), p(t, s)) : p(t, s)) : p(t, s);
    };
  }
  const Z = {
      eventsEmitter: z,
      update: k,
      translate: O,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`), s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            {
              params: a
            } = s;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), D({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            {
              params: a
            } = s;
          s.animating = !1, a.cssMode || (s.setTransition(0), D({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: G,
      loop: H,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
        },
        unsetGrabCursor: function () {
          const e = this;
          e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1;
          }));
        }
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = a(),
            {
              params: s
            } = e;
          e.onTouchStart = X.bind(e), e.onTouchMove = Y.bind(e), e.onTouchEnd = B.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = q.bind(e), e.onLoad = F.bind(e), _ || (t.addEventListener("touchstart", V), _ = !0), j(e, "on");
        },
        detachEvents: function () {
          j(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              realIndex: t,
              initialized: s,
              params: a,
              el: i
            } = e,
            r = a.breakpoints;
          if (!r || r && 0 === Object.keys(r).length) return;
          const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!n || e.currentBreakpoint === n) return;
          const l = (n in r ? r[n] : void 0) || e.originalParams,
            o = W(e, a),
            d = W(e, l),
            c = a.enabled;
          o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
            if (void 0 === l[t]) return;
            const s = a[t] && a[t].enabled,
              i = l[t] && l[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
          const u = l.direction && l.direction !== a.direction,
            m = a.loop && (l.slidesPerView !== a.slidesPerView || u);
          u && s && e.changeDirection(), p(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), c && !h ? e.disable() : !c && h && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          let a = !1;
          const i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(e => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return {
                  value: n * t,
                  point: e
                };
              }
              return {
                value: e,
                point: e
              };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const {
              point: r,
              value: n
            } = l[e];
            "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
          }
          return a || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            {
              isLocked: t,
              params: s
            } = e,
            {
              slidesOffsetBefore: a
            } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: a,
              el: i,
              device: r
            } = e,
            n = function (e, t) {
              const s = [];
              return e.forEach(e => {
                "object" == typeof e ? Object.keys(e).forEach(a => {
                  e[a] && s.push(t + a);
                }) : "string" == typeof e && s.push(t + e);
              }), s;
            }(["initialized", s.direction, {
              "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
              autoheight: s.autoHeight
            }, {
              rtl: a
            }, {
              grid: s.grid && s.grid.rows > 1
            }, {
              "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
              android: r.android
            }, {
              ios: r.ios
            }, {
              "css-mode": s.cssMode
            }, {
              centered: s.cssMode && s.centeredSlides
            }, {
              "watch-progress": s.watchSlidesProgress
            }], s.containerModifierClass);
          t.push(...n), i.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const {
            el: e,
            classNames: t
          } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        }
      }
    },
    Q = {};
  class J {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
      1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
      const n = a();
      if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
        const e = [];
        return n.querySelectorAll(t.el).forEach(s => {
          const a = p({}, t, {
            el: s
          });
          e.push(new J(a));
        }), e;
      }
      const l = this;
      l.__swiper__ = !0, l.support = C(), l.device = P({
        userAgent: t.userAgent
      }), l.browser = L(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach(e => {
        e({
          params: t,
          swiper: l,
          extendParams: K(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const d = p({}, U, o);
      return l.params = p({}, d, Q, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: () => "horizontal" === l.params.direction,
        isVertical: () => "vertical" === l.params.direction,
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    getSlideIndex(e) {
      const {
          slidesEl: t,
          params: s
        } = this,
        a = b(f(t, `.${s.slideClass}, swiper-slide`)[0]);
      return b(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
      const {
        slidesEl: e,
        params: t
      } = this;
      this.slides = f(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach(s => {
        const a = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: a
        }), e.emit("_slideClass", s, a);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? a[l].swiperSlideSize : 0;
        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
      } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
      } else for (let e = l - 1; e >= 0; e -= 1) {
        i[l] - i[e] < n && (o += 1);
      }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: s
      } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
        t.complete && A(e, t);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();else {
        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(t => {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
      s.swiper = t, s.shadowEl && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return f(s, a())[0];
      })();
      return !i && t.params.createElements && (i = g("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach(e => {
        i.append(e);
      })), Object.assign(t, {
        el: s,
        wrapperEl: i,
        slidesEl: t.isElement ? s : i,
        mounted: !0,
        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === w(s, "direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === w(s, "direction")),
        wrongRTL: "-webkit-box" === w(i, "display")
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
        e.complete ? A(t, e) : e.addEventListener("load", e => {
          A(t, e.target);
        });
      }), I(t), t.initialized = !0, I(t), t.emit("init"), t.emit("afterInit")), t;
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        {
          params: a,
          el: i,
          wrapperEl: r,
          slides: n
        } = s;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach(e => {
        e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
        s.off(e);
      }), !1 !== e && (s.el.swiper = null, function (e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      }(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      p(Q, e);
    }
    static get extendedDefaults() {
      return Q;
    }
    static get defaults() {
      return U;
    }
    static installModule(e) {
      J.prototype.__modules__ || (J.prototype.__modules__ = []);
      const t = J.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach(e => J.installModule(e)), J) : (J.installModule(e), J);
    }
  }
  function ee(e, t, s, a) {
    return e.params.createElements && Object.keys(a).forEach(i => {
      if (!s[i] && !0 === s.auto) {
        let r = f(e.el, `.${a[i]}`)[0];
        r || (r = g("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r;
      }
    }), s;
  }
  function te(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function se(e) {
    const t = this,
      {
        params: s,
        slidesEl: a
      } = t;
    s.loop && t.loopDestroy();
    const i = e => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        t.innerHTML = e, a.append(t.children[0]), t.innerHTML = "";
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);else i(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update();
  }
  function ae(e) {
    const t = this,
      {
        params: s,
        activeIndex: a,
        slidesEl: i
      } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = e => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = "";
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1);
  }
  function ie(e, t) {
    const s = this,
      {
        params: a,
        activeIndex: i,
        slidesEl: r
      } = s;
    let n = i;
    a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function re(e) {
    const t = this,
      {
        params: s,
        activeIndex: a
      } = t;
    let i = a;
    s.loop && (i -= t.loopedSlides, t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
    t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function ne() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function le(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", () => {
      s.params.effect === t && i();
    }), a("setTransition", (e, a) => {
      s.params.effect === t && r(a);
    }), a("transitionEnd", () => {
      if (s.params.effect === t && o) {
        if (!d || !d().slideShadows) return;
        s.slides.forEach(e => {
          e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove());
        }), o();
      }
    }), a("virtualUpdate", () => {
      s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(() => {
        c && s.slides && s.slides.length && (i(), c = !1);
      }));
    });
  }
  function oe(e, t) {
    const s = h(t);
    return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
  }
  function de(e) {
    let {
      swiper: t,
      duration: s,
      transformElements: a,
      allSlides: i
    } = e;
    const {
      activeIndex: r
    } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      e = i ? a : a.filter(e => {
        const s = e.classList.contains("swiper-slide-transform") ? (e => {
          if (!e.parentElement) return t.slides.filter(t => t.shadowEl && t.shadowEl === e.parentNode)[0];
          return e.parentElement;
        })(e) : e;
        return t.getSlideIndex(s) === r;
      }), e.forEach(e => {
        E(e, () => {
          if (s) return;
          if (!t || t.destroyed) return;
          s = !0, t.animating = !1;
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0
          });
          t.wrapperEl.dispatchEvent(e);
        });
      });
    }
  }
  function ce(e, t, s) {
    const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
      i = h(t);
    let r = i.querySelector(`.${a}`);
    return r || (r = g("div", "swiper-slide-shadow" + (s ? `-${s}` : "")), i.append(r)), r;
  }
  Object.keys(Z).forEach(e => {
    Object.keys(Z[e]).forEach(t => {
      J.prototype[t] = Z[e][t];
    });
  }), J.use([function (e) {
    let {
      swiper: t,
      on: s,
      emit: a
    } = e;
    const i = r();
    let n = null,
      l = null;
    const o = () => {
        t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
      },
      d = () => {
        t && !t.destroyed && t.initialized && a("orientationchange");
      };
    s("init", () => {
      t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver(e => {
        l = i.requestAnimationFrame(() => {
          const {
            width: s,
            height: a
          } = t;
          let i = s,
            r = a;
          e.forEach(e => {
            let {
              contentBoxSize: s,
              contentRect: a,
              target: n
            } = e;
            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
          }), i === s && r === a || o();
        });
      }), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d));
    }), s("destroy", () => {
      l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = [],
      l = r(),
      o = function (e, s) {
        void 0 === s && (s = {});
        const a = new (l.MutationObserver || l.WebkitMutationObserver)(e => {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void i("observerUpdate", e[0]);
          const s = function () {
            i("observerUpdate", e[0]);
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0);
        });
        a.observe(e, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: void 0 === s.childList || s.childList,
          characterData: void 0 === s.characterData || s.characterData
        }), n.push(a);
      };
    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), a("init", () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const e = y(t.el);
          for (let t = 0; t < e.length; t += 1) o(e[t]);
        }
        o(t.el, {
          childList: t.params.observeSlideChildren
        }), o(t.wrapperEl, {
          attributes: !1
        });
      }
    }), a("destroy", () => {
      n.forEach(e => {
        e.disconnect();
      }), n.splice(0, n.length);
    });
  }]);
  const pe = [function (e) {
    let t,
      {
        swiper: s,
        extendParams: i,
        on: r,
        emit: n
      } = e;
    i({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    const l = a();
    s.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const o = l.createElement("div");
    function d(e, t) {
      const a = s.params.virtual;
      if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      let i;
      return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? g("swiper-slide") : g("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i;
    }
    function c(e) {
      const {
          slidesPerView: t,
          slidesPerGroup: a,
          centeredSlides: i,
          loop: r
        } = s.params,
        {
          addSlidesBefore: l,
          addSlidesAfter: o
        } = s.params.virtual,
        {
          from: c,
          to: p,
          slides: u,
          slidesGrid: m,
          offset: h
        } = s.virtual;
      s.params.cssMode || s.updateActiveIndex();
      const g = s.activeIndex || 0;
      let v, w, b;
      v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (w = Math.floor(t / 2) + a + o, b = Math.floor(t / 2) + a + l) : (w = t + (a - 1) + o, b = (r ? t : a) + l);
      let y = g - b,
        E = g + w;
      r || (y = Math.max(y, 0), E = Math.min(E, u.length - 1));
      let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
      function S() {
        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate");
      }
      if (r && g >= b ? (y -= b, i || (x += s.slidesGrid[0])) : r && g < b && (y = -b, i && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: s.slidesGrid,
        slidesBefore: b,
        slidesAfter: w
      }), c === y && p === E && !e) return s.slidesGrid !== m && x !== h && s.slides.forEach(e => {
        e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), s.updateProgress(), void n("virtualUpdate");
      if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          const e = [];
          for (let t = y; t <= E; t += 1) e.push(u[t]);
          return e;
        }()
      }), void (s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"));
      const T = [],
        M = [],
        C = e => {
          let t = e;
          return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t;
        };
      if (e) s.slidesEl.querySelectorAll(`.${s.params.slideClass}, swiper-slide`).forEach(e => {
        e.remove();
      });else for (let e = c; e <= p; e += 1) if (e < y || e > E) {
        const t = C(e);
        s.slidesEl.querySelectorAll(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`).forEach(e => {
          e.remove();
        });
      }
      const P = r ? -u.length : 0,
        L = r ? 2 * u.length : u.length;
      for (let t = P; t < L; t += 1) if (t >= y && t <= E) {
        const s = C(t);
        void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T.push(s));
      }
      if (M.forEach(e => {
        s.slidesEl.append(d(u[e], e));
      }), r) for (let e = T.length - 1; e >= 0; e -= 1) {
        const t = T[e];
        s.slidesEl.prepend(d(u[t], t));
      } else T.sort((e, t) => t - e), T.forEach(e => {
        s.slidesEl.prepend(d(u[e], e));
      });
      f(s.slidesEl, ".swiper-slide, swiper-slide").forEach(e => {
        e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
      }), S();
    }
    r("beforeInit", () => {
      if (!s.params.virtual.enabled) return;
      let e;
      if (void 0 === s.passedParams.virtual.slides) {
        const t = [...s.slidesEl.children].filter(e => e.matches(`.${s.params.slideClass}, swiper-slide`));
        t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove();
        }));
      }
      e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || c();
    }), r("setTranslate", () => {
      s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
        c();
      }, 100)) : c());
    }), r("init update resize", () => {
      s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
    }), Object.assign(s.virtual, {
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);
        c(!0);
      },
      prependSlide: function (e) {
        const t = s.activeIndex;
        let a = t + 1,
          i = 1;
        if (Array.isArray(e)) {
          for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
          a = t + e.length, i = e.length;
        } else s.virtual.slides.unshift(e);
        if (s.params.virtual.cache) {
          const e = s.virtual.cache,
            t = {};
          Object.keys(e).forEach(s => {
            const a = e[s],
              r = a.getAttribute("data-swiper-slide-index");
            r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
          }), s.virtual.cache = t;
        }
        c(!0), s.slideTo(a, 0);
      },
      removeSlide: function (e) {
        if (null == e) return;
        let t = s.activeIndex;
        if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        c(!0), s.slideTo(t, 0);
      },
      removeAllSlides: function () {
        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0);
      },
      update: c
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: n
    } = e;
    const l = a(),
      o = r();
    function d(e) {
      if (!t.enabled) return;
      const {
        rtlTranslate: s
      } = t;
      let a = e;
      a.originalEvent && (a = a.originalEvent);
      const i = a.keyCode || a.charCode,
        r = t.params.keyboard.pageUpDown,
        d = r && 33 === i,
        c = r && 34 === i,
        p = 37 === i,
        u = 39 === i,
        m = 38 === i,
        h = 40 === i;
      if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
          let e = !1;
          if (y(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === y(t.el, `.${t.params.slideActiveClass}`).length) return;
          const a = t.el,
            i = a.clientWidth,
            r = a.clientHeight,
            n = o.innerWidth,
            l = o.innerHeight,
            d = v(a);
          s && (d.left -= a.scrollLeft);
          const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
          for (let t = 0; t < c.length; t += 1) {
            const s = c[t];
            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
              if (0 === s[0] && 0 === s[1]) continue;
              e = !0;
            }
          }
          if (!e) return;
        }
        t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i);
      }
    }
    function c() {
      t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0);
    }
    function p() {
      t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1);
    }
    t.keyboard = {
      enabled: !1
    }, s({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), i("init", () => {
      t.params.keyboard.enabled && c();
    }), i("destroy", () => {
      t.keyboard.enabled && p();
    }), Object.assign(t.keyboard, {
      enable: c,
      disable: p
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const o = r();
    let d;
    s({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    }), t.mousewheel = {
      enabled: !1
    };
    let c,
      p = l();
    const u = [];
    function m() {
      t.enabled && (t.mouseEntered = !0);
    }
    function h() {
      t.enabled && (t.mouseEntered = !1);
    }
    function f(e) {
      return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && l() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && l() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = new o.Date().getTime(), !1));
    }
    function g(e) {
      let s = e,
        a = !0;
      if (!t.enabled) return;
      if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
      const r = t.params.mousewheel;
      t.params.cssMode && s.preventDefault();
      let o = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
      const p = o && o.contains(s.target);
      if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      let m = 0;
      const h = t.rtlTranslate ? -1 : 1,
        g = function (e) {
          let t = 0,
            s = 0,
            a = 0,
            i = 0;
          return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
            spinX: t,
            spinY: s,
            pixelX: a,
            pixelY: i
          };
        }(s);
      if (r.forceToAxis) {
        if (t.isHorizontal()) {
          if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
          m = -g.pixelX * h;
        } else {
          if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
          m = -g.pixelY;
        }
      } else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
      if (0 === m) return !0;
      r.invert && (m = -m);
      let v = t.getTranslate() + m * r.sensitivity;
      if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
        const e = {
            time: l(),
            delta: Math.abs(m),
            direction: Math.sign(m)
          },
          a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
        if (!a) {
          c = void 0;
          let l = t.getTranslate() + m * r.sensitivity;
          const o = t.isBeginning,
            p = t.isEnd;
          if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0), t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
            direction: e.direction < 0 ? "next" : "prev",
            byMousewheel: !0
          }), t.params.freeMode.sticky) {
            clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
            const s = u.length ? u[u.length - 1] : void 0,
              a = u[0];
            if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
              const s = m > 0 ? .8 : .2;
              c = e, u.splice(0), d = n(() => {
                t.slideToClosest(t.params.speed, !0, void 0, s);
              }, 0);
            }
            d || (d = n(() => {
              c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
            }, 500));
          }
          if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), l === t.minTranslate() || l === t.maxTranslate()) return !0;
        }
      } else {
        const s = {
          time: l(),
          delta: Math.abs(m),
          direction: Math.sign(m),
          raw: e
        };
        u.length >= 2 && u.shift();
        const a = u.length ? u[u.length - 1] : void 0;
        if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function (e) {
          const s = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
          return !1;
        }(s)) return !0;
      }
      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }
    function v(e) {
      let s = t.el;
      "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g);
    }
    function w() {
      return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function b() {
      return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    a("init", () => {
      !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w();
    }), a("destroy", () => {
      t.params.cssMode && w(), t.mousewheel.enabled && b();
    }), Object.assign(t.mousewheel, {
      enable: w,
      disable: b
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), t.navigation = {
      nextEl: null,
      prevEl: null
    };
    const r = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);
    function n(e) {
      let s;
      return e && "string" == typeof e && t.isElement && (s = t.el.shadowRoot.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s);
    }
    function l(e, s) {
      const a = t.params.navigation;
      (e = r(e)).forEach(e => {
        e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
      });
    }
    function o() {
      const {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      if (t.params.loop) return l(s, !1), void l(e, !1);
      l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind);
    }
    function d(e) {
      e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function c(e) {
      e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function p() {
      const e = t.params.navigation;
      if (t.params.navigation = ee(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !e.nextEl && !e.prevEl) return;
      let s = n(e.nextEl),
        a = n(e.prevEl);
      Object.assign(t.navigation, {
        nextEl: s,
        prevEl: a
      }), s = r(s), a = r(a);
      const i = (s, a) => {
        s && s.addEventListener("click", "next" === a ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
      };
      s.forEach(e => i(e, "next")), a.forEach(e => i(e, "prev"));
    }
    function u() {
      let {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      e = r(e), s = r(s);
      const a = (e, s) => {
        e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "));
      };
      e.forEach(e => a(e, "next")), s.forEach(e => a(e, "prev"));
    }
    a("init", () => {
      !1 === t.params.navigation.enabled ? m() : (p(), o());
    }), a("toEdge fromEdge lock unlock", () => {
      o();
    }), a("destroy", () => {
      u();
    }), a("enable disable", () => {
      let {
        nextEl: e,
        prevEl: s
      } = t.navigation;
      e = r(e), s = r(s), [...e, ...s].filter(e => !!e).forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.navigation.lockClass));
    }), a("click", (e, s) => {
      let {
        nextEl: a,
        prevEl: n
      } = t.navigation;
      a = r(a), n = r(n);
      const l = s.target;
      if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
        let e;
        a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...n].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass));
      }
    });
    const m = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(t.navigation, {
      enable: () => {
        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o();
      },
      disable: m,
      update: o,
      init: p,
      destroy: u
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const r = "swiper-pagination";
    let n;
    s({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: e => e,
        formatFractionTotal: e => e,
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`
      }
    }), t.pagination = {
      el: null,
      bullets: []
    };
    let l = 0;
    const o = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);
    function d() {
      return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }
    function c(e, s) {
      const {
        bulletActiveClass: a
      } = t.params.pagination;
      e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`));
    }
    function p(e) {
      const s = e.target.closest(te(t.params.pagination.bulletClass));
      if (!s) return;
      e.preventDefault();
      const a = b(s) * t.params.slidesPerGroup;
      if (t.params.loop) {
        if (t.realIndex === a) return;
        const e = t.getSlideIndexByData(a),
          s = t.getSlideIndexByData(t.realIndex);
        e > t.slides.length - t.loopedSlides && t.loopFix({
          direction: e > s ? "next" : "prev",
          activeSlideIndex: e,
          slideTo: !1
        }), t.slideToLoop(a);
      } else t.slideTo(a);
    }
    function u() {
      const e = t.rtl,
        s = t.params.pagination;
      if (d()) return;
      let a,
        r,
        p = t.pagination.el;
      p = o(p);
      const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
      if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
        const i = t.pagination.bullets;
        let o, d, u;
        if (s.dynamicBullets && (n = x(i[0], t.isHorizontal() ? "width" : "height", !0), p.forEach(e => {
          e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
        }), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), d = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (d + o) / 2), i.forEach(e => {
          const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
          e.classList.remove(...t);
        }), p.length > 1) i.forEach(e => {
          const i = b(e);
          i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && c(e, "prev"), i === d && c(e, "next"));
        });else {
          const e = i[a];
          if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach((e, t) => {
            e.setAttribute("part", t === a ? "bullet-active" : "bullet");
          }), s.dynamicBullets) {
            const e = i[o],
              t = i[d];
            for (let e = o; e <= d; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
            c(e, "prev"), c(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const a = Math.min(i.length, s.dynamicMainBullets + 4),
            r = (n * a - n) / 2 - u * n,
            l = e ? "right" : "left";
          i.forEach(e => {
            e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
          });
        }
      }
      p.forEach((e, r) => {
        if ("fraction" === s.type && (e.querySelectorAll(te(s.currentClass)).forEach(e => {
          e.textContent = s.formatFractionCurrent(a + 1);
        }), e.querySelectorAll(te(s.totalClass)).forEach(e => {
          e.textContent = s.formatFractionTotal(m);
        })), "progressbar" === s.type) {
          let i;
          i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          const r = (a + 1) / m;
          let n = 1,
            l = 1;
          "horizontal" === i ? n = r : l = r, e.querySelectorAll(te(s.progressbarFillClass)).forEach(e => {
            e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`;
          });
        }
        "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, m), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function m() {
      const e = t.params.pagination;
      if (d()) return;
      const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
      let a = t.pagination.el;
      a = o(a);
      let r = "";
      if ("bullets" === e.type) {
        let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
        t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
        for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
      }
      "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach(s => {
        "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(te(e.bulletClass)));
      }), "custom" !== e.type && i("paginationRender", a[0]);
    }
    function h() {
      t.params.pagination = ee(t, t.originalParams.pagination, t.params.pagination, {
        el: "swiper-pagination"
      });
      const e = t.params.pagination;
      if (!e.el) return;
      let s;
      "string" == typeof e.el && t.isElement && (s = t.el.shadowRoot.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter(e => y(e, ".swiper")[0] === t.el)[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
        el: s
      }), s = o(s), s.forEach(s => {
        "bullets" === e.type && e.clickable && s.classList.add(e.clickableClass), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass);
      }));
    }
    function f() {
      const e = t.params.pagination;
      if (d()) return;
      let s = t.pagination.el;
      s && (s = o(s), s.forEach(s => {
        s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && s.removeEventListener("click", p);
      })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")));
    }
    a("changeDirection", () => {
      if (!t.pagination || !t.pagination.el) return;
      const e = t.params.pagination;
      let {
        el: s
      } = t.pagination;
      s = o(s), s.forEach(s => {
        s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), a("init", () => {
      !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
    }), a("activeIndexChange", () => {
      void 0 === t.snapIndex && u();
    }), a("snapIndexChange", () => {
      u();
    }), a("snapGridLengthChange", () => {
      m(), u();
    }), a("destroy", () => {
      f();
    }), a("enable disable", () => {
      let {
        el: e
      } = t.pagination;
      e && (e = o(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
    }), a("lock unlock", () => {
      u();
    }), a("click", (e, s) => {
      const a = s.target;
      let {
        el: r
      } = t.pagination;
      if (Array.isArray(r) || (r = [r].filter(e => !!e)), t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
        if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
        const e = r[0].classList.contains(t.params.pagination.hiddenClass);
        i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
    const g = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let {
        el: e
      } = t.pagination;
      e && (e = o(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), f();
    };
    Object.assign(t.pagination, {
      enable: () => {
        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
        let {
          el: e
        } = t.pagination;
        e && (e = o(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), h(), m(), u();
      },
      disable: g,
      render: m,
      update: u,
      init: h,
      destroy: f
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i,
      emit: r
    } = e;
    const l = a();
    let o,
      d,
      c,
      p,
      u = !1,
      m = null,
      h = null;
    function f() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
          scrollbar: e,
          rtlTranslate: s
        } = t,
        {
          dragEl: a,
          el: i
        } = e,
        r = t.params.scrollbar,
        n = t.params.loop ? t.progressLoop : t.progress;
      let l = d,
        o = (c - d) * n;
      s ? (o = -o, o > 0 ? (l = d - o, o = 0) : -o + d > c && (l = c + o)) : o < 0 ? (l = d + o, o = 0) : o + d > c && (l = c - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(m), i.style.opacity = 1, m = setTimeout(() => {
        i.style.opacity = 0, i.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function w() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const {
          scrollbar: e
        } = t,
        {
          dragEl: s,
          el: a
        } = e;
      s.style.width = "", s.style.height = "", c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), d = "auto" === t.params.scrollbar.dragSize ? c * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${d}px` : s.style.height = `${d}px`, a.style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
    }
    function b(e) {
      return t.isHorizontal() ? e.clientX : e.clientY;
    }
    function y(e) {
      const {
          scrollbar: s,
          rtlTranslate: a
        } = t,
        {
          el: i
        } = s;
      let r;
      r = (b(e) - v(i)[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : d / 2)) / (c - d), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
      t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    function E(e) {
      const s = t.params.scrollbar,
        {
          scrollbar: a,
          wrapperEl: i
        } = t,
        {
          el: n,
          dragEl: l
        } = a;
      u = !0, o = e.target === l ? b(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", y(e), clearTimeout(h), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e);
    }
    function x(e) {
      const {
          scrollbar: s,
          wrapperEl: a
        } = t,
        {
          el: i,
          dragEl: n
        } = s;
      u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, y(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e));
    }
    function S(e) {
      const s = t.params.scrollbar,
        {
          scrollbar: a,
          wrapperEl: i
        } = t,
        {
          el: l
        } = a;
      u && (u = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(h), h = n(() => {
        l.style.opacity = 0, l.style.transitionDuration = "400ms";
      }, 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    }
    function T(e) {
      const {
          scrollbar: s,
          params: a
        } = t,
        i = s.el;
      if (!i) return;
      const r = i,
        n = !!a.passiveListeners && {
          passive: !1,
          capture: !1
        },
        o = !!a.passiveListeners && {
          passive: !0,
          capture: !1
        };
      if (!r) return;
      const d = "on" === e ? "addEventListener" : "removeEventListener";
      r[d]("pointerdown", E, n), l[d]("pointermove", x, n), l[d]("pointerup", S, o);
    }
    function M() {
      const {
        scrollbar: e,
        el: s
      } = t;
      t.params.scrollbar = ee(t, t.originalParams.scrollbar, t.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const a = t.params.scrollbar;
      if (!a.el) return;
      let i, r;
      "string" == typeof a.el && t.isElement && (i = t.el.shadowRoot.querySelector(a.el)), i || "string" != typeof a.el ? i || (i = a.el) : i = l.querySelectorAll(a.el), t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(`.${t.params.scrollbar.dragClass}`), r || (r = g("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
        el: i,
        dragEl: r
      }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"), i && i.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
    }
    function C() {
      const e = t.params.scrollbar,
        s = t.scrollbar.el;
      s && s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && T("off");
    }
    s({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), t.scrollbar = {
      el: null,
      dragEl: null
    }, i("init", () => {
      !1 === t.params.scrollbar.enabled ? P() : (M(), w(), f());
    }), i("update resize observerUpdate lock unlock", () => {
      w();
    }), i("setTranslate", () => {
      f();
    }), i("setTransition", (e, s) => {
      !function (e) {
        t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
      }(s);
    }), i("enable disable", () => {
      const {
        el: e
      } = t.scrollbar;
      e && e.classList[t.enabled ? "remove" : "add"](t.params.scrollbar.lockClass);
    }), i("destroy", () => {
      C();
    });
    const P = () => {
      t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass), C();
    };
    Object.assign(t.scrollbar, {
      enable: () => {
        t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.el && t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass), M(), w(), f();
      },
      disable: P,
      updateSize: w,
      setTranslate: f,
      init: M,
      destroy: C
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      parallax: {
        enabled: !1
      }
    });
    const i = (e, s) => {
        const {
            rtl: a
          } = t,
          i = a ? -1 : 1,
          r = e.getAttribute("data-swiper-parallax") || "0";
        let n = e.getAttribute("data-swiper-parallax-x"),
          l = e.getAttribute("data-swiper-parallax-y");
        const o = e.getAttribute("data-swiper-parallax-scale"),
          d = e.getAttribute("data-swiper-parallax-opacity"),
          c = e.getAttribute("data-swiper-parallax-rotate");
        if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
          const t = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = t;
        }
        let p = `translate3d(${n}, ${l}, 0px)`;
        if (null != o) {
          p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
        }
        if (c && null != c) {
          p += ` rotate(${c * s * -1}deg)`;
        }
        e.style.transform = p;
      },
      r = () => {
        const {
          el: e,
          slides: s,
          progress: a,
          snapGrid: r
        } = t;
        f(e, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(e => {
          i(e, a);
        }), s.forEach((e, s) => {
          let n = e.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), e.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(e => {
            i(e, n);
          });
        });
      };
    a("beforeInit", () => {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
    }), a("init", () => {
      t.params.parallax.enabled && r();
    }), a("setTranslate", () => {
      t.params.parallax.enabled && r();
    }), a("setTransition", (e, s) => {
      t.params.parallax.enabled && function (e) {
        void 0 === e && (e = t.params.speed);
        const {
          el: s
        } = t;
        s.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(t => {
          let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
          0 === e && (s = 0), t.style.transitionDuration = `${s}ms`;
        });
      }(s);
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a,
      emit: i
    } = e;
    const n = r();
    s({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), t.zoom = {
      enabled: !1
    };
    let l,
      d,
      c = 1,
      p = !1;
    const u = [],
      m = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
      },
      h = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
      },
      g = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
      };
    let w = 1;
    function b() {
      if (u.length < 2) return 1;
      const e = u[0].pageX,
        t = u[0].pageY,
        s = u[1].pageX,
        a = u[1].pageY;
      return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
    }
    function E(e) {
      const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
      return !!e.target.matches(s) || t.slides.filter(t => t.contains(e.target)).length > 0;
    }
    function x(e) {
      if ("mouse" === e.pointerType && u.splice(0, u.length), !E(e)) return;
      const s = t.params.zoom;
      if (l = !1, d = !1, u.push(e), !(u.length < 2)) {
        if (l = !0, m.scaleStart = b(), !m.slideEl) {
          m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
          let a = m.slideEl.querySelector(`.${s.containerClass}`);
          if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? y(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
          m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
        }
        if (m.imageEl) {
          const [e, t] = function () {
            if (u.length < 2) return {
              x: null,
              y: null
            };
            const e = m.imageEl.getBoundingClientRect();
            return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / c];
          }();
          m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms";
        }
        p = !0;
      }
    }
    function S(e) {
      if (!E(e)) return;
      const s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(t => t.pointerId === e.pointerId);
      i >= 0 && (u[i] = e), u.length < 2 || (d = !0, m.scaleMove = b(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
    }
    function T(e) {
      if (!E(e)) return;
      if ("mouse" === e.pointerType && "pointerout" === e.type) return;
      const s = t.params.zoom,
        a = t.zoom,
        i = u.findIndex(t => t.pointerId === e.pointerId);
      i >= 0 && u.splice(i, 1), l && d && (l = !1, d = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)));
    }
    function M(e) {
      if (!E(e) || !function (e) {
        const s = `.${t.params.zoom.containerClass}`;
        return !!e.target.matches(s) || [...t.el.querySelectorAll(s)].filter(t => t.contains(e.target)).length > 0;
      }(e)) return;
      const s = t.zoom;
      if (!m.imageEl) return;
      if (!h.isTouched || !m.slideEl) return;
      h.isMoved || (h.width = m.imageEl.offsetWidth, h.height = m.imageEl.offsetHeight, h.startX = o(m.imageWrapEl, "x") || 0, h.startY = o(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
      const a = h.width * s.scale,
        i = h.height * s.scale;
      if (a < m.slideWidth && i < m.slideHeight) return;
      h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
      if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
        if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void (h.isTouched = !1);
        if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void (h.isTouched = !1);
      }
      e.cancelable && e.preventDefault(), e.stopPropagation(), h.isMoved = !0;
      const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
        {
          originX: n,
          originY: l
        } = m;
      h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
    }
    function C() {
      const e = t.zoom;
      m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0);
    }
    function P(e) {
      const s = t.zoom,
        a = t.params.zoom;
      if (!m.slideEl) {
        e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
        let s = m.slideEl.querySelector(`.${a.containerClass}`);
        s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? y(m.imageEl, `.${a.containerClass}`)[0] : void 0;
      }
      if (!m.imageEl || !m.imageWrapEl) return;
      let i, r, l, o, d, p, u, g, w, b, E, x, S, T, M, C, P, L;
      t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
      const z = "number" == typeof e ? e : null;
      1 === c && z && (i = void 0, r = void 0), s.scale = z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c = z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, !e || 1 === c && z ? (u = 0, g = 0) : (P = m.slideEl.offsetWidth, L = m.slideEl.offsetHeight, l = v(m.slideEl).left + n.scrollX, o = v(m.slideEl).top + n.scrollY, d = l + P / 2 - i, p = o + L / 2 - r, w = m.imageEl.offsetWidth, b = m.imageEl.offsetHeight, E = w * s.scale, x = b * s.scale, S = Math.min(P / 2 - E / 2, 0), T = Math.min(L / 2 - x / 2, 0), M = -S, C = -T, u = d * s.scale, g = p * s.scale, u < S && (u = S), u > M && (u = M), g < T && (g = T), g > C && (g = C)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`;
    }
    function L() {
      const e = t.zoom,
        s = t.params.zoom;
      if (!m.slideEl) {
        t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
        let e = m.slideEl.querySelector(`.${s.containerClass}`);
        e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? y(m.imageEl, `.${s.containerClass}`)[0] : void 0;
      }
      m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0);
    }
    function z(e) {
      const s = t.zoom;
      s.scale && 1 !== s.scale ? L() : P(e);
    }
    function A() {
      return {
        passiveListener: !!t.params.passiveListeners && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !t.params.passiveListeners || {
          passive: !1,
          capture: !0
        }
      };
    }
    function $() {
      const e = t.zoom;
      if (e.enabled) return;
      e.enabled = !0;
      const {
        passiveListener: s,
        activeListenerWithCapture: a
      } = A();
      t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl.addEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
        t.wrapperEl.addEventListener(e, T, s);
      }), t.wrapperEl.addEventListener("pointermove", M, a);
    }
    function I() {
      const e = t.zoom;
      if (!e.enabled) return;
      e.enabled = !1;
      const {
        passiveListener: s,
        activeListenerWithCapture: a
      } = A();
      t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl.removeEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach(e => {
        t.wrapperEl.removeEventListener(e, T, s);
      }), t.wrapperEl.removeEventListener("pointermove", M, a);
    }
    Object.defineProperty(t.zoom, "scale", {
      get: () => w,
      set(e) {
        if (w !== e) {
          const t = m.imageEl,
            s = m.slideEl;
          i("zoomChange", e, t, s);
        }
        w = e;
      }
    }), a("init", () => {
      t.params.zoom.enabled && $();
    }), a("destroy", () => {
      I();
    }), a("touchStart", (e, s) => {
      t.zoom.enabled && function (e) {
        const s = t.device;
        if (!m.imageEl) return;
        if (h.isTouched) return;
        s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
        const a = u.length > 0 ? u[0] : e;
        h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY;
      }(s);
    }), a("touchEnd", (e, s) => {
      t.zoom.enabled && function () {
        const e = t.zoom;
        if (!m.imageEl) return;
        if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
        h.isTouched = !1, h.isMoved = !1;
        let s = 300,
          a = 300;
        const i = g.x * s,
          r = h.currentX + i,
          n = g.y * a,
          l = h.currentY + n;
        0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
        const o = Math.max(s, a);
        h.currentX = r, h.currentY = l;
        const d = h.width * e.scale,
          c = h.height * e.scale;
        h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`;
      }();
    }), a("doubleTap", (e, s) => {
      !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && z(s);
    }), a("transitionEnd", () => {
      t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", () => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
      enable: $,
      disable: I,
      in: P,
      out: L,
      toggle: z
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    function i(e, t) {
      const s = function () {
        let e, t, s;
        return (a, i) => {
          for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
          return e;
        };
      }();
      let a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }
    function r() {
      t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
    }
    s({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), t.controller = {
      control: void 0
    }, a("beforeInit", () => {
      if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
        const e = document.querySelector(t.params.controller.control);
        if (e && e.swiper) t.controller.control = e.swiper;else if (e) {
          const s = a => {
            t.controller.control = a.detail[0], t.update(), e.removeEventListener("init", s);
          };
          e.addEventListener("init", s);
        }
      } else t.controller.control = t.params.controller.control;
    }), a("update", () => {
      r();
    }), a("resize", () => {
      r();
    }), a("observerUpdate", () => {
      r();
    }), a("setTranslate", (e, s, a) => {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a);
    }), a("setTransition", (e, s, a) => {
      t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a);
    }), Object.assign(t.controller, {
      setTranslate: function (e, s) {
        const a = t.controller.control;
        let r, n;
        const l = t.constructor;
        function o(e) {
          if (e.destroyed) return;
          const s = t.rtlTranslate ? -t.translate : t.translate;
          "slide" === t.params.controller.by && (!function (e) {
            t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid);
          }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);else a instanceof l && s !== a && o(a);
      },
      setTransition: function (e, s) {
        const a = t.constructor,
          i = t.controller.control;
        let r;
        function l(s) {
          s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && n(() => {
            s.updateAutoHeight();
          }), E(s.wrapperEl, () => {
            i && s.transitionEnd();
          })));
        }
        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && l(i[r]);else i instanceof a && s !== i && l(i);
      }
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null
      }
    }), t.a11y = {
      clicked: !1
    };
    let i = null;
    function r(e) {
      const t = i;
      0 !== t.length && (t.innerHTML = "", t.innerHTML = e);
    }
    const n = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e);
    function l(e) {
      (e = n(e)).forEach(e => {
        e.setAttribute("tabIndex", "0");
      });
    }
    function o(e) {
      (e = n(e)).forEach(e => {
        e.setAttribute("tabIndex", "-1");
      });
    }
    function d(e, t) {
      (e = n(e)).forEach(e => {
        e.setAttribute("role", t);
      });
    }
    function c(e, t) {
      (e = n(e)).forEach(e => {
        e.setAttribute("aria-roledescription", t);
      });
    }
    function p(e, t) {
      (e = n(e)).forEach(e => {
        e.setAttribute("aria-label", t);
      });
    }
    function u(e) {
      (e = n(e)).forEach(e => {
        e.setAttribute("aria-disabled", !0);
      });
    }
    function m(e) {
      (e = n(e)).forEach(e => {
        e.setAttribute("aria-disabled", !1);
      });
    }
    function h(e) {
      if (13 !== e.keyCode && 32 !== e.keyCode) return;
      const s = t.params.a11y,
        a = e.target;
      t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(te(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && a === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.matches(te(t.params.pagination.bulletClass)) && a.click());
    }
    function f() {
      return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
    }
    function v() {
      return f() && t.params.pagination.clickable;
    }
    const w = (e, t, s) => {
        l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)), p(e, s), function (e, t) {
          (e = n(e)).forEach(e => {
            e.setAttribute("aria-controls", t);
          });
        }(e, t);
      },
      y = () => {
        t.a11y.clicked = !0;
      },
      E = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            t.destroyed || (t.a11y.clicked = !1);
          });
        });
      },
      x = e => {
        if (t.a11y.clicked) return;
        const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
        if (!s || !t.slides.includes(s)) return;
        const a = t.slides.indexOf(s) === t.activeIndex,
          i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
      },
      S = () => {
        const e = t.params.a11y;
        e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
        const s = t.slides.length;
        e.slideLabelMessage && t.slides.forEach((a, i) => {
          const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
          p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s));
        });
      },
      T = () => {
        const e = t.params.a11y;
        t.isElement ? t.el.shadowEl.append(i) : t.el.append(i);
        const s = t.el;
        e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
        const a = t.wrapperEl,
          r = e.id || a.getAttribute("id") || `swiper-wrapper-${(l = 16, void 0 === l && (l = 16), "x".repeat(l).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
        var l;
        const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
        var d;
        d = r, n(a).forEach(e => {
          e.setAttribute("id", d);
        }), function (e, t) {
          (e = n(e)).forEach(e => {
            e.setAttribute("aria-live", t);
          });
        }(a, o), S();
        let {
          nextEl: u,
          prevEl: m
        } = t.navigation ? t.navigation : {};
        if (u = n(u), m = n(m), u && u.forEach(t => w(t, r, e.nextSlideMessage)), m && m.forEach(t => w(t, r, e.prevSlideMessage)), v()) {
          (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(e => {
            e.addEventListener("keydown", h);
          });
        }
        t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", y, !0), t.el.addEventListener("pointerup", E, !0);
      };
    a("beforeInit", () => {
      i = g("span", t.params.a11y.notificationClass), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true");
    }), a("afterInit", () => {
      t.params.a11y.enabled && T();
    }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t.params.a11y.enabled && S();
    }), a("fromEdge toEdge afterInit lock unlock", () => {
      t.params.a11y.enabled && function () {
        if (t.params.loop || t.params.rewind || !t.navigation) return;
        const {
          nextEl: e,
          prevEl: s
        } = t.navigation;
        s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
      }();
    }), a("paginationUpdate", () => {
      t.params.a11y.enabled && function () {
        const e = t.params.a11y;
        f() && t.pagination.bullets.forEach(s => {
          t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, b(s) + 1)))), s.matches(te(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current");
        });
      }();
    }), a("destroy", () => {
      t.params.a11y.enabled && function () {
        i && i.remove();
        let {
          nextEl: e,
          prevEl: s
        } = t.navigation ? t.navigation : {};
        e = n(e), s = n(s), e && e.forEach(e => e.removeEventListener("keydown", h)), s && s.forEach(e => e.removeEventListener("keydown", h)), v() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach(e => {
          e.removeEventListener("keydown", h);
        });
        t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", y, !0), t.el.removeEventListener("pointerup", E, !0);
      }();
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    let i = !1,
      n = {};
    const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
      o = e => {
        const t = r();
        let s;
        s = e ? new URL(e) : t.location;
        const a = s.pathname.slice(1).split("/").filter(e => "" !== e),
          i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
      d = (e, s) => {
        const a = r();
        if (!i || !t.params.history.enabled) return;
        let n;
        n = t.params.url ? new URL(t.params.url) : a.location;
        const o = t.slides[s];
        let d = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
          let s = t.params.history.root;
          "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`;
        } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
        t.params.history.keepQuery && (d += n.search);
        const c = a.history.state;
        c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
          value: d
        }, null, d) : a.history.pushState({
          value: d
        }, null, d));
      },
      c = (e, s, a) => {
        if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
          const r = t.slides[i];
          if (l(r.getAttribute("data-history")) === s) {
            const s = t.getSlideIndex(r);
            t.slideTo(s, e, a);
          }
        } else t.slideTo(0, e, a);
      },
      p = () => {
        n = o(t.params.url), c(t.params.speed, n.value, !1);
      };
    a("init", () => {
      t.params.history.enabled && (() => {
        const e = r();
        if (t.params.history) {
          if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
          i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p);
        }
      })();
    }), a("destroy", () => {
      t.params.history.enabled && (() => {
        const e = r();
        t.params.history.replaceState || e.removeEventListener("popstate", p);
      })();
    }), a("transitionEnd _freeModeNoMomentumRelease", () => {
      i && d(t.params.history.key, t.activeIndex);
    }), a("slideChange", () => {
      i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
    });
  }, function (e) {
    let {
        swiper: t,
        extendParams: s,
        emit: i,
        on: n
      } = e,
      l = !1;
    const o = a(),
      d = r();
    s({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(e, s) {
          if (t.virtual && t.params.virtual.enabled) {
            const e = t.slides.filter(e => e.getAttribute("data-hash") === s)[0];
            if (!e) return 0;
            return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          }
          return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0]);
        }
      }
    });
    const c = () => {
        i("hashChange");
        const e = o.location.hash.replace("#", ""),
          s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          const s = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === s || Number.isNaN(s)) return;
          t.slideTo(s);
        }
      },
      p = () => {
        if (!l || !t.params.hashNavigation.enabled) return;
        const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
          s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
        t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"));
      };
    n("init", () => {
      t.params.hashNavigation.enabled && (() => {
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        l = !0;
        const e = o.location.hash.replace("#", "");
        if (e) {
          const s = 0,
            a = t.params.hashNavigation.getSlideIndex(t, e);
          t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
        }
        t.params.hashNavigation.watchState && d.addEventListener("hashchange", c);
      })();
    }), n("destroy", () => {
      t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c);
    }), n("transitionEnd _freeModeNoMomentumRelease", () => {
      l && p();
    }), n("slideChange", () => {
      l && t.params.cssMode && p();
    });
  }, function (e) {
    let t,
      s,
      {
        swiper: i,
        extendParams: r,
        on: n,
        emit: l,
        params: o
      } = e;
    i.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, r({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let d,
      c,
      p,
      u,
      m,
      h,
      f,
      g = o && o.autoplay ? o.autoplay.delay : 3e3,
      v = o && o.autoplay ? o.autoplay.delay : 3e3,
      w = new Date().getTime;
    function b(e) {
      i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", b), M());
    }
    const y = () => {
        if (i.destroyed || !i.autoplay.running) return;
        i.autoplay.paused ? c = !0 : c && (v = d, c = !1);
        const e = i.autoplay.paused ? d : w + v - new Date().getTime();
        i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / g), s = requestAnimationFrame(() => {
          y();
        });
      },
      E = e => {
        if (i.destroyed || !i.autoplay.running) return;
        cancelAnimationFrame(s), y();
        let a = void 0 === e ? i.params.autoplay.delay : e;
        g = i.params.autoplay.delay, v = i.params.autoplay.delay;
        const r = (() => {
          let e;
          if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : i.slides[i.activeIndex], !e) return;
          return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, g = r, v = r), d = a;
        const n = i.params.speed,
          o = () => {
            i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (w = new Date().getTime(), requestAnimationFrame(() => {
              E();
            })));
          };
        return a > 0 ? (clearTimeout(t), t = setTimeout(() => {
          o();
        }, a)) : requestAnimationFrame(() => {
          o();
        }), a;
      },
      x = () => {
        i.autoplay.running = !0, E(), l("autoplayStart");
      },
      S = () => {
        i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop");
      },
      T = (e, s) => {
        if (i.destroyed || !i.autoplay.running) return;
        clearTimeout(t), e || (f = !0);
        const a = () => {
          l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", b) : M();
        };
        if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
        const r = d || i.params.autoplay.delay;
        d = r - (new Date().getTime() - w), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a());
      },
      M = () => {
        i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (w = new Date().getTime(), f ? (f = !1, E(d)) : E(), i.autoplay.paused = !1, l("autoplayResume"));
      },
      C = () => {
        if (i.destroyed || !i.autoplay.running) return;
        const e = a();
        "hidden" === e.visibilityState && (f = !0, T(!0)), "visible" === e.visibilityState && M();
      },
      P = e => {
        "mouse" === e.pointerType && (f = !0, T(!0));
      },
      L = e => {
        "mouse" === e.pointerType && i.autoplay.paused && M();
      };
    n("init", () => {
      i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", L)), a().addEventListener("visibilitychange", C), w = new Date().getTime(), x());
    }), n("destroy", () => {
      i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", L), a().removeEventListener("visibilitychange", C), i.autoplay.running && S();
    }), n("beforeTransitionStart", (e, t, s) => {
      !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
    }), n("sliderFirstMove", () => {
      !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? S() : (p = !0, u = !1, f = !1, m = setTimeout(() => {
        f = !0, u = !0, T(!0);
      }, 200)));
    }), n("touchEnd", () => {
      if (!i.destroyed && i.autoplay.running && p) {
        if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
        u && i.params.cssMode && M(), u = !1, p = !1;
      }
    }), n("slideChange", () => {
      !i.destroyed && i.autoplay.running && (h = !0);
    }), Object.assign(i.autoplay, {
      start: x,
      stop: S,
      pause: T,
      resume: M
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: i
    } = e;
    s({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let r = !1,
      n = !1;
    function l() {
      const e = t.thumbs.swiper;
      if (!e || e.destroyed) return;
      const s = e.clickedIndex,
        a = e.clickedSlide;
      if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      let i;
      i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
    }
    function o() {
      const {
        thumbs: e
      } = t.params;
      if (r) return !1;
      r = !0;
      const s = t.constructor;
      if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(t.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), t.thumbs.swiper.update();else if (d(e.swiper)) {
        const a = Object.assign({}, e.swiper);
        Object.assign(a, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), t.thumbs.swiper = new s(a), n = !0;
      }
      return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0;
    }
    function c(e) {
      const s = t.thumbs.swiper;
      if (!s || s.destroyed) return;
      const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
      let i = 1;
      const r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach(e => e.classList.remove(r)), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach(e => {
        e.classList.add(r);
      });else for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
      const n = t.params.thumbs.autoScrollOffset,
        l = n && !s.params.loop;
      if (t.realIndex !== s.realIndex || l) {
        const i = s.activeIndex;
        let r, o;
        if (s.params.loop) {
          const e = s.slides.filter(e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`)[0];
          r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev";
        } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
        l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0));
      }
    }
    t.thumbs = {
      swiper: null
    }, i("beforeInit", () => {
      const {
        thumbs: e
      } = t.params;
      if (e && e.swiper) if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
        const s = a(),
          i = () => {
            const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
            if (a && a.swiper) e.swiper = a.swiper, o(), c(!0);else if (a) {
              const s = i => {
                e.swiper = i.detail[0], a.removeEventListener("init", s), o(), c(!0), e.swiper.update(), t.update();
              };
              a.addEventListener("init", s);
            }
            return a;
          },
          r = () => {
            if (t.destroyed) return;
            i() || requestAnimationFrame(r);
          };
        requestAnimationFrame(r);
      } else o(), c(!0);
    }), i("slideChange update resize observerUpdate", () => {
      c();
    }), i("setTransition", (e, s) => {
      const a = t.thumbs.swiper;
      a && !a.destroyed && a.setTransition(s);
    }), i("beforeDestroy", () => {
      const e = t.thumbs.swiper;
      e && !e.destroyed && n && e.destroy();
    }), Object.assign(t.thumbs, {
      init: o,
      update: c
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      emit: a,
      once: i
    } = e;
    s({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function () {
          if (t.params.cssMode) return;
          const e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function () {
          if (t.params.cssMode) return;
          const {
            touchEventsData: e,
            touches: s
          } = t;
          0 === e.velocities.length && e.velocities.push({
            position: s[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: s[t.isHorizontal() ? "currentX" : "currentY"],
            time: l()
          });
        },
        onTouchEnd: function (e) {
          let {
            currentPos: s
          } = e;
          if (t.params.cssMode) return;
          const {
              params: r,
              wrapperEl: n,
              rtlTranslate: o,
              snapGrid: d,
              touchEventsData: c
            } = t,
            p = l() - c.touchStartTime;
          if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);else {
            if (r.freeMode.momentum) {
              if (c.velocities.length > 1) {
                const e = c.velocities.pop(),
                  s = c.velocities.pop(),
                  a = e.position - s.position,
                  i = e.time - s.time;
                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || l() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
              let e = 1e3 * r.freeMode.momentumRatio;
              const s = t.velocity * e;
              let p = t.translate + s;
              o && (p = -p);
              let u,
                m = !1;
              const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
              let f;
              if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);else if (r.freeMode.sticky) {
                let e;
                for (let t = 0; t < d.length; t += 1) if (d[t] > -p) {
                  e = t;
                  break;
                }
                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p;
              }
              if (f && i("transitionEnd", () => {
                t.loopFix();
              }), 0 !== t.velocity) {
                if (e = o ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                  const s = Math.abs((o ? -p : p) - t.translate),
                    a = t.slidesSizesGrid[t.activeIndex];
                  e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                }
              } else if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, E(n, () => {
                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                  t.setTranslate(u), E(n, () => {
                    t && !t.destroyed && t.transitionEnd();
                  });
                }, 0));
              })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, E(n, () => {
                t && !t.destroyed && t.transitionEnd();
              }))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses();
            } else {
              if (r.freeMode.sticky) return void t.slideToClosest();
              r.freeMode && a("_freeModeNoMomentumRelease");
            }
            (!r.freeMode.momentum || p >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          }
        }
      }
    });
  }, function (e) {
    let t,
      s,
      a,
      {
        swiper: i,
        extendParams: r
      } = e;
    r({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    const n = () => {
      let e = i.params.spaceBetween;
      return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * i.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    i.grid = {
      initSlides: e => {
        const {
            slidesPerView: r
          } = i.params,
          {
            rows: n,
            fill: l
          } = i.params.grid;
        a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n)), s = t / n;
      },
      updateSlide: (e, r, l, o) => {
        const {
            slidesPerGroup: d
          } = i.params,
          c = n(),
          {
            rows: p,
            fill: u
          } = i.params.grid;
        let m, h, f;
        if ("row" === u && d > 1) {
          const s = Math.floor(e / (d * p)),
            a = e - p * d * s,
            i = 0 === s ? d : Math.min(Math.ceil((l - s * p * d) / p), d);
          f = Math.floor(a / i), h = a - f * i + s * d, m = h + f * t / p, r.style.order = m;
        } else "column" === u ? (h = Math.floor(e / p), f = e - h * p, (h > a || h === a && f === p - 1) && (f += 1, f >= p && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
        r.row = f, r.column = h, r.style[o("margin-top")] = 0 !== f ? c && `${c}px` : "";
      },
      updateWrapperSize: (e, s, a) => {
        const {
            centeredSlides: r,
            roundLengths: l
          } = i.params,
          o = n(),
          {
            rows: d
          } = i.params.grid;
        if (i.virtualSize = (e + o) * t, i.virtualSize = Math.ceil(i.virtualSize / d) - o, i.wrapperEl.style[a("width")] = `${i.virtualSize + o}px`, r) {
          const e = [];
          for (let t = 0; t < s.length; t += 1) {
            let a = s[t];
            l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
          }
          s.splice(0, s.length), s.push(...e);
        }
      }
    };
  }, function (e) {
    let {
      swiper: t
    } = e;
    Object.assign(t, {
      appendSlide: se.bind(t),
      prependSlide: ae.bind(t),
      addSlide: ie.bind(t),
      removeSlide: re.bind(t),
      removeAllSlides: ne.bind(t)
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      fadeEffect: {
        crossFade: !1
      }
    }), le({
      effect: "fade",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
          slides: e
        } = t;
        t.params.fadeEffect;
        for (let s = 0; s < e.length; s += 1) {
          const e = t.slides[s];
          let a = -e.swiperSlideOffset;
          t.params.virtualTranslate || (a -= t.translate);
          let i = 0;
          t.isHorizontal() || (i = a, a = 0);
          const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
            n = oe(0, e);
          n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`;
        }), de({
          swiper: t,
          duration: e,
          transformElements: s,
          allSlides: !0
        });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    });
    const i = (e, t, s) => {
      let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      a || (a = g("div", "swiper-slide-shadow-" + (s ? "left" : "top")), e.append(a)), i || (i = g("div", "swiper-slide-shadow-" + (s ? "right" : "bottom")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0));
    };
    le({
      effect: "cube",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            el: e,
            wrapperEl: s,
            slides: a,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: d
          } = t,
          c = t.params.cubeEffect,
          p = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled;
        let m,
          h = 0;
        c.shadow && (p ? (m = t.slidesEl.querySelector(".swiper-cube-shadow"), m || (m = g("div", "swiper-cube-shadow"), t.slidesEl.append(m)), m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = g("div", "swiper-cube-shadow"), e.append(m))));
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          let s = e;
          u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
          let r = 90 * s,
            n = Math.floor(r / 360);
          l && (r = -r, n = Math.floor(-r / 360));
          const d = Math.max(Math.min(t.progress, 1), -1);
          let m = 0,
            f = 0,
            g = 0;
          s % 4 == 0 ? (m = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (m = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (m = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (m = -o, g = 3 * o + 4 * o * n), l && (m = -m), p || (f = m, m = 0);
          const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0}deg) translate3d(${m}px, ${f}px, ${g}px)`;
          d <= 1 && d > -1 && (h = 90 * s + 90 * d, l && (h = 90 * -s - 90 * d)), t.style.transform = v, c.slideShadows && i(t, d, p);
        }
        if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, c.shadow) if (p) m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;else {
          const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
            s = c.shadowScale,
            a = c.shadowScale / t,
            i = c.shadowOffset;
          m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`;
        }
        const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
        s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`);
      },
      setTransition: e => {
        const {
          el: s,
          slides: a
        } = t;
        if (a.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
          const t = s.querySelector(".swiper-cube-shadow");
          t && (t.style.transitionDuration = `${e}ms`);
        }
      },
      recreateShadows: () => {
        const e = t.isHorizontal();
        t.slides.forEach(t => {
          const s = Math.max(Math.min(t.progress, 1), -1);
          i(t, s, e);
        });
      },
      getEffectParams: () => t.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    });
    const i = (e, s, a) => {
      let i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
        r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
      i || (i = ce(0, e, t.isHorizontal() ? "left" : "top")), r || (r = ce(0, e, t.isHorizontal() ? "right" : "bottom")), i && (i.style.opacity = Math.max(-s, 0)), r && (r.style.opacity = Math.max(s, 0));
    };
    le({
      effect: "flip",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            rtlTranslate: s
          } = t,
          a = t.params.flipEffect;
        for (let r = 0; r < e.length; r += 1) {
          const n = e[r];
          let l = n.progress;
          t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
          const o = n.swiperSlideOffset;
          let d = -180 * l,
            c = 0,
            p = t.params.cssMode ? -o - t.translate : -o,
            u = 0;
          t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l);
          const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
          oe(0, n).style.transform = m;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), de({
          swiper: t,
          duration: e,
          transformElements: s
        });
      },
      recreateShadows: () => {
        t.params.flipEffect;
        t.slides.forEach(e => {
          let s = e.progress;
          t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s);
        });
      },
      getEffectParams: () => t.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    }), le({
      effect: "coverflow",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            width: e,
            height: s,
            slides: a,
            slidesSizesGrid: i
          } = t,
          r = t.params.coverflowEffect,
          n = t.isHorizontal(),
          l = t.translate,
          o = n ? e / 2 - l : s / 2 - l,
          d = n ? r.rotate : -r.rotate,
          c = r.depth;
        for (let e = 0, t = a.length; e < t; e += 1) {
          const t = a[e],
            s = i[e],
            l = (o - t.swiperSlideOffset - s / 2) / s,
            p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
          let u = n ? d * p : 0,
            m = n ? 0 : d * p,
            h = -c * Math.abs(p),
            f = r.stretch;
          "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
          let g = n ? 0 : f * p,
            v = n ? f * p : 0,
            w = 1 - (1 - r.scale) * Math.abs(p);
          Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0), Math.abs(w) < .001 && (w = 0);
          const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
          if (oe(0, t).style.transform = b, t.style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
            let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top"),
              s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
            e || (e = ce(0, t, n ? "left" : "top")), s || (s = ce(0, t, n ? "right" : "bottom")), e && (e.style.opacity = p > 0 ? p : 0), s && (s.style.opacity = -p > 0 ? -p : 0);
          }
        }
      },
      setTransition: e => {
        t.slides.map(e => h(e)).forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const i = e => "string" == typeof e ? e : `${e}px`;
    le({
      effect: "creative",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            wrapperEl: s,
            slidesSizesGrid: a
          } = t,
          r = t.params.creativeEffect,
          {
            progressMultiplier: n
          } = r,
          l = t.params.centeredSlides;
        if (l) {
          const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
          s.style.transform = `translateX(calc(50% - ${e}px))`;
        }
        for (let s = 0; s < e.length; s += 1) {
          const a = e[s],
            o = a.progress,
            d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
          let c = d;
          l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
          const p = a.swiperSlideOffset,
            u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
            m = [0, 0, 0];
          let h = !1;
          t.isHorizontal() || (u[1] = u[0], u[0] = 0);
          let f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach((e, t) => {
            u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
          }), m.forEach((e, t) => {
            m[t] = f.rotate[t] * Math.abs(d * n);
          }), a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
          const g = u.join(", "),
            v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
            w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
            b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
            y = `translate3d(${g}) ${v} ${w}`;
          if (h && f.shadow || !h) {
            let e = a.querySelector(".swiper-slide-shadow");
            if (!e && f.shadow && (e = ce(0, a)), e) {
              const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
              e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
            }
          }
          const E = oe(0, a);
          E.style.transform = y, E.style.opacity = b, f.origin && (E.style.transformOrigin = f.origin);
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), de({
          swiper: t,
          duration: e,
          transformElements: s,
          allSlides: !0
        });
      },
      perspective: () => t.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }, function (e) {
    let {
      swiper: t,
      extendParams: s,
      on: a
    } = e;
    s({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }), le({
      effect: "cards",
      swiper: t,
      on: a,
      setTranslate: () => {
        const {
            slides: e,
            activeIndex: s,
            rtlTranslate: a
          } = t,
          i = t.params.cardsEffect,
          {
            startTranslate: r,
            isTouched: n
          } = t.touchEventsData,
          l = a ? -t.translate : t.translate;
        for (let o = 0; o < e.length; o += 1) {
          const d = e[o],
            c = d.progress,
            p = Math.min(Math.max(c, -4), 4);
          let u = d.swiperSlideOffset;
          t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
          let m = t.params.cssMode ? -u - t.translate : -u,
            h = 0;
          const f = -100 * Math.abs(p);
          let g = 1,
            v = -i.perSlideRotate * p,
            w = i.perSlideOffset - .75 * Math.abs(p);
          const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
            y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
            E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
          if (y || E) {
            const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
            v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%";
          }
          if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
            const e = h;
            h = m, m = e;
          }
          const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
            S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
          if (i.slideShadows) {
            let e = d.querySelector(".swiper-slide-shadow");
            e || (e = ce(0, d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1));
          }
          d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
          oe(0, d).style.transform = S;
        }
      },
      setTransition: e => {
        const s = t.slides.map(e => h(e));
        s.forEach(t => {
          t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach(t => {
            t.style.transitionDuration = `${e}ms`;
          });
        }), de({
          swiper: t,
          duration: e,
          transformElements: s
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      })
    });
  }];
  return J.use(pe), J;
});

/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Swiper 9.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 13, 2023
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(undefined, (function () { 'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */
    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }
    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }
      if (src === void 0) {
        src = {};
      }
      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }
    const ssrDocument = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: ''
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {}
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };
    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }
    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {};
      },
      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }
        return setTimeout(callback, 0);
      },
      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }
        clearTimeout(id);
      }
    };
    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    }
    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return setTimeout(callback, delay);
    }
    function now() {
      return Date.now();
    }
    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;
      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }
      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }
      if (!style) {
        style = el.style;
      }
      return style;
    }
    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }
      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);
      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
        // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
        // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }
      return curTransform || 0;
    }
    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }
    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }
      return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend() {
      const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];
      for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    }
    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
      let {
        swiper,
        targetPosition,
        side
      } = _ref;
      const window = getWindow();
      const startPosition = -swiper.translate;
      let startTime = null;
      let time;
      const duration = swiper.params.speed;
      swiper.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';
      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };
      const animate = () => {
        time = new Date().getTime();
        if (startTime === null) {
          startTime = time;
        }
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };
      animate();
    }
    function getSlideTransformEl(slideEl) {
      return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowEl && slideEl.shadowEl.querySelector('.swiper-slide-transform') || slideEl;
    }
    function elementChildren(element, selector) {
      if (selector === void 0) {
        selector = '';
      }
      return [...element.children].filter(el => el.matches(selector));
    }
    function createElement(tag, classes) {
      if (classes === void 0) {
        classes = [];
      }
      const el = document.createElement(tag);
      el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
      return el;
    }
    function elementOffset(el) {
      const window = getWindow();
      const document = getDocument();
      const box = el.getBoundingClientRect();
      const body = document.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === window ? window.scrollY : el.scrollTop;
      const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }
    function elementPrevAll(el, selector) {
      const prevEls = [];
      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
          if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
      }
      return prevEls;
    }
    function elementNextAll(el, selector) {
      const nextEls = [];
      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
          if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
      }
      return nextEls;
    }
    function elementStyle(el, prop) {
      const window = getWindow();
      return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function elementIndex(el) {
      let child = el;
      let i;
      if (child) {
        i = 0;
        // eslint-disable-next-line
        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }
        return i;
      }
      return undefined;
    }
    function elementParents(el, selector) {
      const parents = []; // eslint-disable-line
      let parent = el.parentElement; // eslint-disable-line
      while (parent) {
        if (selector) {
          if (parent.matches(selector)) parents.push(parent);
        } else {
          parents.push(parent);
        }
        parent = parent.parentElement;
      }
      return parents;
    }
    function elementTransitionEnd(el, callback) {
      function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener('transitionend', fireCallBack);
      }
      if (callback) {
        el.addEventListener('transitionend', fireCallBack);
      }
    }
    function elementOuterSize(el, size, includeMargins) {
      const window = getWindow();
      if (includeMargins) {
        return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
      }
      return el.offsetWidth;
    }

    let support;
    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
      };
    }
    function getSupport() {
      if (!support) {
        support = calcSupport();
      }
      return support;
    }

    let deviceCached;
    function calcDevice(_temp) {
      let {
        userAgent
      } = _temp === void 0 ? {} : _temp;
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel';

      // iPadOs 13 fix
      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      }

      // Android
      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }
      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      }

      // Export object
      return device;
    }
    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }
      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }
      return deviceCached;
    }

    let browser;
    function calcBrowser() {
      const window = getWindow();
      let needPerspectiveFix = false;
      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }
      if (isSafari()) {
        const ua = String(window.navigator.userAgent);
        if (ua.includes('Version/')) {
          const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
          needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
      }
      return {
        isSafari: needPerspectiveFix || isSafari(),
        needPerspectiveFix,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }
    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }
      return browser;
    }

    function Resize(_ref) {
      let {
        swiper,
        on,
        emit
      } = _ref;
      const window = getWindow();
      let observer = null;
      let animationFrame = null;
      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
      };
      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver(entries => {
          animationFrame = window.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
              let {
                contentBoxSize,
                contentRect,
                target
              } = _ref2;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper.el);
      };
      const removeObserver = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }
        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el);
          observer = null;
        }
      };
      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
      };
      on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }

    function Observer(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const observers = [];
      const window = getWindow();
      const attach = function (target, options) {
        if (options === void 0) {
          options = {};
        }
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (swiper.__preventObserver__) return;
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }
          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };
      const init = () => {
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
          const containerParents = elementParents(swiper.el);
          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        }
        // Observe container
        attach(swiper.el, {
          childList: swiper.params.observeSlideChildren
        });

        // Observe wrapper
        attach(swiper.wrapperEl, {
          attributes: false
        });
      };
      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };
      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */

    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },
      once(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        function onceHandler() {
          self.off(events, onceHandler);
          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },
      onAny(handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }
        return self;
      },
      offAny(handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }
        return self;
      },
      off(events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(event => {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },
      emit() {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(event => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(eventHandler => {
              eventHandler.apply(context, [event, ...data]);
            });
          }
          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(eventHandler => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };

    function updateSize() {
      const swiper = this;
      let width;
      let height;
      const el = swiper.el;
      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = el.clientWidth;
      }
      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = el.clientHeight;
      }
      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      }

      // Subtract paddings
      width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
      height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      const swiper = this;
      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        }
        // prettier-ignore
        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }
      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }
      const params = swiper.params;
      const {
        wrapperEl,
        slidesEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
      const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;
      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }
      let offsetAfter = params.slidesOffsetAfter;
      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }
      const previousSnapGridLength = swiper.snapGrid.length;
      const previousSlidesGridLength = swiper.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;
      if (typeof swiperSize === 'undefined') {
        return;
      }
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
      }
      swiper.virtualSize = -spaceBetween;

      // reset margins
      slides.forEach(slideEl => {
        if (rtl) {
          slideEl.style.marginLeft = '';
        } else {
          slideEl.style.marginRight = '';
        }
        slideEl.style.marginBottom = '';
        slideEl.style.marginTop = '';
      });

      // reset cssMode offsets
      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
      }
      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
      if (gridEnabled) {
        swiper.grid.initSlides(slidesLength);
      }

      // Calc slides
      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
      }).length > 0;
      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];
        if (gridEnabled) {
          swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        }
        if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel('width')] = ``;
          }
          const slideStyles = getComputedStyle(slide);
          const currentTransform = slide.style.transform;
          const currentWebKitTransform = slide.style.webkitTransform;
          if (currentTransform) {
            slide.style.transform = 'none';
          }
          if (currentWebKitTransform) {
            slide.style.webkitTransform = 'none';
          }
          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
          } else {
            // eslint-disable-next-line
            const width = getDirectionPropertyValue(slideStyles, 'width');
            const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            const boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide;
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }
          if (currentTransform) {
            slide.style.transform = currentTransform;
          }
          if (currentWebKitTransform) {
            slide.style.webkitTransform = currentWebKitTransform;
          }
          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);
          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
          }
        }
        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }
      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
      }
      if (params.setWrapperSize) {
        wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
      }
      if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      }

      // Remove last grid elements depending on width
      if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }
      if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
          const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
          const groupSize = size * params.slidesPerGroup;
          for (let i = 0; i < groups; i += 1) {
            snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
          }
        }
        for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
          if (params.slidesPerGroup === 1) {
            snapGrid.push(snapGrid[snapGrid.length - 1] + size);
          }
          slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
          swiper.virtualSize += size;
        }
      }
      if (snapGrid.length === 0) snapGrid = [0];
      if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex) => {
          if (!params.cssMode || params.loop) return true;
          if (slideIndex === slides.length - 1) {
            return false;
          }
          return true;
        }).forEach(slideEl => {
          slideEl.style[key] = `${spaceBetween}px`;
        });
      }
      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(snap => {
          if (snap <= 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }
      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }
      Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });
      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
      }
      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }
      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }
      if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
      }
      if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
          swiper.el.classList.remove(backFaceHiddenClass);
        }
      }
    }

    function updateAutoHeight(speed) {
      const swiper = this;
      const activeSlides = [];
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let newHeight = 0;
      let i;
      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }
      const getSlideByIndex = index => {
        if (isVirtual) {
          return swiper.slides[swiper.getSlideIndexByData(index)];
        }
        return swiper.slides[index];
      };
      // Find slides currently in view
      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          (swiper.visibleSlides || []).forEach(slide => {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      }

      // Find new height from highest slide in view
      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      }

      // Update Height
      if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }

    function updateSlidesOffset() {
      const swiper = this;
      const slides = swiper.slides;
      // eslint-disable-next-line
      const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }
      const swiper = this;
      const params = swiper.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      let offsetCenter = -translate;
      if (rtl) offsetCenter = translate;

      // Visible Slides
      slides.forEach(slideEl => {
        slideEl.classList.remove(params.slideVisibleClass);
      });
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];
      let spaceBetween = params.spaceBetween;
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
      } else if (typeof spaceBetween === 'string') {
        spaceBetween = parseFloat(spaceBetween);
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides[i].classList.add(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }
    }

    function updateProgress(translate) {
      const swiper = this;
      if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }
      const params = swiper.params;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd,
        progressLoop
      } = swiper;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;
      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
      }
      if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) {
          progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
        } else {
          progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        }
        if (progressLoop > 1) progressLoop -= 1;
      }
      Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }
      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }
      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }
      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      const swiper = this;
      const {
        slides,
        params,
        slidesEl,
        activeIndex
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      const getFilteredSlide = selector => {
        return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
      };
      slides.forEach(slideEl => {
        slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
      });
      let activeSlide;
      if (isVirtual) {
        if (params.loop) {
          let slideIndex = activeIndex - swiper.virtual.slidesBefore;
          if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
          if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
          activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
        } else {
          activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
        }
      } else {
        activeSlide = slides[activeIndex];
      }
      if (activeSlide) {
        // Active classes
        activeSlide.classList.add(params.slideActiveClass);

        // Next Slide
        let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        // Prev Slide
        let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
      swiper.emitSlidesClasses();
    }

    const processLazyPreloader = (swiper, imageEl) => {
      if (!swiper || swiper.destroyed || !swiper.params) return;
      const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
      const slideEl = imageEl.closest(slideSelector());
      if (slideEl) {
        const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (lazyEl) lazyEl.remove();
      }
    };
    const unlazy = (swiper, index) => {
      if (!swiper.slides[index]) return;
      const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
      if (imageEl) imageEl.removeAttribute('loading');
    };
    const preload = swiper => {
      if (!swiper || swiper.destroyed || !swiper.params) return;
      let amount = swiper.params.lazyPreloadPrevNext;
      const len = swiper.slides.length;
      if (!len || !amount || amount < 0) return;
      amount = Math.min(amount, len);
      const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
      const activeIndex = swiper.activeIndex;
      if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [activeColumn - amount];
        preloadColumns.push(...Array.from({
          length: amount
        }).map((_, i) => {
          return activeColumn + slidesPerView + i;
        }));
        swiper.slides.forEach((slideEl, i) => {
          if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
      }
      const slideIndexLastInView = activeIndex + slidesPerView - 1;
      if (swiper.params.rewind || swiper.params.loop) {
        for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
          const realIndex = (i % len + len) % len;
          if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
        }
      } else {
        for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
          if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
            unlazy(swiper, i);
          }
        }
      }
    };

    function getActiveIndexByTranslate(swiper) {
      const {
        slidesGrid,
        params
      } = swiper;
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      let activeIndex;
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
      return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
      const swiper = this;
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      const {
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper;
      let activeIndex = newActiveIndex;
      let snapIndex;
      const getVirtualRealIndex = aIndex => {
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) {
          realIndex = swiper.virtual.slides.length + realIndex;
        }
        if (realIndex >= swiper.virtual.slides.length) {
          realIndex -= swiper.virtual.slides.length;
        }
        return realIndex;
      };
      if (typeof activeIndex === 'undefined') {
        activeIndex = getActiveIndexByTranslate(swiper);
      }
      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
          swiper.realIndex = getVirtualRealIndex(activeIndex);
        }
        return;
      }
      // Get real index
      let realIndex;
      if (swiper.virtual && params.virtual.enabled && params.loop) {
        realIndex = getVirtualRealIndex(activeIndex);
      } else if (swiper.slides[activeIndex]) {
        realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
      } else {
        realIndex = activeIndex;
      }
      Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      if (swiper.initialized) {
        preload(swiper);
      }
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      const swiper = this;
      const params = swiper.params;
      const slide = e.closest(`.${params.slideClass}, swiper-slide`);
      let slideFound = false;
      let slideIndex;
      if (slide) {
        for (let i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }
      if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }
      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }
      const swiper = this;
      const {
        params,
        rtlTranslate: rtl,
        translate,
        wrapperEl
      } = swiper;
      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }
      if (params.cssMode) {
        return translate;
      }
      let currentTranslate = getTranslate(wrapperEl, axis);
      currentTranslate += swiper.cssOverflowAdjustment();
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      const swiper = this;
      const {
        rtlTranslate: rtl,
        params,
        wrapperEl,
        progress
      } = swiper;
      let x = 0;
      let y = 0;
      const z = 0;
      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }
      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y;
      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) {
          x -= swiper.cssOverflowAdjustment();
        } else {
          y -= swiper.cssOverflowAdjustment();
        }
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      }

      // Check if we need to update progress
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }
      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }
      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      if (translateBounds === void 0) {
        translateBounds = true;
      }
      const swiper = this;
      const {
        params,
        wrapperEl
      } = swiper;
      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }
      const minTranslate = swiper.minTranslate();
      const maxTranslate = swiper.maxTranslate();
      let newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

      // Update progress
      swiper.updateProgress(newTranslate);
      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top'
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth'
          });
        }
        return true;
      }
      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
          swiper.animating = true;
          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;
              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }
          swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        }
      }
      return true;
    }

    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };

    function setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      }
      swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
      let {
        swiper,
        runCallbacks,
        direction,
        step
      } = _ref;
      const {
        activeIndex,
        previousIndex
      } = swiper;
      let dir = direction;
      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }
      swiper.emit(`transition${step}`);
      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit(`slideResetTransition${step}`);
          return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') {
          swiper.emit(`slideNextTransition${step}`);
        } else {
          swiper.emit(`slidePrevTransition${step}`);
        }
      }
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      const swiper = this;
      const {
        params
      } = swiper;
      if (params.cssMode) return;
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
      });
    }

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      const swiper = this;
      const {
        params
      } = swiper;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
      });
    }

    var transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      if (typeof index === 'string') {
        index = parseInt(index, 10);
      }
      const swiper = this;
      let slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper;
      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }
      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
      const translate = -snapGrid[snapIndex];
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      }
      // Directions locks
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
          return false;
        }
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) {
            return false;
          }
        }
      }
      if (slideIndex !== (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      // Update progress
      swiper.updateProgress(translate);
      let direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

      // Update Index
      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        // Update Height
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }
        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
      }
      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          if (isVirtual) {
            swiper.wrapperEl.style.scrollSnapType = 'none';
            swiper._immediateVirtual = true;
          }
          if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
            swiper._cssModeVirtualInitialSet = true;
            requestAnimationFrame(() => {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            });
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper.wrapperEl.style.scrollSnapType = '';
              swiper._immediateVirtual = false;
            });
          }
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: t,
              side: isH ? 'left' : 'top'
            });
            return true;
          }
          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth'
          });
        }
        return true;
      }
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (speed === 0) {
        swiper.transitionEnd(runCallbacks, direction);
      } else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      }
      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      if (typeof index === 'string') {
        const indexAsNumber = parseInt(index, 10);
        index = indexAsNumber;
      }
      const swiper = this;
      let newIndex = index;
      if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          // eslint-disable-next-line
          newIndex = newIndex + swiper.virtual.slidesBefore;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      const swiper = this;
      const {
        enabled,
        params,
        animating
      } = swiper;
      if (!enabled) return swiper;
      let perGroup = params.slidesPerGroup;
      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
      }
      const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
          direction: 'next'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
      }
      if (params.rewind && swiper.isEnd) {
        return swiper.slideTo(0, speed, runCallbacks, internal);
      }
      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      const swiper = this;
      const {
        params,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled,
        animating
      } = swiper;
      if (!enabled) return swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
          direction: 'prev'
        });
        // eslint-disable-next-line
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
      }
      const translate = rtlTranslate ? swiper.translate : -swiper.translate;
      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }
      const normalizedTranslate = normalize(translate);
      const normalizedSnapGrid = snapGrid.map(val => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
      if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            // prevSnap = snap;
            prevSnapIndex = snapIndex;
          }
        });
        if (typeof prevSnapIndex !== 'undefined') {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }
      let prevIndex = 0;
      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }
      if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
      }
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      const swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
      if (threshold === void 0) {
        threshold = 0.5;
      }
      const swiper = this;
      let index = swiper.activeIndex;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }
      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      const swiper = this;
      const {
        params,
        slidesEl
      } = swiper;
      const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper.clickedIndex;
      let realIndex;
      const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
            nextTick(() => {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };

    function loopCreate(slideRealIndex) {
      const swiper = this;
      const {
        params,
        slidesEl
      } = swiper;
      if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute('data-swiper-slide-index', index);
      });
      swiper.loopFix({
        slideRealIndex,
        direction: params.centeredSlides ? undefined : 'next'
      });
    }

    function loopFix(_temp) {
      let {
        slideRealIndex,
        slideTo = true,
        direction,
        setTranslate,
        activeSlideIndex,
        byController,
        byMousewheel
      } = _temp === void 0 ? {} : _temp;
      const swiper = this;
      if (!swiper.params.loop) return;
      swiper.emit('beforeLoopFix');
      const {
        slides,
        allowSlidePrev,
        allowSlideNext,
        slidesEl,
        params
      } = swiper;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      if (swiper.virtual && params.virtual.enabled) {
        if (slideTo) {
          if (!params.centeredSlides && swiper.snapIndex === 0) {
            swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
          } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
            swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
          } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
            swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
          }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        swiper.emit('loopFix');
        return;
      }
      const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
      let loopedSlides = params.loopedSlides || slidesPerView;
      if (loopedSlides % params.slidesPerGroup !== 0) {
        loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
      }
      swiper.loopedSlides = loopedSlides;
      const prependSlidesIndexes = [];
      const appendSlidesIndexes = [];
      let activeIndex = swiper.activeIndex;
      if (typeof activeSlideIndex === 'undefined') {
        activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
      } else {
        activeIndex = activeSlideIndex;
      }
      const isNext = direction === 'next' || !direction;
      const isPrev = direction === 'prev' || !direction;
      let slidesPrepended = 0;
      let slidesAppended = 0;
      // prepend last slides before start
      if (activeSlideIndex < loopedSlides) {
        slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
        for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
          const index = i - Math.floor(i / slides.length) * slides.length;
          prependSlidesIndexes.push(slides.length - index - 1);
        }
      } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
        slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
        for (let i = 0; i < slidesAppended; i += 1) {
          const index = i - Math.floor(i / slides.length) * slides.length;
          appendSlidesIndexes.push(index);
        }
      }
      if (isPrev) {
        prependSlidesIndexes.forEach(index => {
          swiper.slides[index].swiperLoopMoveDOM = true;
          slidesEl.prepend(swiper.slides[index]);
          swiper.slides[index].swiperLoopMoveDOM = false;
        });
      }
      if (isNext) {
        appendSlidesIndexes.forEach(index => {
          swiper.slides[index].swiperLoopMoveDOM = true;
          slidesEl.append(swiper.slides[index]);
          swiper.slides[index].swiperLoopMoveDOM = false;
        });
      }
      swiper.recalcSlides();
      if (params.slidesPerView === 'auto') {
        swiper.updateSlides();
      }
      if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
      }
      if (slideTo) {
        if (prependSlidesIndexes.length > 0 && isPrev) {
          if (typeof slideRealIndex === 'undefined') {
            const currentSlideTranslate = swiper.slidesGrid[activeIndex];
            const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) {
              swiper.setTranslate(swiper.translate - diff);
            } else {
              swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
              if (setTranslate) {
                swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
              }
            }
          } else {
            if (setTranslate) {
              swiper.slideToLoop(slideRealIndex, 0, false, true);
            }
          }
        } else if (appendSlidesIndexes.length > 0 && isNext) {
          if (typeof slideRealIndex === 'undefined') {
            const currentSlideTranslate = swiper.slidesGrid[activeIndex];
            const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
            const diff = newSlideTranslate - currentSlideTranslate;
            if (byMousewheel) {
              swiper.setTranslate(swiper.translate - diff);
            } else {
              swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
              if (setTranslate) {
                swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
              }
            }
          } else {
            swiper.slideToLoop(slideRealIndex, 0, false, true);
          }
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      if (swiper.controller && swiper.controller.control && !byController) {
        const loopParams = {
          slideRealIndex,
          slideTo: false,
          direction,
          setTranslate,
          activeSlideIndex,
          byController: true
        };
        if (Array.isArray(swiper.controller.control)) {
          swiper.controller.control.forEach(c => {
            if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
          });
        } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
          swiper.controller.control.loopFix(loopParams);
        }
      }
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      const swiper = this;
      const {
        params,
        slidesEl
      } = swiper;
      if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
      swiper.recalcSlides();
      const newSlidesOrder = [];
      swiper.slides.forEach(slideEl => {
        const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
        newSlidesOrder[index] = slideEl;
      });
      swiper.slides.forEach(slideEl => {
        slideEl.removeAttribute('data-swiper-slide-index');
      });
      newSlidesOrder.forEach(slideEl => {
        slidesEl.append(slideEl);
      });
      swiper.recalcSlides();
      swiper.slideTo(swiper.realIndex, 0);
    }

    var loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };

    function setGrabCursor(moving) {
      const swiper = this;
      if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
      if (swiper.isElement) {
        swiper.__preventObserver__ = true;
      }
      el.style.cursor = 'move';
      el.style.cursor = moving ? 'grabbing' : 'grab';
      if (swiper.isElement) {
        requestAnimationFrame(() => {
          swiper.__preventObserver__ = false;
        });
      }
    }

    function unsetGrabCursor() {
      const swiper = this;
      if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }
      if (swiper.isElement) {
        swiper.__preventObserver__ = true;
      }
      swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
      if (swiper.isElement) {
        requestAnimationFrame(() => {
          swiper.__preventObserver__ = false;
        });
      }
    }

    var grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };

    // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }
      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) {
          return null;
        }
        return found || __closestFrom(el.getRootNode().host);
      }
      return __closestFrom(base);
    }
    function onTouchStart(event) {
      const swiper = this;
      const document = getDocument();
      const window = getWindow();
      const data = swiper.touchEventsData;
      data.evCache.push(event);
      const {
        params,
        touches,
        enabled
      } = swiper;
      if (!enabled) return;
      if (!params.simulateTouch && event.pointerType === 'mouse') return;
      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }
      if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
      }
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      let targetEl = e.target;
      if (params.touchEventsTarget === 'wrapper') {
        if (!swiper.wrapperEl.contains(targetEl)) return;
      }
      if ('which' in e && e.which === 3) return;
      if ('button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return;

      // change target el for shadow root component
      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
      // eslint-disable-next-line
      const eventPath = event.composedPath ? event.composedPath() : event.path;
      if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
        targetEl = eventPath[0];
      }
      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot);

      // use closestElement for shadow root element to get the actual closest for nested shadow root element
      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
        swiper.allowClick = true;
        return;
      }
      if (params.swipeHandler) {
        if (!targetEl.closest(params.swipeHandler)) return;
      }
      touches.currentX = e.pageX;
      touches.currentY = e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY;

      // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }
      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;
      let preventDefault = true;
      if (targetEl.matches(data.focusableElements)) {
        preventDefault = false;
        if (targetEl.nodeName === 'SELECT') {
          data.isTouched = false;
        }
      }
      if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
        document.activeElement.blur();
      }
      const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
        e.preventDefault();
      }
      if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
        swiper.freeMode.onTouchStart();
      }
      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      const document = getDocument();
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper;
      if (!enabled) return;
      if (!params.simulateTouch && event.pointerType === 'mouse') return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }
        return;
      }
      const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
      const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
      const pageX = targetTouch.pageX;
      const pageY = targetTouch.pageY;
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }
      if (!swiper.allowTouchMove) {
        if (!e.target.matches(data.focusableElements)) {
          swiper.allowClick = false;
        }
        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            prevX: swiper.touches.currentX,
            prevY: swiper.touches.currentY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }
        return;
      }
      if (params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }
      if (document.activeElement) {
        if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }
      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }
      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
      if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }
      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }
      if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
        data.isTouched = false;
        return;
      }
      if (!data.startMoving) {
        return;
      }
      swiper.allowClick = false;
      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }
      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }
      let diff = swiper.isHorizontal() ? diffX : diffY;
      let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
      if (params.oneWayMovement) {
        diff = Math.abs(diff) * (rtl ? 1 : -1);
        touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
      }
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) {
        diff = -diff;
        touchesDiff = -touchesDiff;
      }
      const prevTouchesDirection = swiper.touchesDirection;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
      const isLoop = swiper.params.loop && !params.cssMode;
      if (!data.isMoved) {
        if (isLoop) {
          swiper.loopFix({
            direction: swiper.swipeDirection
          });
        }
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) {
          const evt = new window.CustomEvent('transitionend', {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        }
        data.allowMomentumBounce = false;
        // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }
        swiper.emit('sliderFirstMove', e);
      }
      let loopFixed;
      if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
        // need another loop fix
        swiper.loopFix({
          direction: swiper.swipeDirection,
          setTranslate: true
        });
        loopFixed = true;
      }
      swiper.emit('sliderMove', e);
      data.isMoved = true;
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;
      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }
      if (diff > 0) {
        if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
          swiper.loopFix({
            direction: 'prev',
            setTranslate: true,
            activeSlideIndex: 0
          });
        }
        if (data.currentTranslate > swiper.minTranslate()) {
          disableParentSwiper = false;
          if (params.resistance) {
            data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
          }
        }
      } else if (diff < 0) {
        if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
          swiper.loopFix({
            direction: 'next',
            setTranslate: true,
            activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
          });
        }
        if (data.currentTranslate < swiper.maxTranslate()) {
          disableParentSwiper = false;
          if (params.resistance) {
            data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
          }
        }
      }
      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      }

      // Directions locks
      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      }

      // Threshold
      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }
      if (!params.followFinger || params.cssMode) return;

      // Update active index in free mode
      if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
      }
      // Update progress
      swiper.updateProgress(data.currentTranslate);
      // Update translate
      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      const swiper = this;
      const data = swiper.touchEventsData;
      const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
      if (pointerIndex >= 0) {
        data.evCache.splice(pointerIndex, 1);
      }
      if (['pointercancel', 'pointerout', 'pointerleave'].includes(event.type)) {
        const proceed = event.type === 'pointercancel' && (swiper.browser.isSafari || swiper.browser.isWebView);
        if (!proceed) {
          return;
        }
      }
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper;
      if (!enabled) return;
      if (!params.simulateTouch && event.pointerType === 'mouse') return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }
      data.allowTouchCallbacks = false;
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      // Return Grab Cursor
      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      }

      // Time diff
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;

      // Tap, doubleTap, Click
      if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }
      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper.destroyed) swiper.allowClick = true;
      });
      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;
      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }
      if (params.cssMode) {
        return;
      }
      if (params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
          currentPos
        });
        return;
      }

      // Find current slide
      let stopIndex = 0;
      let groupSize = swiper.slidesSizesGrid[0];
      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }
      let rewindFirstIndex = null;
      let rewindLastIndex = null;
      if (params.rewind) {
        if (swiper.isBeginning) {
          rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        } else if (swiper.isEnd) {
          rewindFirstIndex = 0;
        }
      }
      // Find current slide size
      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper.slideTo(stopIndex + increment);
          } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
            swiper.slideTo(rewindLastIndex);
          } else {
            swiper.slideTo(stopIndex);
          }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
          }
          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      const swiper = this;
      const {
        params,
        el
      } = swiper;
      if (el && el.offsetWidth === 0) return;

      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Save locks
      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper;
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      // Disable locks on resize
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();
      const isVirtualLoop = isVirtual && params.loop;
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        if (swiper.params.loop && !isVirtual) {
          swiper.slideToLoop(swiper.realIndex, 0, false, true);
        } else {
          swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
      }
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(() => {
          if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.resume();
          }
        }, 500);
      }
      // Return locks after resize
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      const swiper = this;
      if (!swiper.enabled) return;
      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      const swiper = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;
      if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      }
      // eslint-disable-next-line
      if (swiper.translate === 0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }
      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }
      swiper.emit('setTranslate', swiper.translate, false);
    }

    function onLoad(e) {
      const swiper = this;
      processLazyPreloader(swiper, e.target);
      if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
        return;
      }
      swiper.update();
    }

    let dummyEventAttached = false;
    function dummyEventListener() {}
    const events = (swiper, method) => {
      const document = getDocument();
      const {
        params,
        el,
        wrapperEl,
        device
      } = swiper;
      const capture = !!params.nested;
      const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      const swiperMethod = method;

      // Touch Events
      el[domMethod]('pointerdown', swiper.onTouchStart, {
        passive: false
      });
      document[domMethod]('pointermove', swiper.onTouchMove, {
        passive: false,
        capture
      });
      document[domMethod]('pointerup', swiper.onTouchEnd, {
        passive: true
      });
      document[domMethod]('pointercancel', swiper.onTouchEnd, {
        passive: true
      });
      document[domMethod]('pointerout', swiper.onTouchEnd, {
        passive: true
      });
      document[domMethod]('pointerleave', swiper.onTouchEnd, {
        passive: true
      });

      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
      }
      if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
      }

      // Resize handler
      if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper[swiperMethod]('observerUpdate', onResize, true);
      }

      // Images loader
      el[domMethod]('load', swiper.onLoad, {
        capture: true
      });
    };
    function attachEvents() {
      const swiper = this;
      const document = getDocument();
      const {
        params
      } = swiper;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }
      swiper.onClick = onClick.bind(swiper);
      swiper.onLoad = onLoad.bind(swiper);
      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
      events(swiper, 'on');
    }
    function detachEvents() {
      const swiper = this;
      events(swiper, 'off');
    }
    var events$1 = {
      attachEvents,
      detachEvents
    };

    const isGridEnabled = (swiper, params) => {
      return swiper.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
      const swiper = this;
      const {
        realIndex,
        initialized,
        params,
        el
      } = swiper;
      const breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

      // Get breakpoint for window width and update parameters
      const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = isGridEnabled(swiper, params);
      const isMultiRow = isGridEnabled(swiper, breakpointParams);
      const wasEnabled = params.enabled;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
          el.classList.add(`${params.containerModifierClass}grid-column`);
        }
        swiper.emitContainerClasses();
      }

      // Toggle navigation, pagination, scrollbar
      ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
        if (typeof breakpointParams[prop] === 'undefined') return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) {
          swiper[prop].disable();
        }
        if (!wasModuleEnabled && isModuleEnabled) {
          swiper[prop].enable();
        }
      });
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
      if (directionChanged && initialized) {
        swiper.changeDirection();
      }
      extend(swiper.params, breakpointParams);
      const isEnabled = swiper.params.enabled;
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });
      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }
      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);
      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      }
      swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }
      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      let breakpoint = false;
      const window = getWindow();
      const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints).map(point => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }
        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];
        if (base === 'window') {
          if (window.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }
      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint,
      getBreakpoint
    };

    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach(item => {
        if (typeof item === 'object') {
          Object.keys(item).forEach(classNames => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }
    function addClasses() {
      const swiper = this;
      const {
        classNames,
        params,
        rtl,
        el,
        device
      } = swiper;
      // prettier-ignore
      const suffixes = prepareClasses(['initialized', params.direction, {
        'free-mode': swiper.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }, {
        'watch-progress': params.watchSlidesProgress
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      el.classList.add(...classNames);
      swiper.emitContainerClasses();
    }

    function removeClasses() {
      const swiper = this;
      const {
        el,
        classNames
      } = swiper;
      el.classList.remove(...classNames);
      swiper.emitContainerClasses();
    }

    var classes = {
      addClasses,
      removeClasses
    };

    function checkOverflow() {
      const swiper = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper;
      const {
        slidesOffsetBefore
      } = params;
      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }
      if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
      }
      if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
      }
      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
      }
      if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
      }
    }
    var checkOverflow$1 = {
      checkOverflow
    };

    var defaults = {
      init: true,
      direction: 'horizontal',
      oneWayMovement: false,
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 5,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // loop
      loop: false,
      loopedSlides: null,
      loopPreventsSliding: true,
      // rewind
      rewind: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      // NS
      containerModifierClass: 'swiper-',
      // NEW
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj) {
        if (obj === void 0) {
          obj = {};
        }
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
          extend(allModulesParams, obj);
          return;
        }
        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          extend(allModulesParams, obj);
          return;
        }
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
        extend(allModulesParams, obj);
      };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes
    };
    const extendedDefaults = {};
    class Swiper {
      constructor() {
        let el;
        let params;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          [el, params] = args;
        }
        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;
        const document = getDocument();
        if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
          const swipers = [];
          document.querySelectorAll(params.el).forEach(containerEl => {
            const newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          // eslint-disable-next-line no-constructor-return
          return swipers;
        }

        // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...swiper.__modules__];
        if (params.modules && Array.isArray(params.modules)) {
          swiper.modules.push(...params.modules);
        }
        const allModulesParams = {};
        swiper.modules.forEach(mod => {
          mod({
            params,
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper)
          });
        });

        // Extend defaults with modules params
        const swiperParams = extend({}, defaults, allModulesParams);

        // Extend defaults with passed params
        swiper.params = extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({}, swiper.params);
        swiper.passedParams = extend({}, params);

        // add event listeners
        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(eventName => {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }
        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        }

        // Extend Swiper
        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          cssOverflowAdjustment() {
            // Returns 0 unless `translate` is > 2**23
            // Should be subtracted from css values to prevent overflow
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: 0,
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            startMoving: undefined,
            evCache: []
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper.emit('_swiper');

        // Init
        if (swiper.params.init) {
          swiper.init();
        }

        // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
      }
      getSlideIndex(slideEl) {
        const {
          slidesEl,
          params
        } = this;
        const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = elementIndex(slides[0]);
        return elementIndex(slideEl) - firstSlideIndex;
      }
      getSlideIndexByData(index) {
        return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
      }
      recalcSlides() {
        const swiper = this;
        const {
          slidesEl,
          params
        } = swiper;
        swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      }
      enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
        swiper.emit('enable');
      }
      disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }
        swiper.emit('disable');
      }
      setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter(className => {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }
      getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter(className => {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }
      emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach(slideEl => {
          const classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }
      slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }
        if (exact === void 0) {
          exact = false;
        }
        const swiper = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
          let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
          let breakLoop;
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
              if (slideInView) {
                spv += 1;
              }
            }
          }
        }
        return spv;
      }
      update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const {
          snapGrid,
          params
        } = swiper;
        // Breakpoints
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
        [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          }
        });
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
          const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
        let translated;
        if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
          setTranslate();
          if (params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
            const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
            translated = swiper.slideTo(slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
          if (!translated) {
            setTranslate();
          }
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
        swiper.emit('update');
      }
      changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
        swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.forEach(slideEl => {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }
      changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
          swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = 'rtl';
        } else {
          swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = 'ltr';
        }
        swiper.update();
      }
      mount(element) {
        const swiper = this;
        if (swiper.mounted) return true;

        // Find el
        let el = element || swiper.params.el;
        if (typeof el === 'string') {
          el = document.querySelector(el);
        }
        if (!el) {
          return false;
        }
        el.swiper = swiper;
        if (el.shadowEl) {
          swiper.isElement = true;
        }
        const getWrapperSelector = () => {
          return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = el.shadowRoot.querySelector(getWrapperSelector());
            // Children needs to return slot items
            return res;
          }
          return elementChildren(el, getWrapperSelector())[0];
        };
        // Find Wrapper
        let wrapperEl = getWrapper();
        if (!wrapperEl && swiper.params.createElements) {
          wrapperEl = createElement('div', swiper.params.wrapperClass);
          el.append(wrapperEl);
          elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
            wrapperEl.append(slideEl);
          });
        }
        Object.assign(swiper, {
          el,
          wrapperEl,
          slidesEl: swiper.isElement ? el : wrapperEl,
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
          wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
        });
        return true;
      }
      init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit');

        // Set breakpoint
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        }

        // Add Classes
        swiper.addClasses();

        // Update size
        swiper.updateSize();

        // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }

        // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        // Slide To Initial Slide
        if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
          swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        }

        // Create loop
        if (swiper.params.loop) {
          swiper.loopCreate();
        }

        // Attach events
        swiper.attachEvents();
        [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
          if (imageEl.complete) {
            processLazyPreloader(swiper, imageEl);
          } else {
            imageEl.addEventListener('load', e => {
              processLazyPreloader(swiper, e.target);
            });
          }
        });
        preload(swiper);

        // Init Flag
        swiper.initialized = true;
        preload(swiper);

        // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }
      destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }
        if (cleanStyles === void 0) {
          cleanStyles = true;
        }
        const swiper = this;
        const {
          params,
          el,
          wrapperEl,
          slides
        } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }
        swiper.emit('beforeDestroy');

        // Init Flag
        swiper.initialized = false;

        // Detach events
        swiper.detachEvents();

        // Destroy loop
        if (params.loop) {
          swiper.loopDestroy();
        }

        // Cleanup styles
        if (cleanStyles) {
          swiper.removeClasses();
          el.removeAttribute('style');
          wrapperEl.removeAttribute('style');
          if (slides && slides.length) {
            slides.forEach(slideEl => {
              slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
              slideEl.removeAttribute('style');
              slideEl.removeAttribute('data-swiper-slide-index');
            });
          }
        }
        swiper.emit('destroy');

        // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(eventName => {
          swiper.off(eventName);
        });
        if (deleteInstance !== false) {
          swiper.el.swiper = null;
          deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
      }
      static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }
      static get extendedDefaults() {
        return extendedDefaults;
      }
      static get defaults() {
        return defaults;
      }
      static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
      static use(module) {
        if (Array.isArray(module)) {
          module.forEach(m => Swiper.installModule(m));
          return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
      }
    }
    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      });
      let cssModeTimeout;
      const document = getDocument();
      swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
      };
      const tempDOM = document.createElement('div');
      function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }
        // eslint-disable-next-line
        let slideEl;
        if (params.renderSlide) {
          slideEl = params.renderSlide.call(swiper, slide, index);
          if (typeof slideEl === 'string') {
            tempDOM.innerHTML = slideEl;
            slideEl = tempDOM.children[0];
          }
        } else if (swiper.isElement) {
          slideEl = createElement('swiper-slide');
        } else {
          slideEl = createElement('div', swiper.params.slideClass);
        }
        slideEl.setAttribute('data-swiper-slide-index', index);
        if (!params.renderSlide) {
          slideEl.innerHTML = slide;
        }
        if (params.cache) swiper.virtual.cache[index] = slideEl;
        return slideEl;
      }
      function update(force) {
        const {
          slidesPerView,
          slidesPerGroup,
          centeredSlides,
          loop: isLoop
        } = swiper.params;
        const {
          addSlidesBefore,
          addSlidesAfter
        } = swiper.params.virtual;
        const {
          from: previousFrom,
          to: previousTo,
          slides,
          slidesGrid: previousSlidesGrid,
          offset: previousOffset
        } = swiper.virtual;
        if (!swiper.params.cssMode) {
          swiper.updateActiveIndex();
        }
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
        }
        let from = activeIndex - slidesBefore;
        let to = activeIndex + slidesAfter;
        if (!isLoop) {
          from = Math.max(from, 0);
          to = Math.min(to, slides.length - 1);
        }
        let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        if (isLoop && activeIndex >= slidesBefore) {
          from -= slidesBefore;
          if (!centeredSlides) offset += swiper.slidesGrid[0];
        } else if (isLoop && activeIndex < slidesBefore) {
          from = -slidesBefore;
          if (centeredSlides) offset += swiper.slidesGrid[0];
        }
        Object.assign(swiper.virtual, {
          from,
          to,
          offset,
          slidesGrid: swiper.slidesGrid,
          slidesBefore,
          slidesAfter
        });
        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();
          emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.forEach(slideEl => {
              slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
          }
          swiper.updateProgress();
          emit('virtualUpdate');
          return;
        }
        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset,
            from,
            to,
            slides: function getSlides() {
              const slidesToRender = [];
              for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }
              return slidesToRender;
            }()
          });
          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          } else {
            emit('virtualUpdate');
          }
          return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        const getSlideIndex = index => {
          let slideIndex = index;
          if (index < 0) {
            slideIndex = slides.length + index;
          } else if (slideIndex >= slides.length) {
            // eslint-disable-next-line
            slideIndex = slideIndex - slides.length;
          }
          return slideIndex;
        };
        if (force) {
          swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach(slideEl => {
            slideEl.remove();
          });
        } else {
          for (let i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              const slideIndex = getSlideIndex(i);
              swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach(slideEl => {
                slideEl.remove();
              });
            }
          }
        }
        const loopFrom = isLoop ? -slides.length : 0;
        const loopTo = isLoop ? slides.length * 2 : slides.length;
        for (let i = loopFrom; i < loopTo; i += 1) {
          if (i >= from && i <= to) {
            const slideIndex = getSlideIndex(i);
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(slideIndex);
            } else {
              if (i > previousTo) appendIndexes.push(slideIndex);
              if (i < previousFrom) prependIndexes.push(slideIndex);
            }
          }
        }
        appendIndexes.forEach(index => {
          swiper.slidesEl.append(renderSlide(slides[index], index));
        });
        if (isLoop) {
          for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
            const index = prependIndexes[i];
            swiper.slidesEl.prepend(renderSlide(slides[index], index));
          }
        } else {
          prependIndexes.sort((a, b) => b - a);
          prependIndexes.forEach(index => {
            swiper.slidesEl.prepend(renderSlide(slides[index], index));
          });
        }
        elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
        onRendered();
      }
      function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }
        update(true);
      }
      function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }
          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }
        if (swiper.params.virtual.cache) {
          const cache = swiper.virtual.cache;
          const newCache = {};
          Object.keys(cache).forEach(cachedIndex => {
            const cachedEl = cache[cachedIndex];
            const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
            if (cachedElIndex) {
              cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
            }
            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
          });
          swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
      }
      function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) {
          for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }
          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
      }
      function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }
        update(true);
        swiper.slideTo(0, 0);
      }
      on('beforeInit', () => {
        if (!swiper.params.virtual.enabled) return;
        let domSlidesAssigned;
        if (typeof swiper.passedParams.virtual.slides === 'undefined') {
          const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
          if (slides && slides.length) {
            swiper.virtual.slides = [...slides];
            domSlidesAssigned = true;
            slides.forEach((slideEl, slideIndex) => {
              slideEl.setAttribute('data-swiper-slide-index', slideIndex);
              swiper.virtual.cache[slideIndex] = slideEl;
              slideEl.remove();
            });
          }
        }
        if (!domSlidesAssigned) {
          swiper.virtual.slides = swiper.params.virtual.slides;
        }
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) {
          update();
        }
      });
      on('setTranslate', () => {
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
          clearTimeout(cssModeTimeout);
          cssModeTimeout = setTimeout(() => {
            update();
          }, 100);
        } else {
          update();
        }
      });
      on('init update resize', () => {
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) {
          setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
      });
      Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
      });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      const window = getWindow();
      swiper.keyboard = {
        enabled: false
      };
      extendParams({
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      });
      function handle(event) {
        if (!swiper.enabled) return;
        const {
          rtlTranslate: rtl
        } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40;
        // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          let inView = false;
          // Check that swiper should be inside of visible area of window
          if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
            return undefined;
          }
          const el = swiper.el;
          const swiperWidth = el.clientWidth;
          const swiperHeight = el.clientHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const swiperOffset = elementOffset(el);
          if (rtl) swiperOffset.left -= el.scrollLeft;
          const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
          for (let i = 0; i < swiperCoord.length; i += 1) {
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
              inView = true;
            }
          }
          if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
      }
      function enable() {
        if (swiper.keyboard.enabled) return;
        document.addEventListener('keydown', handle);
        swiper.keyboard.enabled = true;
      }
      function disable() {
        if (!swiper.keyboard.enabled) return;
        document.removeEventListener('keydown', handle);
        swiper.keyboard.enabled = false;
      }
      on('init', () => {
        if (swiper.params.keyboard.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        if (swiper.keyboard.enabled) {
          disable();
        }
      });
      Object.assign(swiper.keyboard, {
        enable,
        disable
      });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: 'swiper-no-mousewheel'
        }
      });
      swiper.mousewheel = {
        enabled: false
      };
      let timeout;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];
      function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY

        // Legacy
        if ('detail' in e) {
          sY = e.detail;
        }
        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }
        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }
        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        }

        // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) {
          pY = e.deltaY;
        }
        if ('deltaX' in e) {
          pX = e.deltaX;
        }
        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        }

        // Fall-back if spin cannot be determined
        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }
        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }
        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }
      function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
      }
      function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
      }
      function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }
        if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        }

        // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          // Return false as a default
          return true;
        }
        // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          emit('scroll', newEvent.raw);
        }
        // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime();
        // Return false as a default
        return false;
      }
      function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
        return false;
      }
      function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;

        // Ignore event if the target or its parents have the swiper-no-mousewheel class
        if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) {
          e.preventDefault();
        }
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        }
        const targetElContainsTarget = targetEl && targetEl.contains(e.target);
        if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
        if (delta === 0) return true;
        if (params.invert) delta = -delta;

        // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

        // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
          // Register the new event in a variable which stores the relevant data
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          };

          // Keep the most recent events
          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent);

          // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.
          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          }

          // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.
          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:

          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = undefined;
            let position = swiper.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper.isBeginning;
            const wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }
            if (swiper.params.loop) {
              swiper.loopFix({
                direction: newEvent.direction < 0 ? 'next' : 'prev',
                byMousewheel: true
              });
            }
            if (swiper.params.freeMode.sticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(timeout);
              timeout = undefined;
              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift(); // only store the last N events
              }

              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);
              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout = nextTick(() => {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                timeout = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            }

            // Emit event
            if (!ignoreWheelEvents) emit('scroll', e);

            // Stop autoplay
            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
            // Return page scroll on edge positions
            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }
      function events(method) {
        let targetEl = swiper.el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
        }
        targetEl[method]('mouseenter', handleMouseEnter);
        targetEl[method]('mouseleave', handleMouseLeave);
        targetEl[method]('wheel', handle);
      }
      function enable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener('wheel', handle);
          return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('addEventListener');
        swiper.mousewheel.enabled = true;
        return true;
      }
      function disable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, handle);
          return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('removeEventListener');
        swiper.mousewheel.enabled = false;
        return true;
      }
      on('init', () => {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          disable();
        }
        if (swiper.params.mousewheel.enabled) enable();
      });
      on('destroy', () => {
        if (swiper.params.cssMode) {
          enable();
        }
        if (swiper.mousewheel.enabled) disable();
      });
      Object.assign(swiper.mousewheel, {
        enable,
        disable
      });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
      if (swiper.params.createElements) {
        Object.keys(checkProps).forEach(key => {
          if (!params[key] && params.auto === true) {
            let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
            if (!element) {
              element = createElement('div', checkProps[key]);
              element.className = checkProps[key];
              swiper.el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
          }
        });
      }
      return params;
    }

    function Navigation(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled'
        }
      });
      swiper.navigation = {
        nextEl: null,
        prevEl: null
      };
      const makeElementsArray = el => {
        if (!Array.isArray(el)) el = [el].filter(e => !!e);
        return el;
      };
      function getEl(el) {
        let res;
        if (el && typeof el === 'string' && swiper.isElement) {
          res = swiper.el.shadowRoot.querySelector(el);
          if (res) return res;
        }
        if (el) {
          if (typeof el === 'string') res = [...document.querySelectorAll(el)];
          if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
            res = swiper.el.querySelector(el);
          }
        }
        if (el && !res) return el;
        // if (Array.isArray(res) && res.length === 1) res = res[0];
        return res;
      }
      function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = makeElementsArray(el);
        el.forEach(subEl => {
          if (subEl) {
            subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
            if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) {
              subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
            }
          }
        });
      }
      function update() {
        // Update Navigation Buttons
        const {
          nextEl,
          prevEl
        } = swiper.navigation;
        if (swiper.params.loop) {
          toggleEl(prevEl, false);
          toggleEl(nextEl, false);
          return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
      }
      function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit('navigationPrev');
      }
      function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit('navigationNext');
      }
      function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
          nextEl,
          prevEl
        });
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const initButton = (el, dir) => {
          if (el) {
            el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
          }
          if (!swiper.enabled && el) {
            el.classList.add(...params.lockClass.split(' '));
          }
        };
        nextEl.forEach(el => initButton(el, 'next'));
        prevEl.forEach(el => initButton(el, 'prev'));
      }
      function destroy() {
        let {
          nextEl,
          prevEl
        } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const destroyButton = (el, dir) => {
          el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
          el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
        };
        nextEl.forEach(el => destroyButton(el, 'next'));
        prevEl.forEach(el => destroyButton(el, 'prev'));
      }
      on('init', () => {
        if (swiper.params.navigation.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          update();
        }
      });
      on('toEdge fromEdge lock unlock', () => {
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        let {
          nextEl,
          prevEl
        } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.navigation.lockClass));
      });
      on('click', (_s, e) => {
        let {
          nextEl,
          prevEl
        } = swiper.navigation;
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
          if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
          let isHidden;
          if (nextEl.length) {
            isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
          } else if (prevEl.length) {
            isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            emit('navigationShow');
          } else {
            emit('navigationHide');
          }
          [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
        }
      });
      const enable = () => {
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
        init();
        update();
      };
      const disable = () => {
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
        destroy();
      };
      Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }
      return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const pfx = 'swiper-pagination';
      extendParams({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: number => number,
          formatFractionTotal: number => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`,
          paginationDisabledClass: `${pfx}-disabled`
        }
      });
      swiper.pagination = {
        el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;
      const makeElementsArray = el => {
        if (!Array.isArray(el)) el = [el].filter(e => !!e);
        return el;
      };
      function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
      }
      function setSideBullets(bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}`);
          bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
          if (bulletEl) {
            bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
          }
        }
      }
      function onBulletClick(e) {
        const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
        if (!bulletEl) {
          return;
        }
        e.preventDefault();
        const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
          if (swiper.realIndex === index) return;
          const newSlideIndex = swiper.getSlideIndexByData(index);
          const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
          if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
            swiper.loopFix({
              direction: newSlideIndex > currentSlideIndex ? 'next' : 'prev',
              activeSlideIndex: newSlideIndex,
              slideTo: false
            });
          }
          swiper.slideToLoop(index);
        } else {
          swiper.slideTo(index);
        }
      }
      function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        // Current/Total
        let current;
        let previousIndex;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
          previousIndex = swiper.previousRealIndex || 0;
          current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
          previousIndex = swiper.previousSnapIndex;
        } else {
          previousIndex = swiper.previousIndex || 0;
          current = swiper.activeIndex || 0;
        }
        // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          const bullets = swiper.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;
          if (params.dynamicBullets) {
            bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
            el.forEach(subEl => {
              subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
            });
            if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
              dynamicBulletIndex += current - (previousIndex || 0);
              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }
            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
          bullets.forEach(bulletEl => {
            const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
            bulletEl.classList.remove(...classesToRemove);
          });
          if (el.length > 1) {
            bullets.forEach(bullet => {
              const bulletIndex = elementIndex(bullet);
              if (bulletIndex === current) {
                bullet.classList.add(...params.bulletActiveClass.split(' '));
              } else if (swiper.isElement) {
                bullet.setAttribute('part', 'bullet');
              }
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                }
                if (bulletIndex === firstIndex) {
                  setSideBullets(bullet, 'prev');
                }
                if (bulletIndex === lastIndex) {
                  setSideBullets(bullet, 'next');
                }
              }
            });
          } else {
            const bullet = bullets[current];
            if (bullet) {
              bullet.classList.add(...params.bulletActiveClass.split(' '));
            }
            if (swiper.isElement) {
              bullets.forEach((bulletEl, bulletIndex) => {
                bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
              });
            }
            if (params.dynamicBullets) {
              const firstDisplayedBullet = bullets[firstIndex];
              const lastDisplayedBullet = bullets[lastIndex];
              for (let i = firstIndex; i <= lastIndex; i += 1) {
                if (bullets[i]) {
                  bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                }
              }
              setSideBullets(firstDisplayedBullet, 'prev');
              setSideBullets(lastDisplayedBullet, 'next');
            }
          }
          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? 'right' : 'left';
            bullets.forEach(bullet => {
              bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
            });
          }
        }
        el.forEach((subEl, subElIndex) => {
          if (params.type === 'fraction') {
            subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
              fractionEl.textContent = params.formatFractionCurrent(current + 1);
            });
            subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
              totalEl.textContent = params.formatFractionTotal(total);
            });
          }
          if (params.type === 'progressbar') {
            let progressbarDirection;
            if (params.progressbarOpposite) {
              progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            } else {
              progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            }
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') {
              scaleX = scale;
            } else {
              scaleY = scale;
            }
            subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
              progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
              progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
            });
          }
          if (params.type === 'custom' && params.renderCustom) {
            subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
            if (subElIndex === 0) emit('paginationRender', subEl);
          } else {
            if (subElIndex === 0) emit('paginationRender', subEl);
            emit('paginationUpdate', subEl);
          }
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
          }
        });
      }
      function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        let paginationHTML = '';
        if (params.type === 'bullets') {
          let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
          if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }
          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              // prettier-ignore
              paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }
        }
        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
          }
        }
        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }
        }
        swiper.pagination.bullets = [];
        el.forEach(subEl => {
          if (params.type !== 'custom') {
            subEl.innerHTML = paginationHTML || '';
          }
          if (params.type === 'bullets') {
            swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
          }
        });
        if (params.type !== 'custom') {
          emit('paginationRender', el[0]);
        }
      }
      function init() {
        swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
          el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
          el = swiper.el.shadowRoot.querySelector(params.el);
        }
        if (!el && typeof params.el === 'string') {
          el = [...document.querySelectorAll(params.el)];
        }
        if (!el) {
          el = params.el;
        }
        if (!el || el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
          el = [...swiper.el.querySelectorAll(params.el)];
          // check if it belongs to another nested Swiper
          if (el.length > 1) {
            el = el.filter(subEl => {
              if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
              return true;
            })[0];
          }
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
          el
        });
        el = makeElementsArray(el);
        el.forEach(subEl => {
          if (params.type === 'bullets' && params.clickable) {
            subEl.classList.add(params.clickableClass);
          }
          subEl.classList.add(params.modifierClass + params.type);
          subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.type === 'bullets' && params.dynamicBullets) {
            subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) {
              params.dynamicMainBullets = 1;
            }
          }
          if (params.type === 'progressbar' && params.progressbarOpposite) {
            subEl.classList.add(params.progressbarOppositeClass);
          }
          if (params.clickable) {
            subEl.addEventListener('click', onBulletClick);
          }
          if (!swiper.enabled) {
            subEl.classList.add(params.lockClass);
          }
        });
      }
      function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
          el = makeElementsArray(el);
          el.forEach(subEl => {
            subEl.classList.remove(params.hiddenClass);
            subEl.classList.remove(params.modifierClass + params.type);
            subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            if (params.clickable) {
              subEl.removeEventListener('click', onBulletClick);
            }
          });
        }
        if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
      }
      on('changeDirection', () => {
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let {
          el
        } = swiper.pagination;
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.classList.remove(params.horizontalClass, params.verticalClass);
          subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        });
      });
      on('init', () => {
        if (swiper.params.pagination.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          render();
          update();
        }
      });
      on('activeIndexChange', () => {
        if (typeof swiper.snapIndex === 'undefined') {
          update();
        }
      });
      on('snapIndexChange', () => {
        update();
      });
      on('snapGridLengthChange', () => {
        render();
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        let {
          el
        } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
        }
      });
      on('lock unlock', () => {
        update();
      });
      on('click', (_s, e) => {
        const targetEl = e.target;
        let {
          el
        } = swiper.pagination;
        if (!Array.isArray(el)) el = [el].filter(element => !!element);
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
          if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
          const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            emit('paginationShow');
          } else {
            emit('paginationHide');
          }
          el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
        }
      });
      const enable = () => {
        swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
        let {
          el
        } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
        }
        init();
        render();
        update();
      };
      const disable = () => {
        swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
        let {
          el
        } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
        }
        destroy();
      };
      Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
      });
    }

    function Scrollbar(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      let isTouched = false;
      let timeout = null;
      let dragTimeout = null;
      let dragStartPos;
      let dragSize;
      let trackSize;
      let divider;
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
          scrollbarDisabledClass: 'swiper-scrollbar-disabled',
          horizontalClass: `swiper-scrollbar-horizontal`,
          verticalClass: `swiper-scrollbar-vertical`
        }
      });
      swiper.scrollbar = {
        el: null,
        dragEl: null
      };
      function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper;
        const {
          dragEl,
          el
        } = scrollbar;
        const params = swiper.params.scrollbar;
        const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
          newPos = -newPos;
          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }
        if (swiper.isHorizontal()) {
          dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
          dragEl.style.width = `${newSize}px`;
        } else {
          dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
          dragEl.style.height = `${newSize}px`;
        }
        if (params.hide) {
          clearTimeout(timeout);
          el.style.opacity = 1;
          timeout = setTimeout(() => {
            el.style.opacity = 0;
            el.style.transitionDuration = '400ms';
          }, 1000);
        }
      }
      function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
      }
      function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar
        } = swiper;
        const {
          dragEl,
          el
        } = scrollbar;
        dragEl.style.width = '';
        dragEl.style.height = '';
        trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }
        if (swiper.isHorizontal()) {
          dragEl.style.width = `${dragSize}px`;
        } else {
          dragEl.style.height = `${dragSize}px`;
        }
        if (divider >= 1) {
          el.style.display = 'none';
        } else {
          el.style.display = '';
        }
        if (swiper.params.scrollbar.hide) {
          el.style.opacity = 0;
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
        }
      }
      function getPointerPosition(e) {
        return swiper.isHorizontal() ? e.clientX : e.clientY;
      }
      function setDragPosition(e) {
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper;
        const {
          el
        } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) {
          positionRatio = 1 - positionRatio;
        }
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          wrapperEl
        } = swiper;
        const {
          el,
          dragEl
        } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        wrapperEl.style.transitionDuration = '100ms';
        dragEl.style.transitionDuration = '100ms';
        setDragPosition(e);
        clearTimeout(dragTimeout);
        el.style.transitionDuration = '0ms';
        if (params.hide) {
          el.style.opacity = 1;
        }
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style['scroll-snap-type'] = 'none';
        }
        emit('scrollbarDragStart', e);
      }
      function onDragMove(e) {
        const {
          scrollbar,
          wrapperEl
        } = swiper;
        const {
          el,
          dragEl
        } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        setDragPosition(e);
        wrapperEl.style.transitionDuration = '0ms';
        el.style.transitionDuration = '0ms';
        dragEl.style.transitionDuration = '0ms';
        emit('scrollbarDragMove', e);
      }
      function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          wrapperEl
        } = swiper;
        const {
          el
        } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style['scroll-snap-type'] = '';
          wrapperEl.style.transitionDuration = '';
        }
        if (params.hide) {
          clearTimeout(dragTimeout);
          dragTimeout = nextTick(() => {
            el.style.opacity = 0;
            el.style.transitionDuration = '400ms';
          }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      }
      function events(method) {
        const {
          scrollbar,
          params
        } = swiper;
        const el = scrollbar.el;
        if (!el) return;
        const target = el;
        const activeListener = params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        const passiveListener = params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        target[eventMethod]('pointerdown', onDragStart, activeListener);
        document[eventMethod]('pointermove', onDragMove, activeListener);
        document[eventMethod]('pointerup', onDragEnd, passiveListener);
      }
      function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
      }
      function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
      }
      function init() {
        const {
          scrollbar,
          el: swiperEl
        } = swiper;
        swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
          el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let el;
        if (typeof params.el === 'string' && swiper.isElement) {
          el = swiper.el.shadowRoot.querySelector(params.el);
        }
        if (!el && typeof params.el === 'string') {
          el = document.querySelectorAll(params.el);
        } else if (!el) {
          el = params.el;
        }
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
          el = swiperEl.querySelector(params.el);
        }
        if (el.length > 0) el = el[0];
        el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let dragEl;
        if (el) {
          dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
          if (!dragEl) {
            dragEl = createElement('div', swiper.params.scrollbar.dragClass);
            el.append(dragEl);
          }
        }
        Object.assign(scrollbar, {
          el,
          dragEl
        });
        if (params.draggable) {
          enableDraggable();
        }
        if (el) {
          el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
        }
      }
      function destroy() {
        const params = swiper.params.scrollbar;
        const el = swiper.scrollbar.el;
        if (el) {
          el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        }
        disableDraggable();
      }
      on('init', () => {
        if (swiper.params.scrollbar.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          updateSize();
          setTranslate();
        }
      });
      on('update resize observerUpdate lock unlock', () => {
        updateSize();
      });
      on('setTranslate', () => {
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        setTransition(duration);
      });
      on('enable disable', () => {
        const {
          el
        } = swiper.scrollbar;
        if (el) {
          el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
        }
      });
      on('destroy', () => {
        destroy();
      });
      const enable = () => {
        swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) {
          swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
        }
        init();
        updateSize();
        setTranslate();
      };
      const disable = () => {
        swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.el) {
          swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
        }
        destroy();
      };
      Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
      });
    }

    function Parallax(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        parallax: {
          enabled: false
        }
      });
      const setTransform = (el, progress) => {
        const {
          rtl
        } = swiper;
        const rtlFactor = rtl ? -1 : 1;
        const p = el.getAttribute('data-swiper-parallax') || '0';
        let x = el.getAttribute('data-swiper-parallax-x');
        let y = el.getAttribute('data-swiper-parallax-y');
        const scale = el.getAttribute('data-swiper-parallax-scale');
        const opacity = el.getAttribute('data-swiper-parallax-opacity');
        const rotate = el.getAttribute('data-swiper-parallax-rotate');
        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }
        if (x.indexOf('%') >= 0) {
          x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
          x = `${x * progress * rtlFactor}px`;
        }
        if (y.indexOf('%') >= 0) {
          y = `${parseInt(y, 10) * progress}%`;
        } else {
          y = `${y * progress}px`;
        }
        if (typeof opacity !== 'undefined' && opacity !== null) {
          const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          el.style.opacity = currentOpacity;
        }
        let transform = `translate3d(${x}, ${y}, 0px)`;
        if (typeof scale !== 'undefined' && scale !== null) {
          const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          transform += ` scale(${currentScale})`;
        }
        if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
          const currentRotate = rotate * progress * -1;
          transform += ` rotate(${currentRotate}deg)`;
        }
        el.style.transform = transform;
      };
      const setTranslate = () => {
        const {
          el,
          slides,
          progress,
          snapGrid
        } = swiper;
        elementChildren(el, '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(subEl => {
          setTransform(subEl, progress);
        });
        slides.forEach((slideEl, slideIndex) => {
          let slideProgress = slideEl.progress;
          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }
          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          slideEl.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]').forEach(subEl => {
            setTransform(subEl, slideProgress);
          });
        });
      };
      const setTransition = function (duration) {
        if (duration === void 0) {
          duration = swiper.params.speed;
        }
        const {
          el
        } = swiper;
        el.querySelectorAll('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').forEach(parallaxEl => {
          let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
        });
      };
      on('beforeInit', () => {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      });
      on('init', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTranslate', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTransition', (_swiper, duration) => {
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
      });
    }

    function Zoom(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      });
      swiper.zoom = {
        enabled: false
      };
      let currentScale = 1;
      let isScaling = false;
      let fakeGestureTouched;
      let fakeGestureMoved;
      const evCache = [];
      const gesture = {
        originX: 0,
        originY: 0,
        slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        imageEl: undefined,
        imageWrapEl: undefined,
        maxRatio: 3
      };
      const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      };
      const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      };
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get() {
          return scale;
        },
        set(value) {
          if (scale !== value) {
            const imageEl = gesture.imageEl;
            const slideEl = gesture.slideEl;
            emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        }
      });
      function getDistanceBetweenTouches() {
        if (evCache.length < 2) return 1;
        const x1 = evCache[0].pageX;
        const y1 = evCache[0].pageY;
        const x2 = evCache[1].pageX;
        const y2 = evCache[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
      }
      function getScaleOrigin() {
        if (evCache.length < 2) return {
          x: null,
          y: null
        };
        const box = gesture.imageEl.getBoundingClientRect();
        return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale];
      }
      function getSlideSelector() {
        return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
      }
      function eventWithinSlide(e) {
        const slideSelector = getSlideSelector();
        if (e.target.matches(slideSelector)) return true;
        if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
        return false;
      }
      function eventWithinZoomContainer(e) {
        const selector = `.${swiper.params.zoom.containerClass}`;
        if (e.target.matches(selector)) return true;
        if ([...swiper.el.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
        return false;
      }

      // Events
      function onGestureStart(e) {
        if (e.pointerType === 'mouse') {
          evCache.splice(0, evCache.length);
        }
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        evCache.push(e);
        if (evCache.length < 2) {
          return;
        }
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches();
        if (!gesture.slideEl) {
          gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
          if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
          let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
          if (imageEl) {
            imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
          }
          gesture.imageEl = imageEl;
          if (imageEl) {
            gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
          } else {
            gesture.imageWrapEl = undefined;
          }
          if (!gesture.imageWrapEl) {
            gesture.imageEl = undefined;
            return;
          }
          gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
        }
        if (gesture.imageEl) {
          const [originX, originY] = getScaleOrigin();
          gesture.originX = originX;
          gesture.originY = originY;
          gesture.imageEl.style.transitionDuration = '0ms';
        }
        isScaling = true;
      }
      function onGestureChange(e) {
        if (!eventWithinSlide(e)) return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache[pointerIndex] = e;
        if (evCache.length < 2) {
          return;
        }
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches();
        if (!gesture.imageEl) {
          return;
        }
        zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }
        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
      }
      function onGestureEnd(e) {
        if (!eventWithinSlide(e)) return;
        if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
        if (!fakeGestureTouched || !fakeGestureMoved) {
          return;
        }
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!gesture.imageEl) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale > 1 && gesture.slideEl) {
          gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        } else if (zoom.scale <= 1 && gesture.slideEl) {
          gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        }
        if (zoom.scale === 1) {
          gesture.originX = 0;
          gesture.originY = 0;
          gesture.slideEl = undefined;
        }
      }
      function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.imageEl) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        const event = evCache.length > 0 ? evCache[0] : e;
        image.touchesStart.x = event.pageX;
        image.touchesStart.y = event.pageY;
      }
      function onTouchMove(e) {
        if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !gesture.slideEl) return;
        if (!image.isMoved) {
          image.width = gesture.imageEl.offsetWidth;
          image.height = gesture.imageEl.offsetHeight;
          image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
          image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
          gesture.slideWidth = gesture.slideEl.offsetWidth;
          gesture.slideHeight = gesture.slideEl.offsetHeight;
          gesture.imageWrapEl.style.transitionDuration = '0ms';
        }
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
        image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
        const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
        if (touchesDiff > 5) {
          swiper.allowClick = false;
        }
        if (!image.isMoved && !isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }
          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }
        if (e.cancelable) {
          e.preventDefault();
        }
        e.stopPropagation();
        image.isMoved = true;
        const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
        const {
          originX,
          originY
        } = gesture;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }
        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }
        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }
        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        }

        // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
      }
      function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.imageEl) return;
        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY;

        // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY;
        // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
        gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
      }
      function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
          if (gesture.imageEl) {
            gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
          }
          if (gesture.imageWrapEl) {
            gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
          }
          gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
          zoom.scale = 1;
          currentScale = 1;
          gesture.slideEl = undefined;
          gesture.imageEl = undefined;
          gesture.imageWrapEl = undefined;
          gesture.originX = 0;
          gesture.originY = 0;
        }
      }
      function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
          if (e && e.target) {
            gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
          }
          if (!gesture.slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
              gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
            } else {
              gesture.slideEl = swiper.slides[swiper.activeIndex];
            }
          }
          let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
          if (imageEl) {
            imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
          }
          gesture.imageEl = imageEl;
          if (imageEl) {
            gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
          } else {
            gesture.imageWrapEl = undefined;
          }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.pageX;
          touchY = e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }
        const forceZoomRatio = typeof e === 'number' ? e : null;
        if (currentScale === 1 && forceZoomRatio) {
          touchX = undefined;
          touchY = undefined;
        }
        zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
        currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
        if (e && !(currentScale === 1 && forceZoomRatio)) {
          slideWidth = gesture.slideEl.offsetWidth;
          slideHeight = gesture.slideEl.offsetHeight;
          offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
          offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.imageEl.offsetWidth;
          imageHeight = gesture.imageEl.offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;
          if (translateX < translateMinX) {
            translateX = translateMinX;
          }
          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }
          if (translateY < translateMinY) {
            translateY = translateMinY;
          }
          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }
        if (forceZoomRatio && zoom.scale === 1) {
          gesture.originX = 0;
          gesture.originY = 0;
        }
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
      }
      function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
          let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
          if (imageEl) {
            imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
          }
          gesture.imageEl = imageEl;
          if (imageEl) {
            gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
          } else {
            gesture.imageWrapEl = undefined;
          }
        }
        if (!gesture.imageEl || !gesture.imageWrapEl) return;
        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.imageWrapEl.style.transitionDuration = '300ms';
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
        gesture.imageEl.style.transitionDuration = '300ms';
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
        gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
        gesture.slideEl = undefined;
        gesture.originX = 0;
        gesture.originY = 0;
      }

      // Toggle Zoom
      function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoomOut();
        } else {
          // Zoom In
          zoomIn(e);
        }
      }
      function getListeners() {
        const passiveListener = swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        const activeListenerWithCapture = swiper.params.passiveListeners ? {
          passive: false,
          capture: true
        } : true;
        return {
          passiveListener,
          activeListenerWithCapture
        };
      }

      // Attach/Detach Events
      function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();

        // Scale image
        swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
          swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
        });

        // Move image
        swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
      }
      function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        zoom.enabled = false;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();

        // Scale image
        swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
        swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
        ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
          swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
        });

        // Move image
        swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
      }
      on('init', () => {
        if (swiper.params.zoom.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        disable();
      });
      on('touchStart', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
      });
      on('touchEnd', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
      });
      on('doubleTap', (_s, e) => {
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          zoomToggle(e);
        }
      });
      on('transitionEnd', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          onTransitionEnd();
        }
      });
      on('slideChange', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          onTransitionEnd();
        }
      });
      Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
      });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'
        }
      });

      swiper.controller = {
        control: undefined
      };
      function LinearSpline(x, y) {
        const binarySearch = function search() {
          let maxIndex;
          let minIndex;
          let guess;
          return (array, val) => {
            minIndex = -1;
            maxIndex = array.length;
            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;
              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }
            return maxIndex;
          };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1;
        // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
          if (!x2) return 0;

          // Get the indexes of x1 and x3 (the array indexes before and after given x2):
          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1;

          // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
      }
      function getInterpolateFunction(c) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
      }
      function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
          if (c.destroyed) return;

          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
          if (swiper.params.controller.by === 'slide') {
            getInterpolateFunction(c);
            // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out
            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }
          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
              multiplier = 1;
            }
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }
          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }
          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      }
      function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
          if (c.destroyed) return;
          c.setTransition(duration, swiper);
          if (duration !== 0) {
            c.transitionStart();
            if (c.params.autoHeight) {
              nextTick(() => {
                c.updateAutoHeight();
              });
            }
            elementTransitionEnd(c.wrapperEl, () => {
              if (!controlled) return;
              c.transitionEnd();
            });
          }
        }
        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
      function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      }
      on('beforeInit', () => {
        if (typeof window !== 'undefined' && (
        // eslint-disable-line
        typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
          const controlElement = document.querySelector(swiper.params.controller.control);
          if (controlElement && controlElement.swiper) {
            swiper.controller.control = controlElement.swiper;
          } else if (controlElement) {
            const onControllerSwiper = e => {
              swiper.controller.control = e.detail[0];
              swiper.update();
              controlElement.removeEventListener('init', onControllerSwiper);
            };
            controlElement.addEventListener('init', onControllerSwiper);
          }
          return;
        }
        swiper.controller.control = swiper.params.controller.control;
      });
      on('update', () => {
        removeSpline();
      });
      on('resize', () => {
        removeSpline();
      });
      on('observerUpdate', () => {
        removeSpline();
      });
      on('setTranslate', (_s, translate, byController) => {
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTranslate(translate, byController);
      });
      on('setTransition', (_s, duration, byController) => {
        if (!swiper.controller.control || swiper.controller.control.destroyed) return;
        swiper.controller.setTransition(duration, byController);
      });
      Object.assign(swiper.controller, {
        setTranslate,
        setTransition
      });
    }

    function A11y(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null
        }
      });
      swiper.a11y = {
        clicked: false
      };
      let liveRegion = null;
      function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.innerHTML = '';
        notification.innerHTML = message;
      }
      const makeElementsArray = el => {
        if (!Array.isArray(el)) el = [el].filter(e => !!e);
        return el;
      };
      function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }
        const randomChar = () => Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
      }
      function makeElFocusable(el) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('tabIndex', '0');
        });
      }
      function makeElNotFocusable(el) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('tabIndex', '-1');
        });
      }
      function addElRole(el, role) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('role', role);
        });
      }
      function addElRoleDescription(el, description) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-roledescription', description);
        });
      }
      function addElControls(el, controls) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-controls', controls);
        });
      }
      function addElLabel(el, label) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-label', label);
        });
      }
      function addElId(el, id) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('id', id);
        });
      }
      function addElLive(el, live) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-live', live);
        });
      }
      function disableEl(el) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-disabled', true);
        });
      }
      function enableEl(el) {
        el = makeElementsArray(el);
        el.forEach(subEl => {
          subEl.setAttribute('aria-disabled', false);
        });
      }
      function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const targetEl = e.target;
        if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
          if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
        }
        if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
        if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
          targetEl.click();
        }
      }
      function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const {
          nextEl,
          prevEl
        } = swiper.navigation;
        if (prevEl) {
          if (swiper.isBeginning) {
            disableEl(prevEl);
            makeElNotFocusable(prevEl);
          } else {
            enableEl(prevEl);
            makeElFocusable(prevEl);
          }
        }
        if (nextEl) {
          if (swiper.isEnd) {
            disableEl(nextEl);
            makeElNotFocusable(nextEl);
          } else {
            enableEl(nextEl);
            makeElFocusable(nextEl);
          }
        }
      }
      function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
      }
      function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
      }
      function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.forEach(bulletEl => {
          if (swiper.params.pagination.clickable) {
            makeElFocusable(bulletEl);
            if (!swiper.params.pagination.renderBullet) {
              addElRole(bulletEl, 'button');
              addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
            }
          }
          if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
            bulletEl.setAttribute('aria-current', 'true');
          } else {
            bulletEl.removeAttribute('aria-current');
          }
        });
      }
      const initNavEl = (el, wrapperId, message) => {
        makeElFocusable(el);
        if (el.tagName !== 'BUTTON') {
          addElRole(el, 'button');
          el.addEventListener('keydown', onEnterOrSpaceKey);
        }
        addElLabel(el, message);
        addElControls(el, wrapperId);
      };
      const handlePointerDown = () => {
        swiper.a11y.clicked = true;
      };
      const handlePointerUp = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!swiper.destroyed) {
              swiper.a11y.clicked = false;
            }
          });
        });
      };
      const handleFocus = e => {
        if (swiper.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) {
          swiper.el.scrollLeft = 0;
        } else {
          swiper.el.scrollTop = 0;
        }
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      };
      const initSlides = () => {
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) {
          addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
        }
        if (params.slideRole) {
          addElRole(swiper.slides, params.slideRole);
        }
        const slidesLength = swiper.slides.length;
        if (params.slideLabelMessage) {
          swiper.slides.forEach((slideEl, index) => {
            const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel(slideEl, ariaLabelMessage);
          });
        }
      };
      const init = () => {
        const params = swiper.params.a11y;
        if (swiper.isElement) {
          swiper.el.shadowEl.append(liveRegion);
        } else {
          swiper.el.append(liveRegion);
        }

        // Container
        const containerEl = swiper.el;
        if (params.containerRoleDescriptionMessage) {
          addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
        }
        if (params.containerMessage) {
          addElLabel(containerEl, params.containerMessage);
        }

        // Wrapper
        const wrapperEl = swiper.wrapperEl;
        const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId(wrapperEl, wrapperId);
        addElLive(wrapperEl, live);

        // Slide
        initSlides();

        // Navigation
        let {
          nextEl,
          prevEl
        } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) {
          nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
        }
        if (prevEl) {
          prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
        }

        // Pagination
        if (hasClickablePagination()) {
          const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
          paginationEl.forEach(el => {
            el.addEventListener('keydown', onEnterOrSpaceKey);
          });
        }

        // Tab focus
        swiper.el.addEventListener('focus', handleFocus, true);
        swiper.el.addEventListener('pointerdown', handlePointerDown, true);
        swiper.el.addEventListener('pointerup', handlePointerUp, true);
      };
      function destroy() {
        if (liveRegion) liveRegion.remove();
        let {
          nextEl,
          prevEl
        } = swiper.navigation ? swiper.navigation : {};
        nextEl = makeElementsArray(nextEl);
        prevEl = makeElementsArray(prevEl);
        if (nextEl) {
          nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
        }
        if (prevEl) {
          prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
        }

        // Pagination
        if (hasClickablePagination()) {
          const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
          paginationEl.forEach(el => {
            el.removeEventListener('keydown', onEnterOrSpaceKey);
          });
        }

        // Tab focus
        swiper.el.removeEventListener('focus', handleFocus, true);
        swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
        swiper.el.removeEventListener('pointerup', handlePointerUp, true);
      }
      on('beforeInit', () => {
        liveRegion = createElement('span', swiper.params.a11y.notificationClass);
        liveRegion.setAttribute('aria-live', 'assertive');
        liveRegion.setAttribute('aria-atomic', 'true');
      });
      on('afterInit', () => {
        if (!swiper.params.a11y.enabled) return;
        init();
      });
      on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
        if (!swiper.params.a11y.enabled) return;
        initSlides();
      });
      on('fromEdge toEdge afterInit lock unlock', () => {
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
      });
      on('paginationUpdate', () => {
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
      });
      on('destroy', () => {
        if (!swiper.params.a11y.enabled) return;
        destroy();
      });
    }

    function History(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides',
          keepQuery: false
        }
      });
      let initialized = false;
      let paths = {};
      const slugify = text => {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      };
      const getPathValues = urlOverride => {
        const window = getWindow();
        let location;
        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }
        const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
          key,
          value
        };
      };
      const setHistory = (key, index) => {
        const window = getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }
        const slide = swiper.slides[index];
        let value = slugify(slide.getAttribute('data-history'));
        if (swiper.params.history.root.length > 0) {
          let root = swiper.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = `${root}/${key ? `${key}/` : ''}${value}`;
        } else if (!location.pathname.includes(key)) {
          value = `${key ? `${key}/` : ''}${value}`;
        }
        if (swiper.params.history.keepQuery) {
          value += location.search;
        }
        const currentState = window.history.state;
        if (currentState && currentState.value === value) {
          return;
        }
        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value
          }, null, value);
        } else {
          window.history.pushState({
            value
          }, null, value);
        }
      };
      const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides[i];
            const slideHistory = slugify(slide.getAttribute('data-history'));
            if (slideHistory === value) {
              const index = swiper.getSlideIndex(slide);
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      };
      const setHistoryPopState = () => {
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
      };
      const init = () => {
        const window = getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) {
          if (!swiper.params.history.replaceState) {
            window.addEventListener('popstate', setHistoryPopState);
          }
          return;
        }
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
      };
      const destroy = () => {
        const window = getWindow();
        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', setHistoryPopState);
        }
      };
      on('init', () => {
        if (swiper.params.history.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.history.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
    }

    function HashNavigation(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        on
      } = _ref;
      let initialized = false;
      const document = getDocument();
      const window = getWindow();
      extendParams({
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false,
          getSlideIndex(_s, hash) {
            if (swiper.virtual && swiper.params.virtual.enabled) {
              const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
              if (!slideWithHash) return 0;
              const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
              return index;
            }
            return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
          }
        }
      });
      const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
        if (newHash !== activeSlideHash) {
          const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
          if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
          swiper.slideTo(newIndex);
        }
      };
      const setHash = () => {
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
        const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, `#${activeSlideHash}` || '');
          emit('hashSet');
        } else {
          document.location.hash = activeSlideHash || '';
          emit('hashSet');
        }
      };
      const init = () => {
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
          const speed = 0;
          const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
          swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
        }
        if (swiper.params.hashNavigation.watchState) {
          window.addEventListener('hashchange', onHashChange);
        }
      };
      const destroy = () => {
        if (swiper.params.hashNavigation.watchState) {
          window.removeEventListener('hashchange', onHashChange);
        }
      };
      on('init', () => {
        if (swiper.params.hashNavigation.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.hashNavigation.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHash();
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHash();
        }
      });
    }

    /* eslint no-underscore-dangle: "off" */
    function Autoplay(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit,
        params
      } = _ref;
      swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
      };
      extendParams({
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      });
      let timeout;
      let raf;
      let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
      let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
      let autoplayTimeLeft;
      let autoplayStartTime = new Date().getTime;
      let wasPaused;
      let isTouched;
      let pausedByTouch;
      let touchStartTimeout;
      let slideChanged;
      let pausedByInteraction;
      function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
        resume();
      }
      const calcTimeLeft = () => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) {
          wasPaused = true;
        } else if (wasPaused) {
          autoplayDelayCurrent = autoplayTimeLeft;
          wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame(() => {
          calcTimeLeft();
        });
      };
      const getSlideDelay = () => {
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) {
          activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
        } else {
          activeSlideEl = swiper.slides[swiper.activeIndex];
        }
        if (!activeSlideEl) return undefined;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
        return currentSlideDelay;
      };
      const run = delayForce => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
          delay = currentSlideDelay;
          autoplayDelayTotal = currentSlideDelay;
          autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = () => {
          if (!swiper || swiper.destroyed) return;
          if (swiper.params.autoplay.reverseDirection) {
            if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
              swiper.slidePrev(speed, true, true);
              emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(swiper.slides.length - 1, speed, true, true);
              emit('autoplay');
            }
          } else {
            if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
              swiper.slideNext(speed, true, true);
              emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(0, speed, true, true);
              emit('autoplay');
            }
          }
          if (swiper.params.cssMode) {
            autoplayStartTime = new Date().getTime();
            requestAnimationFrame(() => {
              run();
            });
          }
        };
        if (delay > 0) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            proceed();
          }, delay);
        } else {
          requestAnimationFrame(() => {
            proceed();
          });
        }

        // eslint-disable-next-line
        return delay;
      };
      const start = () => {
        swiper.autoplay.running = true;
        run();
        emit('autoplayStart');
      };
      const stop = () => {
        swiper.autoplay.running = false;
        clearTimeout(timeout);
        cancelAnimationFrame(raf);
        emit('autoplayStop');
      };
      const pause = (internal, reset) => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        clearTimeout(timeout);
        if (!internal) {
          pausedByInteraction = true;
        }
        const proceed = () => {
          emit('autoplayPause');
          if (swiper.params.autoplay.waitForTransition) {
            swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
          } else {
            resume();
          }
        };
        swiper.autoplay.paused = true;
        if (reset) {
          if (slideChanged) {
            autoplayTimeLeft = swiper.params.autoplay.delay;
          }
          slideChanged = false;
          proceed();
          return;
        }
        const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
        autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
        if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
        proceed();
      };
      const resume = () => {
        if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
        autoplayStartTime = new Date().getTime();
        if (pausedByInteraction) {
          pausedByInteraction = false;
          run(autoplayTimeLeft);
        } else {
          run();
        }
        swiper.autoplay.paused = false;
        emit('autoplayResume');
      };
      const onVisibilityChange = () => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        const document = getDocument();
        if (document.visibilityState === 'hidden') {
          pausedByInteraction = true;
          pause(true);
        }
        if (document.visibilityState === 'visible') {
          resume();
        }
      };
      const onPointerEnter = e => {
        if (e.pointerType !== 'mouse') return;
        pausedByInteraction = true;
        pause(true);
      };
      const onPointerLeave = e => {
        if (e.pointerType !== 'mouse') return;
        if (swiper.autoplay.paused) {
          resume();
        }
      };
      const attachMouseEvents = () => {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
          swiper.el.addEventListener('pointerenter', onPointerEnter);
          swiper.el.addEventListener('pointerleave', onPointerLeave);
        }
      };
      const detachMouseEvents = () => {
        swiper.el.removeEventListener('pointerenter', onPointerEnter);
        swiper.el.removeEventListener('pointerleave', onPointerLeave);
      };
      const attachDocumentEvents = () => {
        const document = getDocument();
        document.addEventListener('visibilitychange', onVisibilityChange);
      };
      const detachDocumentEvents = () => {
        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      };
      on('init', () => {
        if (swiper.params.autoplay.enabled) {
          attachMouseEvents();
          attachDocumentEvents();
          autoplayStartTime = new Date().getTime();
          start();
        }
      });
      on('destroy', () => {
        detachMouseEvents();
        detachDocumentEvents();
        if (swiper.autoplay.running) {
          stop();
        }
      });
      on('beforeTransitionStart', (_s, speed, internal) => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          pause(true, true);
        } else {
          stop();
        }
      });
      on('sliderFirstMove', () => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
          return;
        }
        isTouched = true;
        pausedByTouch = false;
        pausedByInteraction = false;
        touchStartTimeout = setTimeout(() => {
          pausedByInteraction = true;
          pausedByTouch = true;
          pause(true);
        }, 200);
      });
      on('touchEnd', () => {
        if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
        clearTimeout(touchStartTimeout);
        clearTimeout(timeout);
        if (swiper.params.autoplay.disableOnInteraction) {
          pausedByTouch = false;
          isTouched = false;
          return;
        }
        if (pausedByTouch && swiper.params.cssMode) resume();
        pausedByTouch = false;
        isTouched = false;
      });
      on('slideChange', () => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        slideChanged = true;
      });
      Object.assign(swiper.autoplay, {
        start,
        stop,
        pause,
        resume
      });
    }

    function Thumb(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs'
        }
      });
      let initialized = false;
      let swiperCreated = false;
      swiper.thumbs = {
        swiper: null
      };
      function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }
        if (swiper.params.loop) {
          swiper.slideToLoop(slideToIndex);
        } else {
          swiper.slideTo(slideToIndex);
        }
      }
      function init() {
        const {
          thumbs: thumbsParams
        } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Object.assign(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object.assign(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper.thumbs.swiper.update();
        } else if (isObject(thumbsParams.swiper)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
          swiperCreated = true;
        }
        swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
      }
      function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

        // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }
        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
              slideEl.classList.add(thumbActiveClass);
            });
          }
        } else {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            if (thumbsSwiper.slides[swiper.realIndex + i]) {
              thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
            }
          }
        }
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          const currentThumbsIndex = thumbsSwiper.activeIndex;
          let newThumbsIndex;
          let direction;
          if (thumbsSwiper.params.loop) {
            const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
            newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }
          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }
          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        }
      }
      on('beforeInit', () => {
        const {
          thumbs
        } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
          const document = getDocument();
          const getThumbsElementAndInit = () => {
            const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
            if (thumbsElement && thumbsElement.swiper) {
              thumbs.swiper = thumbsElement.swiper;
              init();
              update(true);
            } else if (thumbsElement) {
              const onThumbsSwiper = e => {
                thumbs.swiper = e.detail[0];
                thumbsElement.removeEventListener('init', onThumbsSwiper);
                init();
                update(true);
                thumbs.swiper.update();
                swiper.update();
              };
              thumbsElement.addEventListener('init', onThumbsSwiper);
            }
            return thumbsElement;
          };
          const watchForThumbsToAppear = () => {
            if (swiper.destroyed) return;
            const thumbsElement = getThumbsElementAndInit();
            if (!thumbsElement) {
              requestAnimationFrame(watchForThumbsToAppear);
            }
          };
          requestAnimationFrame(watchForThumbsToAppear);
        } else {
          init();
          update(true);
        }
      });
      on('slideChange update resize observerUpdate', () => {
        update();
      });
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
      });
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) {
          thumbsSwiper.destroy();
        }
      });
      Object.assign(swiper.thumbs, {
        init,
        update
      });
    }

    function freeMode(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        once
      } = _ref;
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02
        }
      });
      function onTouchStart() {
        if (swiper.params.cssMode) return;
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
          currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
      }
      function onTouchMove() {
        if (swiper.params.cssMode) return;
        const {
          touchEventsData: data,
          touches
        } = swiper;
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      }
      function onTouchEnd(_ref2) {
        let {
          currentPos
        } = _ref2;
        if (swiper.params.cssMode) return;
        const {
          params,
          wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data
        } = swiper;
        // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }
          return;
        }
        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop();
            const velocityEvent = data.velocities.pop();
            const distance = lastMoveEvent.position - velocityEvent.position;
            const time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;
            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
              swiper.velocity = 0;
            }
            // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.
            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }
          swiper.velocity *= params.freeMode.momentumVelocityRatio;
          data.velocities.length = 0;
          let momentumDuration = 1000 * params.freeMode.momentumRatio;
          const momentumDistance = swiper.velocity * momentumDuration;
          let newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          let doBounce = false;
          let afterBouncePosition;
          const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
          let needsLoopFix;
          if (newPosition < swiper.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }
              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }
              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeMode.sticky) {
            let nextSlide;
            for (let j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }
            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }
            newPosition = -newPosition;
          }
          if (needsLoopFix) {
            once('transitionEnd', () => {
              swiper.loopFix();
            });
          }
          // Fix duration
          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }
            if (params.freeMode.sticky) {
              // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
          }
          if (params.freeMode.momentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(() => {
                swiper.setTranslate(afterBouncePosition);
                elementTransitionEnd(wrapperEl, () => {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            if (!swiper.animating) {
              swiper.animating = true;
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          emit('_freeModeNoMomentumRelease');
        }
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
      }
      Object.assign(swiper, {
        freeMode: {
          onTouchStart,
          onTouchMove,
          onTouchEnd
        }
      });
    }

    function Grid(_ref) {
      let {
        swiper,
        extendParams
      } = _ref;
      extendParams({
        grid: {
          rows: 1,
          fill: 'column'
        }
      });
      let slidesNumberEvenToRows;
      let slidesPerRow;
      let numFullColumns;
      const getSpaceBetween = () => {
        let spaceBetween = swiper.params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
          spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        } else if (typeof spaceBetween === 'string') {
          spaceBetween = parseFloat(spaceBetween);
        }
        return spaceBetween;
      };
      const initSlides = slidesLength => {
        const {
          slidesPerView
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }
        if (slidesPerView !== 'auto' && fill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
        slidesPerRow = slidesNumberEvenToRows / rows;
      };
      const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
        const {
          slidesPerGroup
        } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const {
          rows,
          fill
        } = swiper.params.grid;
        // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (slidesPerGroup * rows));
          const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
          slide.style.order = newSlideOrderIndex;
        } else if (fill === 'column') {
          column = Math.floor(i / rows);
          row = i - column * rows;
          if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
            row += 1;
            if (row >= rows) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }
        slide.row = row;
        slide.column = column;
        slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
      };
      const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
        const {
          centeredSlides,
          roundLengths
        } = swiper.params;
        const spaceBetween = getSpaceBetween();
        const {
          rows
        } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        if (centeredSlides) {
          const newSlidesGrid = [];
          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }
          snapGrid.splice(0, snapGrid.length);
          snapGrid.push(...newSlidesGrid);
        }
      };
      swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
      };
    }

    function appendSlide(slides) {
      const swiper = this;
      const {
        params,
        slidesEl
      } = swiper;
      if (params.loop) {
        swiper.loopDestroy();
      }
      const appendElement = slideEl => {
        if (typeof slideEl === 'string') {
          const tempDOM = document.createElement('div');
          tempDOM.innerHTML = slideEl;
          slidesEl.append(tempDOM.children[0]);
          tempDOM.innerHTML = '';
        } else {
          slidesEl.append(slideEl);
        }
      };
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) appendElement(slides[i]);
        }
      } else {
        appendElement(slides);
      }
      swiper.recalcSlides();
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer || swiper.isElement) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      const swiper = this;
      const {
        params,
        activeIndex,
        slidesEl
      } = swiper;
      if (params.loop) {
        swiper.loopDestroy();
      }
      let newActiveIndex = activeIndex + 1;
      const prependElement = slideEl => {
        if (typeof slideEl === 'string') {
          const tempDOM = document.createElement('div');
          tempDOM.innerHTML = slideEl;
          slidesEl.prepend(tempDOM.children[0]);
          tempDOM.innerHTML = '';
        } else {
          slidesEl.prepend(slideEl);
        }
      };
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) prependElement(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
      } else {
        prependElement(slides);
      }
      swiper.recalcSlides();
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer || swiper.isElement) {
        swiper.update();
      }
      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      const swiper = this;
      const {
        params,
        activeIndex,
        slidesEl
      } = swiper;
      let activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.recalcSlides();
      }
      const baseLength = swiper.slides.length;
      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }
      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }
      let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      const slidesBuffer = [];
      for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper.slides[i];
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }
      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) slidesEl.append(slides[i]);
        }
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        slidesEl.append(slides);
      }
      for (let i = 0; i < slidesBuffer.length; i += 1) {
        slidesEl.append(slidesBuffer[i]);
      }
      swiper.recalcSlides();
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer || swiper.isElement) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      const swiper = this;
      const {
        params,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
      }
      let newActiveIndex = activeIndexBuffer;
      let indexToRemove;
      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }
      swiper.recalcSlides();
      if (params.loop) {
        swiper.loopCreate();
      }
      if (!params.observer || swiper.isElement) {
        swiper.update();
      }
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      const swiper = this;
      const slidesIndexes = [];
      for (let i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }
      swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
      let {
        swiper
      } = _ref;
      Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
      });
    }

    function effectInit(params) {
      const {
        effect,
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams,
        perspective,
        recreateShadows,
        getEffectParams
      } = params;
      on('beforeInit', () => {
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) {
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
      });
      on('setTranslate', () => {
        if (swiper.params.effect !== effect) return;
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
      });
      on('transitionEnd', () => {
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
          if (!getEffectParams || !getEffectParams().slideShadows) return;
          // remove shadows
          swiper.slides.forEach(slideEl => {
            slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
          });
          // create new one
          recreateShadows();
        }
      });
      let requireUpdateOnVirtual;
      on('virtualUpdate', () => {
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) {
          requireUpdateOnVirtual = true;
        }
        requestAnimationFrame(() => {
          if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
            setTranslate();
            requireUpdateOnVirtual = false;
          }
        });
      });
    }

    function effectTarget(effectParams, slideEl) {
      const transformEl = getSlideTransformEl(slideEl);
      if (transformEl !== slideEl) {
        transformEl.style.backfaceVisibility = 'hidden';
        transformEl.style['-webkit-backface-visibility'] = 'hidden';
      }
      return transformEl;
    }

    function effectVirtualTransitionEnd(_ref) {
      let {
        swiper,
        duration,
        transformElements,
        allSlides
      } = _ref;
      const {
        activeIndex
      } = swiper;
      const getSlide = el => {
        if (!el.parentElement) {
          // assume shadow root
          const slide = swiper.slides.filter(slideEl => slideEl.shadowEl && slideEl.shadowEl === el.parentNode)[0];
          return slide;
        }
        return el.parentElement;
      };
      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) {
          transitionEndTarget = transformElements;
        } else {
          transitionEndTarget = transformElements.filter(transformEl => {
            const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
            return swiper.getSlideIndex(el) === activeIndex;
          });
        }
        transitionEndTarget.forEach(el => {
          elementTransitionEnd(el, () => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const evt = new window.CustomEvent('transitionend', {
              bubbles: true,
              cancelable: true
            });
            swiper.wrapperEl.dispatchEvent(evt);
          });
        });
      }
    }

    function EffectFade(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        fadeEffect: {
          crossFade: false
        }
      });
      const setTranslate = () => {
        const {
          slides
        } = swiper;
        const params = swiper.params.fadeEffect;
        for (let i = 0; i < slides.length; i += 1) {
          const slideEl = swiper.slides[i];
          const offset = slideEl.swiperSlideOffset;
          let tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
          const targetEl = effectTarget(params, slideEl);
          targetEl.style.opacity = slideOpacity;
          targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
        }
      };
      const setTransition = duration => {
        const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
        transformElements.forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
        });
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformElements,
          allSlides: true
        });
      };
      effectInit({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCube(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      });
      const createSlideShadows = (slideEl, progress, isHorizontal) => {
        let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
          shadowBefore = createElement('div', `swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`);
          slideEl.append(shadowBefore);
        }
        if (!shadowAfter) {
          shadowAfter = createElement('div', `swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`);
          slideEl.append(shadowAfter);
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
      };
      const recreateShadows = () => {
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.forEach(slideEl => {
          const progress = Math.max(Math.min(slideEl.progress, 1), -1);
          createSlideShadows(slideEl, progress, isHorizontal);
        });
      };
      const setTranslate = () => {
        const {
          el,
          wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
          browser
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            cubeShadowEl = swiper.slidesEl.querySelector('.swiper-cube-shadow');
            if (!cubeShadowEl) {
              cubeShadowEl = createElement('div', 'swiper-cube-shadow');
              swiper.slidesEl.append(cubeShadowEl);
            }
            cubeShadowEl.style.height = `${swiperWidth}px`;
          } else {
            cubeShadowEl = el.querySelector('.swiper-cube-shadow');
            if (!cubeShadowEl) {
              cubeShadowEl = createElement('div', 'swiper-cube-shadow');
              el.append(cubeShadowEl);
            }
          }
        }
        for (let i = 0; i < slides.length; i += 1) {
          const slideEl = slides[i];
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min(slideEl.progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }
          if (rtl) {
            tx = -tx;
          }
          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }
          const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }
          slideEl.style.transform = transform;
          if (params.slideShadows) {
            createSlideShadows(slideEl, progress, isHorizontal);
          }
        }
        wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
        wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
        if (params.shadow) {
          if (isHorizontal) {
            cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset = params.shadowOffset;
            cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
          }
        }
        const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
        wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
        wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
      };
      const setTransition = duration => {
        const {
          el,
          slides
        } = swiper;
        slides.forEach(slideEl => {
          slideEl.style.transitionDuration = `${duration}ms`;
          slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
            subEl.style.transitionDuration = `${duration}ms`;
          });
        });
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          const shadowEl = el.querySelector('.swiper-cube-shadow');
          if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
        }
      };
      effectInit({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.cubeEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        })
      });
    }

    function createShadow(params, slideEl, side) {
      const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
      const shadowContainer = getSlideTransformEl(slideEl);
      let shadowEl = shadowContainer.querySelector(`.${shadowClass}`);
      if (!shadowEl) {
        shadowEl = createElement('div', `swiper-slide-shadow${side ? `-${side}` : ''}`);
        shadowContainer.append(shadowEl);
      }
      return shadowEl;
    }

    function EffectFlip(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      });
      const createSlideShadows = (slideEl, progress, params) => {
        let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBefore) {
          shadowBefore = createShadow(params, slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }
        if (!shadowAfter) {
          shadowAfter = createShadow(params, slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }
        if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
        if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
      };
      const recreateShadows = () => {
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.forEach(slideEl => {
          let progress = slideEl.progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min(slideEl.progress, 1), -1);
          }
          createSlideShadows(slideEl, progress, params);
        });
      };
      const setTranslate = () => {
        const {
          slides,
          rtlTranslate: rtl
        } = swiper;
        const params = swiper.params.flipEffect;
        for (let i = 0; i < slides.length; i += 1) {
          const slideEl = slides[i];
          let progress = slideEl.progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min(slideEl.progress, 1), -1);
          }
          const offset = slideEl.swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
          slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
          if (params.slideShadows) {
            createSlideShadows(slideEl, progress, params);
          }
          const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          const targetEl = effectTarget(params, slideEl);
          targetEl.style.transform = transform;
        }
      };
      const setTransition = duration => {
        const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
        transformElements.forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
          el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
            shadowEl.style.transitionDuration = `${duration}ms`;
          });
        });
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformElements
        });
      };
      effectInit({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.flipEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCoverflow(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true
        }
      });
      const setTranslate = () => {
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth;
        // Each slide offset from center
        for (let i = 0, length = slides.length; i < length; i += 1) {
          const slideEl = slides[i];
          const slideSize = slidesSizesGrid[i];
          const slideOffset = slideEl.swiperSlideOffset;
          const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
          const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
          // var rotateZ = 0
          let translateZ = -translate * Math.abs(offsetMultiplier);
          let stretch = params.stretch;
          // Allow percentage to make a relative stretch for responsive sliders
          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }
          let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

          // Fix for ultra small values
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
          const targetEl = effectTarget(params, slideEl);
          targetEl.style.transform = slideTransform;
          slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
          if (params.slideShadows) {
            // Set shadows
            let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBeforeEl) {
              shadowBeforeEl = createShadow(params, slideEl, isHorizontal ? 'left' : 'top');
            }
            if (!shadowAfterEl) {
              shadowAfterEl = createShadow(params, slideEl, isHorizontal ? 'right' : 'bottom');
            }
            if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      };
      const setTransition = duration => {
        const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
        transformElements.forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
          el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
            shadowEl.style.transitionDuration = `${duration}ms`;
          });
        });
      };
      effectInit({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true
        })
      });
    }

    function EffectCreative(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: false,
          progressMultiplier: 1,
          perspective: true,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });
      const getTranslateValue = value => {
        if (typeof value === 'string') return value;
        return `${value}px`;
      };
      const setTranslate = () => {
        const {
          slides,
          wrapperEl,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.creativeEffect;
        const {
          progressMultiplier: multiplier
        } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
          const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
          wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
        }
        for (let i = 0; i < slides.length; i += 1) {
          const slideEl = slides[i];
          const slideProgress = slideEl.progress;
          const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
          let originalProgress = progress;
          if (!isCenteredSlides) {
            originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
          }
          const offset = slideEl.swiperSlideOffset;
          const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
          const r = [0, 0, 0];
          let custom = false;
          if (!swiper.isHorizontal()) {
            t[1] = t[0];
            t[0] = 0;
          }
          let data = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          if (progress < 0) {
            data = params.next;
            custom = true;
          } else if (progress > 0) {
            data = params.prev;
            custom = true;
          }
          // set translate
          t.forEach((value, index) => {
            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
          });
          // set rotates
          r.forEach((value, index) => {
            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
          });
          slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const translateString = t.join(', ');
          const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
          const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
          const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
          const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

          // Set shadows
          if (custom && data.shadow || !custom) {
            let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
            if (!shadowEl && data.shadow) {
              shadowEl = createShadow(params, slideEl);
            }
            if (shadowEl) {
              const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
              shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
            }
          }
          const targetEl = effectTarget(params, slideEl);
          targetEl.style.transform = transform;
          targetEl.style.opacity = opacityString;
          if (data.origin) {
            targetEl.style.transformOrigin = data.origin;
          }
        }
      };
      const setTransition = duration => {
        const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
        transformElements.forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
          el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
            shadowEl.style.transitionDuration = `${duration}ms`;
          });
        });
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformElements,
          allSlides: true
        });
      };
      effectInit({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => swiper.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCards(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cardsEffect: {
          slideShadows: true,
          rotate: true,
          perSlideRotate: 2,
          perSlideOffset: 8
        }
      });
      const setTranslate = () => {
        const {
          slides,
          activeIndex,
          rtlTranslate: rtl
        } = swiper;
        const params = swiper.params.cardsEffect;
        const {
          startTranslate,
          isTouched
        } = swiper.touchEventsData;
        const currentTranslate = rtl ? -swiper.translate : swiper.translate;
        for (let i = 0; i < slides.length; i += 1) {
          const slideEl = slides[i];
          const slideProgress = slideEl.progress;
          const progress = Math.min(Math.max(slideProgress, -4), 4);
          let offset = slideEl.swiperSlideOffset;
          if (swiper.params.centeredSlides && !swiper.params.cssMode) {
            swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
          }
          if (swiper.params.centeredSlides && swiper.params.cssMode) {
            offset -= slides[0].swiperSlideOffset;
          }
          let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let tY = 0;
          const tZ = -100 * Math.abs(progress);
          let scale = 1;
          let rotate = -params.perSlideRotate * progress;
          let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
          const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
          const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
          const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
          if (isSwipeToNext || isSwipeToPrev) {
            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
            rotate += -28 * progress * subProgress;
            scale += -0.5 * subProgress;
            tXAdd += 96 * subProgress;
            tY = `${-25 * subProgress * Math.abs(progress)}%`;
          }
          if (progress < 0) {
            // next
            tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
          } else if (progress > 0) {
            // prev
            tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
          } else {
            tX = `${tX}px`;
          }
          if (!swiper.isHorizontal()) {
            const prevY = tY;
            tY = tX;
            tX = prevY;
          }
          const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

          /* eslint-disable */
          const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
          /* eslint-enable */

          if (params.slideShadows) {
            // Set shadows
            let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
            if (!shadowEl) {
              shadowEl = createShadow(params, slideEl);
            }
            if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
          }
          slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const targetEl = effectTarget(params, slideEl);
          targetEl.style.transform = transform;
        }
      };
      const setTransition = duration => {
        const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
        transformElements.forEach(el => {
          el.style.transitionDuration = `${duration}ms`;
          el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
            shadowEl.style.transitionDuration = `${duration}ms`;
          });
        });
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformElements
        });
      };
      effectInit({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);

    return Swiper;

}));
//# sourceMappingURL=swiper-bundle.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/aos */ "./src/js/vendor/aos.js");
/* harmony import */ var _vendor_aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendor_aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_swiper_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/swiper-bundle */ "./src/js/vendor/swiper-bundle.js");
/* harmony import */ var _vendor_swiper_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_swiper_bundle__WEBPACK_IMPORTED_MODULE_5__);






var swiper = new (_vendor_swiper_bundle__WEBPACK_IMPORTED_MODULE_5___default())(".swiper", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  lazy: {
    loadPrevNext: true
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
_vendor_aos__WEBPACK_IMPORTED_MODULE_4___default().init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 600,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});

const btnColumns = document.getElementById('columns');
const columnsItem = document.querySelectorAll('.sidebar__item');
btnColumns.addEventListener('click', () => {
  console.log('click');
  console.log(columnsItem);
  columnsItem.forEach(el => {
    el.classList.toggle('visible');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map