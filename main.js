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
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(26);
var anObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(14);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(30);
var has = __webpack_require__(4);
var uid = __webpack_require__(31);
var NATIVE_SYMBOL = __webpack_require__(38);
var USE_SYMBOL_AS_UID = __webpack_require__(56);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(24).f;
var createNonEnumerableProperty = __webpack_require__(8);
var redefine = __webpack_require__(44);
var setGlobal = __webpack_require__(15);
var copyConstructorProperties = __webpack_require__(48);
var isForced = __webpack_require__(54);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var definePropertyModule = __webpack_require__(5);
var createPropertyDescriptor = __webpack_require__(10);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(25);
var requireObjectCoercible = __webpack_require__(13);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(8);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(15);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(50);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6);
var create = __webpack_require__(62);
var definePropertyModule = __webpack_require__(5);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var fails = __webpack_require__(1);
var has = __webpack_require__(4);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var fails = __webpack_require__(1);
var isArray = __webpack_require__(35);
var isObject = __webpack_require__(3);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(19);
var createProperty = __webpack_require__(55);
var arraySpeciesCreate = __webpack_require__(37);
var arrayMethodHasSpeciesSupport = __webpack_require__(57);
var wellKnownSymbol = __webpack_require__(6);
var V8_VERSION = __webpack_require__(39);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var propertyIsEnumerableModule = __webpack_require__(43);
var createPropertyDescriptor = __webpack_require__(10);
var toIndexedObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(14);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(26);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(12);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(27);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(3);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(16);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30);
var uid = __webpack_require__(31);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(47);
var store = __webpack_require__(16);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIndexedObject = __webpack_require__(11);
var indexOf = __webpack_require__(33).indexOf;
var hiddenKeys = __webpack_require__(17);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(11);
var toLength = __webpack_require__(19);
var toAbsoluteIndex = __webpack_require__(52);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(12);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(13);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var isArray = __webpack_require__(35);
var wellKnownSymbol = __webpack_require__(6);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(58);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(60);
var IndexedObject = __webpack_require__(25);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(19);
var arraySpeciesCreate = __webpack_require__(37);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var defineProperty = __webpack_require__(5).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(8);
var has = __webpack_require__(4);
var setGlobal = __webpack_require__(15);
var inspectSource = __webpack_require__(28);
var InternalStateModule = __webpack_require__(45);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(46);
var global = __webpack_require__(0);
var isObject = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(8);
var objectHas = __webpack_require__(4);
var shared = __webpack_require__(16);
var sharedKey = __webpack_require__(29);
var hiddenKeys = __webpack_require__(17);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var inspectSource = __webpack_require__(28);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var ownKeys = __webpack_require__(49);
var getOwnPropertyDescriptorModule = __webpack_require__(24);
var definePropertyModule = __webpack_require__(5);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);
var getOwnPropertyNamesModule = __webpack_require__(51);
var getOwnPropertySymbolsModule = __webpack_require__(53);
var anObject = __webpack_require__(9);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(20);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(14);
var definePropertyModule = __webpack_require__(5);
var createPropertyDescriptor = __webpack_require__(10);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(38);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(6);
var V8_VERSION = __webpack_require__(39);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $find = __webpack_require__(40).find;
var addToUnscopables = __webpack_require__(21);
var arrayMethodUsesToLength = __webpack_require__(22);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(61);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var defineProperties = __webpack_require__(63);
var enumBugKeys = __webpack_require__(20);
var hiddenKeys = __webpack_require__(17);
var html = __webpack_require__(65);
var documentCreateElement = __webpack_require__(27);
var sharedKey = __webpack_require__(29);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);
var definePropertyModule = __webpack_require__(5);
var anObject = __webpack_require__(9);
var objectKeys = __webpack_require__(64);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(20);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $findIndex = __webpack_require__(40).findIndex;
var addToUnscopables = __webpack_require__(21);
var arrayMethodUsesToLength = __webpack_require__(22);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var $includes = __webpack_require__(33).includes;
var addToUnscopables = __webpack_require__(21);
var arrayMethodUsesToLength = __webpack_require__(22);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7);
var notARegExp = __webpack_require__(69);
var requireObjectCoercible = __webpack_require__(13);
var correctIsRegExpLogic = __webpack_require__(71);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(70);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var classof = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(6);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(6);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/css/main.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/js/HometaskSwitch.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HometaskSwitch = /*#__PURE__*/function () {
  function HometaskSwitch() {
    _classCallCheck(this, HometaskSwitch);
  }

  _createClass(HometaskSwitch, null, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var tasks = document.getElementsByClassName('hometask');

      var _iterator = _createForOfIteratorHelper(tasks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;
          task.addEventListener('click', this.switchTask);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "switchTask",
    value: function switchTask(e) {
      var target = e.target;
      e.preventDefault();
      var activeTask = document.getElementsByClassName('hometask_active')[0];

      if (target === activeTask) {
        return;
      }

      activeTask.classList.remove('hometask_active');
      target.classList.add('hometask_active');
      var activeSection = document.querySelector("section[data-section=\"".concat(activeTask.dataset.section, "\"]"));
      var newActiveSection = document.querySelector("section[data-section=\"".concat(target.dataset.section, "\"]"));
      activeSection.classList.add('hidden');
      newActiveSection.classList.remove('hidden');
    }
  }]);

  return HometaskSwitch;
}();


