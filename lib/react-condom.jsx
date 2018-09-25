module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _react = __webpack_require__(1);

  var React = _interopRequireWildcard(_react);

  var _propTypes = __webpack_require__(4);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var propTypes = {
    ruleSet: _propTypes2.default.string.isRequired,
    rule: _propTypes2.default.string.isRequired,
    fallBack: _propTypes2.default.any
  };

  var defaultProps = {
    ruleSet: [''],
    rule: '',
    fallBack: React.createElement('span', null)
  };

  var ReactCondom = function (_React$Component) {
    _inherits(ReactCondom, _React$Component);

    function ReactCondom(props) {
      _classCallCheck(this, ReactCondom);

      return _possibleConstructorReturn(this, (ReactCondom.__proto__ || Object.getPrototypeOf(ReactCondom)).call(this, props));
    }

    _createClass(ReactCondom, [{
      key: 'render',
      value: function render() {
        if (this.props.ruleSet.indexOf(rule) > -1) {
          return React.createElement('div', null, this.props.children);
        } else {
          return React.createElement('div', null, this.props.fallBack);
        }
      }
    }]);

    return ReactCondom;
  }(React.Component);

  ReactCondom.propTypes = propTypes;
  ReactCondom.defaultProps = defaultProps;

  exports.default = ReactCondom;

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  if (true) {
    module.exports = __webpack_require__(2);
  } else {}

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /** @license React v16.5.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var m = __webpack_require__(3),
      n = "function" === typeof Symbol && Symbol.for,
      p = n ? Symbol.for("react.element") : 60103,
      q = n ? Symbol.for("react.portal") : 60106,
      r = n ? Symbol.for("react.fragment") : 60107,
      t = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      v = n ? Symbol.for("react.provider") : 60109,
      w = n ? Symbol.for("react.context") : 60110,
      x = n ? Symbol.for("react.async_mode") : 60111,
      y = n ? Symbol.for("react.forward_ref") : 60112;n && Symbol.for("react.placeholder");
  var z = "function" === typeof Symbol && Symbol.iterator;function A(a, b, d, c, e, g, h, f) {
    if (!a) {
      a = void 0;if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var k = [d, c, e, g, h, f],
            l = 0;a = Error(b.replace(/%s/g, function () {
          return k[l++];
        }));a.name = "Invariant Violation";
      }a.framesToPop = 1;throw a;
    }
  }
  function B(a) {
    for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
      d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
    }A(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
  }var C = { isMounted: function isMounted() {
      return !1;
    }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} },
      D = {};
  function E(a, b, d) {
    this.props = a;this.context = b;this.refs = D;this.updater = d || C;
  }E.prototype.isReactComponent = {};E.prototype.setState = function (a, b) {
    "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && "function" !== typeof a && null != a ? B("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
  };E.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };function F() {}F.prototype = E.prototype;function G(a, b, d) {
    this.props = a;this.context = b;this.refs = D;this.updater = d || C;
  }var H = G.prototype = new F();
  H.constructor = G;m(H, E.prototype);H.isPureReactComponent = !0;var I = { current: null, currentDispatcher: null },
      J = Object.prototype.hasOwnProperty,
      K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(a, b, d) {
    var c = void 0,
        e = {},
        g = null,
        h = null;if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
      J.call(b, c) && !K.hasOwnProperty(c) && (e[c] = b[c]);
    }var f = arguments.length - 2;if (1 === f) e.children = d;else if (1 < f) {
      for (var k = Array(f), l = 0; l < f; l++) {
        k[l] = arguments[l + 2];
      }e.children = k;
    }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
      void 0 === e[c] && (e[c] = f[c]);
    }return { $$typeof: p, type: a, key: g, ref: h, props: e, _owner: I.current };
  }
  function M(a, b) {
    return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }function N(a) {
    return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && a.$$typeof === p;
  }function escape(a) {
    var b = { "=": "=0", ":": "=2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a];
    });
  }var O = /\/+/g,
      P = [];function Q(a, b, d, c) {
    if (P.length) {
      var e = P.pop();e.result = a;e.keyPrefix = b;e.func = d;e.context = c;e.count = 0;return e;
    }return { result: a, keyPrefix: b, func: d, context: c, count: 0 };
  }
  function R(a) {
    a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > P.length && P.push(a);
  }
  function S(a, b, d, c) {
    var e = typeof a === 'undefined' ? 'undefined' : _typeof(a);if ("undefined" === e || "boolean" === e) a = null;var g = !1;if (null === a) g = !0;else switch (e) {case "string":case "number":
        g = !0;break;case "object":
        switch (a.$$typeof) {case p:case q:
            g = !0;}}if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
      e = a[h];var f = b + T(e, h);g += S(e, f, d, c);
    } else if (null === a || "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? f = null : (f = z && a[z] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) {
      e = e.value, f = b + T(e, h++), g += S(e, f, d, c);
    } else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));return g;
  }function U(a, b, d) {
    return null == a ? 0 : S(a, "", b, d);
  }function T(a, b) {
    return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
  }function V(a, b) {
    a.func.call(a.context, b, a.count++);
  }
  function aa(a, b, d) {
    var c = a.result,
        e = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? W(a, c, d, function (a) {
      return a;
    }) : null != a && (N(a) && (a = M(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
  }function W(a, b, d, c, e) {
    var g = "";null != d && (g = ("" + d).replace(O, "$&/") + "/");b = Q(b, g, c, e);U(a, aa, b);R(b);
  }function ba(a, b) {
    var d = I.currentDispatcher;null === d ? B("277") : void 0;return d.readContext(a, b);
  }
  var X = { Children: { map: function map(a, b, d) {
        if (null == a) return a;var c = [];W(a, c, null, b, d);return c;
      }, forEach: function forEach(a, b, d) {
        if (null == a) return a;b = Q(null, null, b, d);U(a, V, b);R(b);
      }, count: function count(a) {
        return U(a, function () {
          return null;
        }, null);
      }, toArray: function toArray(a) {
        var b = [];W(a, b, null, function (a) {
          return a;
        });return b;
      }, only: function only(a) {
        N(a) ? void 0 : B("143");return a;
      } }, createRef: function createRef() {
      return { current: null };
    }, Component: E, PureComponent: G, createContext: function createContext(a, b) {
      void 0 === b && (b = null);a = { $$typeof: w, _calculateChangedBits: b,
        _currentValue: a, _currentValue2: a, Provider: null, Consumer: null, unstable_read: null };a.Provider = { $$typeof: v, _context: a };a.Consumer = a;a.unstable_read = ba.bind(null, a);return a;
    }, forwardRef: function forwardRef(a) {
      return { $$typeof: y, render: a };
    }, Fragment: r, StrictMode: t, unstable_AsyncMode: x, unstable_Profiler: u, createElement: L, cloneElement: function cloneElement(a, b, d) {
      null === a || void 0 === a ? B("267", a) : void 0;var c = void 0,
          e = m({}, a.props),
          g = a.key,
          h = a.ref,
          f = a._owner;if (null != b) {
        void 0 !== b.ref && (h = b.ref, f = I.current);void 0 !== b.key && (g = "" + b.key);
        var k = void 0;a.type && a.type.defaultProps && (k = a.type.defaultProps);for (c in b) {
          J.call(b, c) && !K.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== k ? k[c] : b[c]);
        }
      }c = arguments.length - 2;if (1 === c) e.children = d;else if (1 < c) {
        k = Array(c);for (var l = 0; l < c; l++) {
          k[l] = arguments[l + 2];
        }e.children = k;
      }return { $$typeof: p, type: a.type, key: g, ref: h, props: e, _owner: f };
    }, createFactory: function createFactory(a) {
      var b = L.bind(null, a);b.type = a;return b;
    }, isValidElement: N, version: "16.5.2", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: I,
      assign: m } },
      Y = { default: X },
      Z = Y && X || Y;module.exports = Z.default || Z;

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = __webpack_require__(5)();
  }

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = __webpack_require__(6);

  function emptyFunction() {}

  module.exports = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    };
    shim.isRequired = shim;
    function getShim() {
      return shim;
    };
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim
    };

    ReactPropTypes.checkPropTypes = emptyFunction;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;

  /***/
}]
/******/);

/***/ })
/******/ ]);