// CONCATENATED MODULE: ./src/js/goblin-game/RenderTable.js
function RenderTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RenderTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RenderTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) RenderTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) RenderTable_defineProperties(Constructor, staticProps); return Constructor; }

var RenderTable = /*#__PURE__*/function () {
  function RenderTable() {
    RenderTable_classCallCheck(this, RenderTable);
  }

  RenderTable_createClass(RenderTable, null, [{
    key: "render",
    value: function render(rows, cols) {
      var field = document.getElementsByClassName('field')[0];
      var fieldNew = document.createElement('div');
      fieldNew.className = 'field';

      for (var i = 0; i < rows; i += 1) {
        var row = document.createElement('div');
        row.className = 'row';

        for (var j = 0; j < cols; j += 1) {
          var hole = document.createElement('div');
          hole.className = 'hole';
          row.appendChild(hole);
        }

        fieldNew.appendChild(row);
      }

      field.replaceWith(fieldNew);
    }
  }]);

  return RenderTable;
}();


// CONCATENATED MODULE: ./src/img/goblin.png
/* harmony default export */ var goblin = (__webpack_require__.p + "2dbd01ce16c0fa83cb67e20c73dedb66.png");
// CONCATENATED MODULE: ./src/js/goblin-game/GoblinGame.js
function GoblinGame_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = GoblinGame_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function GoblinGame_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GoblinGame_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GoblinGame_arrayLikeToArray(o, minLen); }

function GoblinGame_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GoblinGame_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoblinGame_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoblinGame_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoblinGame_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoblinGame_defineProperties(Constructor, staticProps); return Constructor; }



var GoblinGame_GoblinGame = /*#__PURE__*/function () {
  function GoblinGame(holes, kills, misses, interval) {
    GoblinGame_classCallCheck(this, GoblinGame);

    if (holes < 2) {
      throw new Error('Need at least 2 holes');
    }

    this.holes = holes;
    this.killsToWin = kills;
    this.missesToLose = misses;
    this.intervalTime = interval;
    this.isKilled = false;
    this.killCount = 0;
    this.loseCount = 0;
    this.addEventListeners();
  }

  GoblinGame_createClass(GoblinGame, [{
    key: "createHoleImg",
    value: function createHoleImg() {
      var goblinImg = document.createElement('img');
      goblinImg.className = 'goblin-image';
      goblinImg.src = goblin;
      return goblinImg;
    }
  }, {
    key: "generateNumber",
    value: function generateNumber() {
      var index = this.activeHole;

      do {
        index = Math.floor(Math.random() * this.holes);
      } while (index === this.activeHole);

      return index;
    }
  }, {
    key: "moveToHole",
    value: function moveToHole(index) {
      var img = document.querySelector('.goblin-image');
      img === null || img === void 0 ? void 0 : img.classList.remove('animated');
      var holesList = document.getElementsByClassName('hole');

      if (this.holeElem) {
        holesList[index].appendChild(this.holeElem);
        this.activeHole = index;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.holeElem = this.createHoleImg();
      this.moveToHole(this.generateNumber());
      this.holeMoveInterval = setInterval(function () {
        if (!_this.isKilled) {
          _this.loseCount += 1;
        } else {
          _this.isKilled = false;
        }

        var index = _this.generateNumber();

        _this.changeCounters();

        _this.checkForWinOrLose();

        _this.moveToHole(index);
      }, this.intervalTime);
    }
  }, {
    key: "reset",
    value: function reset() {
      clearInterval(this.holeMoveInterval);
      var holeElem = this.holeElem;
      holeElem === null || holeElem === void 0 ? void 0 : holeElem.remove();
      this.holeElem = null;
      this.isKilled = false;
      this.killCount = 0;
      this.loseCount = 0;
      this.changeCounters();
    }
  }, {
    key: "clickOnHole",
    value: function clickOnHole(target) {
      var _hole$firstChild;

      var hole = target.closest('.hole');

      if (((_hole$firstChild = hole.firstChild) === null || _hole$firstChild === void 0 ? void 0 : _hole$firstChild.tagName) === 'IMG' && !this.isKilled) {
        this.isKilled = true;
        this.killCount += 1;
        this.changeCounters();
      }
    }
  }, {
    key: "changeCounters",
    value: function changeCounters() {
      var killCounter = document.getElementById('kill-counter');
      var loseCounter = document.getElementById('lose-counter');
      killCounter.textContent = this.killCount;
      loseCounter.textContent = this.loseCount;
    }
  }, {
    key: "checkForWinOrLose",
    value: function checkForWinOrLose() {
      if (this.killCount === this.killsToWin) {
        this.reset();
        alert('Победа :)');
      }

      if (this.loseCount === this.missesToLose) {
        this.reset();
        alert('Поражение :(');
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;

      var holeElems = document.getElementsByClassName('hole');

      var _iterator = GoblinGame_createForOfIteratorHelper(holeElems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var hole = _step.value;
          hole.addEventListener('click', function (e) {
            var img = document.querySelector('.goblin-image');

            _this2.clickOnHole(e.target);

            img === null || img === void 0 ? void 0 : img.addEventListener('click', function () {
              img.classList.add('animated');
            });
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var startBtn = document.getElementById('start');
      startBtn.addEventListener('click', function () {
        _this2.reset();

        _this2.start();
      });
      var resetBtn = document.getElementById('reset');
      resetBtn.addEventListener('click', function () {
        _this2.reset();
      });
    }
  }]);

  return GoblinGame;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(68);

// CONCATENATED MODULE: ./src/js/top-tasks/Task.js


function Task_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task(name) {
  Task_classCallCheck(this, Task);

  this.name = name;
  this.isPinned = false;
  this.date = new Date();
};


// CONCATENATED MODULE: ./src/js/top-tasks/TaskManager.js







function TaskManager_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = TaskManager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function TaskManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TaskManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TaskManager_arrayLikeToArray(o, minLen); }

function TaskManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TaskManager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TaskManager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TaskManager_createClass(Constructor, protoProps, staticProps) { if (protoProps) TaskManager_defineProperties(Constructor.prototype, protoProps); if (staticProps) TaskManager_defineProperties(Constructor, staticProps); return Constructor; }



var TaskManager_TaskManager = /*#__PURE__*/function () {
  function TaskManager(data) {
    TaskManager_classCallCheck(this, TaskManager);

    this.data = data || [];
    this.addEventListeners();
  }

  TaskManager_createClass(TaskManager, [{
    key: "renderTaskList",
    value: function renderTaskList(filter) {
      var allTasks = document.getElementById('all-tasks');
      var pinnedTasks = document.getElementById('pinned-tasks');
      allTasks.innerHTML = '';
      pinnedTasks.innerHTML = '';

      var _iterator = TaskManager_createForOfIteratorHelper(this.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var task = _step.value;

          if (task.isPinned) {
            var _taskElem = this.createTaskElem(task);

            pinnedTasks.appendChild(_taskElem);
            continue;
          }

          if (filter && !task.name.toLowerCase().includes(filter.toLowerCase())) {
            // весьма длинновато
            continue;
          }

          var taskElem = this.createTaskElem(task);
          allTasks.appendChild(taskElem);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var descriptions = [document.getElementById('no-pinned'), document.getElementById('no-tasks')];

      for (var _i = 0, _descriptions = descriptions; _i < _descriptions.length; _i++) {
        var elem = _descriptions[_i];

        if (elem.parentElement.querySelector('.task-item')) {
          elem.classList.add('hidden');
        } else {
          elem.classList.remove('hidden');
        }
      }
    }
  }, {
    key: "createTaskElem",
    value: function createTaskElem(task) {
      var taskElem = document.createElement('li');
      taskElem.className = 'task-item';
      taskElem.innerHTML = "\n    <span class=\"task-name\">".concat(task.name, "</span>\n    <input class=\"pin\" type=\"checkbox\"").concat(task.isPinned ? ' checked' : '', ">");
      return taskElem;
    }
  }, {
    key: "pushNewTask",
    value: function pushNewTask(name) {
      this.data.push(new Task(name));
      var input = document.getElementsByClassName('tasks-input')[0];
      input.value = '';
      this.renderTaskList();
    }
  }, {
    key: "showError",
    value: function showError() {
      var errorPopup = document.getElementById('error-popup');
      errorPopup.classList.remove('hidden');
      clearTimeout(this.errorTimeout);
      this.errorTimeout = setTimeout(function () {
        errorPopup.classList.add('hidden');
      }, 1000);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var input = document.getElementsByClassName('tasks-input')[0];
      input.addEventListener('input', function (e) {
        _this.renderTaskList(input.value);
      });
      document.addEventListener('keydown', function (e) {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && input === document.activeElement) {
          if (!input.value) {
            _this.showError();

            return;
          }

          if (_this.data.findIndex(function (elem) {
            return elem.name === input.value;
          }) !== -1) {
            console.log('This task already exists'); // попапы кончились, перезвоните через неделю
          } else {
            _this.pushNewTask(input.value);
          }
        }
      });
      document.addEventListener('change', function (e) {
        var target = e.target;

        if (target.classList.contains('pin')) {
          var taskName = target.previousElementSibling.textContent;

          var task = _this.data.find(function (elem) {
            return elem.name === taskName;
          });

          task.isPinned = target.checked;

          _this.renderTaskList(input.value);
        }
      });
    }
  }]);

  return TaskManager;
}();


// CONCATENATED MODULE: ./src/js/image-gallery/ImageGallery.js


function ImageGallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImageGallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImageGallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageGallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageGallery_defineProperties(Constructor, staticProps); return Constructor; }

var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery() {
    ImageGallery_classCallCheck(this, ImageGallery);
  }

  ImageGallery_createClass(ImageGallery, null, [{
    key: "insertImage",
    value: function insertImage(img, title) {
      var imgBlock = document.createElement('div');
      imgBlock.className = 'image-wrapper';
      imgBlock.innerHTML = "\n    <figure>\n      ".concat(img.outerHTML, "\n      <figcaption>").concat(title, "</figcaption>\n    </figure>\n    <button class=\"delete-image\">\xD7</button>\n    ");
      var imgGallery = document.getElementsByClassName('image-gallery')[0];
      imgGallery.appendChild(imgBlock);
    }
  }]);

  return ImageGallery;
}();


// CONCATENATED MODULE: ./src/js/image-gallery/GalleryForm.js
function GalleryForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryForm_defineProperties(Constructor, staticProps); return Constructor; }



var GalleryForm_GalleryForm = /*#__PURE__*/function () {
  function GalleryForm() {
    GalleryForm_classCallCheck(this, GalleryForm);

    this.submit = null;
  }

  GalleryForm_createClass(GalleryForm, [{
    key: "validateImage",
    value: function validateImage(url, title) {
      var _this = this;

      var img = document.createElement('img');

      img.onload = function () {
        ImageGallery.insertImage(img, title);

        _this.clearForm();
      };

      img.onerror = function () {
        _this.showError('url');
      };

      img.src = url;
    }
  }, {
    key: "showError",
    value: function showError(name) {
      // а вот здесь уже лень делать полноценные попапы...
      switch (name) {
        case 'title':
          console.log('No title!');
          break;

        case 'url':
          console.log('Wrong url!');
      }
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var form = document.getElementById('form');
      form.reset();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;

      var form = document.getElementById('form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var titleInput = document.getElementById('title-input');
        var urlInput = document.getElementById('url-input');

        if (!titleInput.value) {
          _this2.showError('title');

          return;
        }

        _this2.validateImage(urlInput.value, titleInput.value);
      });
      document.addEventListener('click', function (e) {
        var target = e.target;

        if (target.closest('.delete-image')) {
          target.closest('.image-wrapper').remove();
        }
      });
    }
  }]);

  return GalleryForm;
}();


// CONCATENATED MODULE: ./src/js/data.js
var taskData = [{
  name: 'Погладить кота',
  isPinned: false,
  date: new Date()
}, {
  name: 'Погладить одежду',
  isPinned: false,
  date: new Date()
}, {
  name: 'Прогладить кота',
  isPinned: true,
  date: new Date()
}, {
  name: 'Активно проглаживать кота',
  isPinned: true,
  date: new Date()
}, {
  name: 'Покормить кота',
  isPinned: false,
  date: new Date()
}, {
  name: 'Почесать кота',
  isPinned: false,
  date: new Date()
}, {
  name: 'Поиграть с котом',
  isPinned: false,
  date: new Date()
}, {
  name: 'Сфотографировать кота',
  isPinned: false,
  date: new Date()
}, {
  name: 'Снять кота на видео',
  isPinned: false,
  date: new Date()
}, {
  name: 'Обсудить с котом новые идеи',
  isPinned: false,
  date: new Date()
}, {
  name: 'Вернуть коту долг',
  isPinned: false,
  date: new Date()
}, {
  name: 'Приготовить коту еду',
  isPinned: false,
  date: new Date()
}, {
  name: 'ВСЕГДА ГЛАДИТЬ КОТА',
  isPinned: true,
  date: new Date()
}];
// CONCATENATED MODULE: ./src/js/app.js






HometaskSwitch.addEventListeners();
RenderTable.render(4, 4);
var goblinGame = new GoblinGame_GoblinGame(16, 5, 5, 1000);
var taskManager = new TaskManager_TaskManager(taskData);
taskManager.renderTaskList();
var galleryForm = new GalleryForm_GalleryForm();
galleryForm.addEventListeners();
// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);