(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("inMap", [], factory);
	else if(typeof exports === 'object')
		exports["inMap"] = factory();
	else
		root["inMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chunk = exports.extend = exports.isPromiseLike = exports.isEmpty = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeOf = typeOf;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isObject = isObject;
exports.isArray = isArray;
exports.setDevicePixelRatio = setDevicePixelRatio;
exports.encodeHTML = encodeHTML;
exports.isPolyContains = isPolyContains;
exports.isPolyContainsPt = isPolyContainsPt;
exports.detectmob = detectmob;
exports.merge = merge;

var _deepmerge = __webpack_require__(9);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}
function isNumber(num) {
    return typeOf(num) == 'number';
}
function isBoolean(obj) {
    return typeOf(obj) == 'boolean';
}
function isFunction(func) {
    return typeOf(func) == 'function';
}

function isString(string) {
    return typeOf(string) == 'string';
}

function isObject(object) {
    return typeOf(object) == 'object';
}
function isArray(source) {
    return typeOf(source) == 'array';
}
var isEmpty = exports.isEmpty = function isEmpty(val) {
    return val == null || !(Object.keys(val) || val).length;
};

var isPromiseLike = exports.isPromiseLike = function isPromiseLike(obj) {
    return obj !== null && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

var extend = exports.extend = function extend(target, source) {

    if (target && source && isObject(source)) {
        for (var p in source) {
            target[p] = source[p];
        }

        var prototype_fields = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

        for (var j = 0, key; j < prototype_fields.length; j++) {
            key = prototype_fields[j];
            if (Object.prototype.constructor.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function setDevicePixelRatio(context) {
    var devicePixelRatio = window.devicePixelRatio;
    context.canvas.width = context.canvas.width * devicePixelRatio;
    context.canvas.height = context.canvas.height * devicePixelRatio;
    context.canvas.style.width = context.canvas.width / devicePixelRatio + 'px';
    context.canvas.style.height = context.canvas.height / devicePixelRatio + 'px';

    context.scale(devicePixelRatio, devicePixelRatio);
}
function encodeHTML(source) {
    return String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function isPolyContains(lng, lat, pointLat, pointLng) {
    var ret = false;
    var latMin = 90.0;
    var latMax = -90.0;
    var lngMin = 180.0;
    var lngMax = -180.0;
    for (var i = 0; i < lat.length; i++) {
        if (lat[i] > latMax) latMax = lat[i];
        if (lat[i] < latMin) latMin = lat[i];
        if (lng[i] > lngMax) lngMax = lng[i];
        if (lng[i] < lngMin) lngMin = lng[i];
    }
    if (!(pointLat < latMin || pointLat > latMax || pointLng < lngMin || pointLng > lngMax)) {

        for (var _i = 0; _i < lat.length; _i++) {
            var j = (_i + 1) % lat.length;
            if (lat[_i] < pointLat != lat[j] < pointLat && pointLng < (lng[j] - lng[_i]) * (pointLat - lat[_i]) / (lat[j] - lat[_i]) + lng[_i]) {
                ret = !ret;
            }
        }
    }
    return ret;
}
function isPolyContainsPt(lng, lat, geos) {
    var lats = [];
    var lngs = [];
    for (var j = 0, len = geos.length; j < len; j++) {
        lats.push(parseFloat(geos[j][1]));
        lngs.push(parseFloat(geos[j][0]));
    }
    return isPolyContains(lats, lngs, lng, lat);
}

function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}

var chunk = exports.chunk = function chunk(arr, size) {
    return Array.from({
        length: Math.ceil(arr.length / size)
    }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    });
};

function merge() {
    var arr = Array.prototype.slice.call(arguments);
    return _deepmerge2.default.all(arr, {
        arrayMerge: function arrayMerge(destinationArray, sourceArray) {
            if (sourceArray.length > 0) {
                return sourceArray;
            } else {
                return destinationArray;
            }
        }
    });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    computeBefore: 0,
    conputeAfter: 1,
    drawBefore: 2,
    drawAfter: 3
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseClass2 = __webpack_require__(12);

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

var _util = __webpack_require__(0);

var _MapStyle = __webpack_require__(7);

var _Toolbar = __webpack_require__(11);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zIndex = 1;

var CanvasOverlay = exports.CanvasOverlay = function (_BaseClass) {
    _inherits(CanvasOverlay, _BaseClass);

    function CanvasOverlay(opts) {
        _classCallCheck(this, CanvasOverlay);

        var _this = _possibleConstructorReturn(this, (CanvasOverlay.__proto__ || Object.getPrototypeOf(CanvasOverlay)).call(this));

        _this.ctx = null;
        _this.eventType = 'moveend';
        _this.map = null;
        _this.tOnResize = _this.tOnResize.bind(_this);
        _this.tOnMoveend = _this.tOnMoveend.bind(_this);
        _this.tOnZoomstart = _this.tOnZoomstart.bind(_this);
        _this.tOnZoomend = _this.tOnZoomend.bind(_this);
        _this.tOnMoving = _this.tOnMoving.bind(_this);
        _this.tMousemove = _this.tMousemove.bind(_this);
        _this.tMouseClick = _this.tMouseClick.bind(_this);
        _this.devicePixelRatio = window.devicePixelRatio;
        _this.repaintEnd = opts && opts.repaintEnd;
        _this.animationFlag = true;

        return _this;
    }

    _createClass(CanvasOverlay, [{
        key: 'initialize',
        value: function initialize(map) {
            var me = this;
            this.map = map;
            this.container = document.createElement('canvas');
            this.ctx = this.container.getContext('2d');
            this.container.style.cssText = 'position:absolute;left:0;top:0;z-index:' + zIndex++ + ';';
            map.getPanes().mapPane.appendChild(this.container);
            this.setCanvasSize();
            map.addEventListener('resize', me.tOnResize);
            map.addEventListener('moveend', me.tOnMoveend);
            map.addEventListener('moving', me.tOnMoving);
            map.addEventListener('zoomstart', me.tOnZoomstart);
            map.addEventListener('zoomend', me.tOnZoomend);
            map.addEventListener('mousemove', me.tMousemove);
            map.addEventListener('click', me.tMouseClick);
            if (!map.inmapToolBar) {
                map.inmapToolBar = new _Toolbar2.default(map.Va);
            }
            this.legend = map.inmapToolBar.legend;
            this.toolTip = map.inmapToolBar.toolTip;

            this.canvasInit();
            return this.container;
        }
    }, {
        key: 'tMapStyle',
        value: function tMapStyle(skin) {
            var styleJson = null;
            if ((0, _util.isString)(skin)) {
                styleJson = skin == 'Blueness' ? _MapStyle.Blueness : _MapStyle.WhiteLover;
            } else if ((0, _util.isArray)(skin)) {
                styleJson = skin;
            }
            skin && this.map && this.map.setMapStyle({
                styleJson: styleJson
            });
        }
    }, {
        key: 'tOnResize',
        value: function tOnResize(event) {
            this.setCanvasSize();
            this.tDraw(this, event);
        }
    }, {
        key: 'tOnMoveend',
        value: function tOnMoveend(event) {
            this.animationFlag = true;
            this.eventType = event.type;
        }
    }, {
        key: 'tOnZoomstart',
        value: function tOnZoomstart() {
            this.animationFlag = false;
            this.clearCanvas();
        }
    }, {
        key: 'tOnZoomend',
        value: function tOnZoomend(e) {
            this.animationFlag = true;
            this.eventType = e.type;
        }
    }, {
        key: 'tOnMoving',
        value: function tOnMoving(e) {
            this.animationFlag = false;
            this.eventType = e.type;
        }
    }, {
        key: 'tMousemove',
        value: function tMousemove() {}
    }, {
        key: 'canvasInit',
        value: function canvasInit() {}
    }, {
        key: 'draw',
        value: function draw() {
            this.resize();
        }
    }, {
        key: 'tMouseClick',
        value: function tMouseClick() {}
    }, {
        key: 'tDraw',
        value: function tDraw(me, event) {
            this.eventType = event.type;
            me.resize();
            this.repaintEnd && this.repaintEnd(this);
            me.keysss = true;
        }
    }, {
        key: 'resize',
        value: function resize() {}
    }, {
        key: 'canvasResize',
        value: function canvasResize() {
            var map = this.map;
            var container = this.container;
            var point = map.getCenter();
            var size = map.getSize();
            var pixel = map.pointToOverlayPixel(point);
            container.style.left = pixel.x - size.width / 2 + 'px';
            container.style.top = pixel.y - size.height / 2 + 'px';
        }
    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            var size = this.map.getSize();
            this.getContext().clearRect(0, 0, size.width, size.height);
        }
    }, {
        key: 'setCanvasSize',
        value: function setCanvasSize() {
            var size = this.map.getSize();
            this.container.width = size.width;
            this.container.height = size.height;
            (0, _util.setDevicePixelRatio)(this.ctx);
        }
    }, {
        key: 'getContext',
        value: function getContext() {
            return this.ctx;
        }
    }, {
        key: 'setZIndex',
        value: function setZIndex(_zIndex) {
            this.container.style.zIndex = _zIndex;
        }
    }, {
        key: 'Tclear',
        value: function Tclear() {}
    }, {
        key: 'Tdispose',
        value: function Tdispose() {}
    }, {
        key: 'dispose',
        value: function dispose() {
            this.map.removeEventListener('resize', this.tOnResize);
            this.map.removeEventListener('moveend', this.tOnMoveend);
            this.map.removeEventListener('zoomstart', this.tOnZoomstart);
            this.map.removeEventListener('zoomend', this.tOnZoomend);
            this.map.removeEventListener('moving', this.tOnMoving);
            this.map.removeEventListener('mousemove', this.tMousemove);
            this.map.removeEventListener('click', this.tMouseClick);

            if (this.legend) {
                this.legend.hide();
                this.legend = null;
            }
            if (this.toolTip) {
                this.toolTip.hide();
                this.toolTip = null;
            }

            this.Tclear();
            this.Tdispose();
            this.map.removeOverlay(this);
        }
    }]);

    return CanvasOverlay;
}(_BaseClass3.default);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _CanvasOverlay2 = __webpack_require__(2);

var _Color = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isMobile = (0, _util.detectmob)();

var Parameter = exports.Parameter = function (_CanvasOverlay) {
    _inherits(Parameter, _CanvasOverlay);

    function Parameter(baseConfig, ops) {
        _classCallCheck(this, Parameter);

        var _this = _possibleConstructorReturn(this, (Parameter.__proto__ || Object.getPrototypeOf(Parameter)).call(this));

        _this.points = [];
        _this.baseConfig = baseConfig;
        _this._setStyle(baseConfig, ops);

        _this.selectItem = [];
        _this.overItem = null;
        _this.workerData = [];return _this;
    }

    _createClass(Parameter, [{
        key: '_setStyle',
        value: function _setStyle(config, ops) {
            ops = ops || {};
            var option = (0, _util.merge)(config, ops);
            this.toRgba(option.style);
            this._option = option;
            this.tooltipConfig = option.tooltip;
            this.legendConfig = option.legend;
            this.eventConfig = option.event;
            this.styleConfig = option.style;
            this.points = ops.data ? option.data : this.points;
            this.tMapStyle(option.skin);
            this.toolTip && this.toolTip.setOption(this.tooltipConfig);
        }
    }, {
        key: 'canvasInit',
        value: function canvasInit() {
            this.toolTip.setOption(this.tooltipConfig);
            this.parameterInit();
        }
    }, {
        key: 'parameterInit',
        value: function parameterInit() {}
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle() {}
    }, {
        key: 'toRgba',
        value: function toRgba(styleConfig) {
            ['normal', 'mouseOver', 'selected'].forEach(function (status) {
                var statusStyle = styleConfig[status];
                if (statusStyle) {
                    ['backgroundColor', 'borderColor', 'shadowColor'].forEach(function (item) {
                        var val = statusStyle[item];
                        if (val && val.indexOf('rgba') == -1) {
                            styleConfig[status][item] = new _Color.Color(val).getRgbaStyle();
                        }
                    });
                }
            });
            styleConfig.colors && styleConfig.colors.forEach(function (val, index, arr) {
                if (val.indexOf('rgba') == -1) {
                    arr[index] = new _Color.Color(val).getRgbaStyle();
                }
            });
        }
    }, {
        key: 'setDrawStyle',
        value: function setDrawStyle(item) {
            var normal = this.styleConfig.normal,
                mouseOverStyle = this.styleConfig.mouseOver,
                selectedStyle = this.styleConfig.selected;
            var result = {};
            result = (0, _util.merge)(result, normal);

            var splitList = this.styleConfig.splitList;
            for (var i = 0; i < splitList.length; i++) {
                var condition = splitList[i];
                if (i == splitList.length - 1) {
                    if (condition.end == null) {
                        if (item.count >= condition.start) {
                            result = this.mergeCondition(result, condition);
                            break;
                        }
                    } else if (item.count >= condition.start && item.count <= condition.end) {
                        result = this.mergeCondition(result, condition);
                        break;
                    }
                } else {
                    if (item.count >= condition.start && item.count < condition.end) {
                        result = this.mergeCondition(result, condition);
                        break;
                    }
                }
            }
            result = (0, _util.merge)(result, item.style || {});

            if (mouseOverStyle && this.overItem == item) {
                result = (0, _util.merge)(result, mouseOverStyle, {
                    backgroundColor: mouseOverStyle.backgroundColor || this.brightness(result.backgroundColor, 0.1)
                });
            }
            if (selectedStyle && this.selectItemContains(item)) {
                result = (0, _util.merge)(result, selectedStyle);
            }

            if (result.shadowBlur != null && result.shadowColor == null) {
                result['shadowColor'] = new _Color.Color(result.backgroundColor).getStyle();
            }
            if (result.opacity) {
                var color = new _Color.Color(result.backgroundColor);
                result.backgroundColor = color.getRgbaStyle(result.opacity);
            }
            if (result.borderOpacity) {
                var _color = new _Color.Color(result.borderColor);
                result.borderColor = _color.getRgbaStyle(result.borderOpacity);
            }
            return result;
        }
    }, {
        key: 'mergeCondition',
        value: function mergeCondition(normal, condition) {
            if (condition.opacity == null && normal.opacity != null) {
                normal.opacity = null;
            }
            if (condition.borderOpacity == null && normal.borderOpacity != null) {
                normal.borderOpacity = null;
            }
            return (0, _util.merge)(normal, condition);
        }
    }, {
        key: 'brightness',
        value: function brightness(rgba, delta) {

            var color = new _Color.Color(rgba);
            color.r += delta;
            color.g += delta;
            color.b += delta;
            return color.getStyle();
        }
    }, {
        key: 'selectItemContains',
        value: function selectItemContains(item) {
            return this.findIndexSelectItem(item) > -1;
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            return -1;
        }
    }, {
        key: 'deleteSelectItem',
        value: function deleteSelectItem(item) {
            var index = this.findIndexSelectItem(item);
            index > -1 && this.selectItem.splice(index, 1);
        }
    }, {
        key: 'setWorkerData',
        value: function setWorkerData(val) {
            this.workerData = val;
        }
    }, {
        key: 'setTooltip',
        value: function setTooltip(event) {
            this.toolTip.render(event, this.overItem);
        }
    }, {
        key: 'Tclear',
        value: function Tclear() {}
    }, {
        key: 'setlegend',
        value: function setlegend(legendConfig, list) {
            if (!this.map) return;
            legendConfig['list'] = list;
            this.legend.setOption(legendConfig);
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            return {
                item: null,
                index: -1
            };
        }
    }, {
        key: 'refresh',
        value: function refresh() {}
    }, {
        key: 'swopData',
        value: function swopData(index, item) {
            if ((0, _util.isNumber)(index) && index > -1) {
                this.workerData[index] = this.workerData[this.workerData.length - 1];
                this.workerData[this.workerData.length - 1] = item;
            }
        }
    }, {
        key: 'tMouseleave',
        value: function tMouseleave() {
            this.tooltip.hide();
        }
    }, {
        key: 'tMousemove',
        value: function tMousemove(event) {
            if (this.eventType == 'onmoving') {
                return;
            }
            if (!this.tooltipConfig.show && (0, _util.isEmpty)(this.styleConfig.mouseOver)) {
                return;
            }

            var result = this.getTarget(event.pixel.x, event.pixel.y);
            var temp = result.item;

            if (temp != this.overItem) {
                this.overItem = temp;
                if (temp) {
                    this.swopData(result.index, result.item);
                }
                this.eventType = 'mousemove';
                if (!(0, _util.isEmpty)(this.styleConfig.mouseOver)) {
                    this.refresh();
                }
            }
            if (temp) {
                this.map.setDefaultCursor('pointer');
            } else {
                this.map.setDefaultCursor('default');
            }

            this.setTooltip(event);
        }
    }, {
        key: 'tMouseClick',
        value: function tMouseClick(event) {
            if (this.eventType == 'onmoving') return;
            var multiSelect = this.eventConfig.multiSelect;

            var result = this.getTarget(event.pixel.x, event.pixel.y);
            if (result.index == -1) {
                return;
            }

            var item = result.item;
            if (multiSelect) {
                if (this.selectItemContains(item)) {
                    this.deleteSelectItem(item);
                } else {
                    this.selectItem.push(result.item);
                }
            } else {
                this.selectItem = [result.item];
            }

            this.swopData(result.index, item);
            this.eventConfig.onMouseClick(this.selectItem, event);

            this.refresh();
            if (isMobile) {
                this.overItem = item;
                this.setTooltip(event);
            }
        }
    }]);

    return Parameter;
}(_CanvasOverlay2.CanvasOverlay);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var ColorKeywords = {
    'aliceblue': 0xF0F8FF,
    'antiquewhite': 0xFAEBD7,
    'aqua': 0x00FFFF,
    'aquamarine': 0x7FFFD4,
    'azure': 0xF0FFFF,
    'beige': 0xF5F5DC,
    'bisque': 0xFFE4C4,
    'black': 0x000000,
    'blanchedalmond': 0xFFEBCD,
    'blue': 0x0000FF,
    'blueviolet': 0x8A2BE2,
    'brown': 0xA52A2A,
    'burlywood': 0xDEB887,
    'cadetblue': 0x5F9EA0,
    'chartreuse': 0x7FFF00,
    'chocolate': 0xD2691E,
    'coral': 0xFF7F50,
    'cornflowerblue': 0x6495ED,
    'cornsilk': 0xFFF8DC,
    'crimson': 0xDC143C,
    'cyan': 0x00FFFF,
    'darkblue': 0x00008B,
    'darkcyan': 0x008B8B,
    'darkgoldenrod': 0xB8860B,
    'darkgray': 0xA9A9A9,
    'darkgreen': 0x006400,
    'darkgrey': 0xA9A9A9,
    'darkkhaki': 0xBDB76B,
    'darkmagenta': 0x8B008B,
    'darkolivegreen': 0x556B2F,
    'darkorange': 0xFF8C00,
    'darkorchid': 0x9932CC,
    'darkred': 0x8B0000,
    'darksalmon': 0xE9967A,
    'darkseagreen': 0x8FBC8F,
    'darkslateblue': 0x483D8B,
    'darkslategray': 0x2F4F4F,
    'darkslategrey': 0x2F4F4F,
    'darkturquoise': 0x00CED1,
    'darkviolet': 0x9400D3,
    'deeppink': 0xFF1493,
    'deepskyblue': 0x00BFFF,
    'dimgray': 0x696969,
    'dimgrey': 0x696969,
    'dodgerblue': 0x1E90FF,
    'firebrick': 0xB22222,
    'floralwhite': 0xFFFAF0,
    'forestgreen': 0x228B22,
    'fuchsia': 0xFF00FF,
    'gainsboro': 0xDCDCDC,
    'ghostwhite': 0xF8F8FF,
    'gold': 0xFFD700,
    'goldenrod': 0xDAA520,
    'gray': 0x808080,
    'green': 0x008000,
    'greenyellow': 0xADFF2F,
    'grey': 0x808080,
    'honeydew': 0xF0FFF0,
    'hotpink': 0xFF69B4,
    'indianred': 0xCD5C5C,
    'indigo': 0x4B0082,
    'ivory': 0xFFFFF0,
    'khaki': 0xF0E68C,
    'lavender': 0xE6E6FA,
    'lavenderblush': 0xFFF0F5,
    'lawngreen': 0x7CFC00,
    'lemonchiffon': 0xFFFACD,
    'lightblue': 0xADD8E6,
    'lightcoral': 0xF08080,
    'lightcyan': 0xE0FFFF,
    'lightgoldenrodyellow': 0xFAFAD2,
    'lightgray': 0xD3D3D3,
    'lightgreen': 0x90EE90,
    'lightgrey': 0xD3D3D3,
    'lightpink': 0xFFB6C1,
    'lightsalmon': 0xFFA07A,
    'lightseagreen': 0x20B2AA,
    'lightskyblue': 0x87CEFA,
    'lightslategray': 0x778899,
    'lightslategrey': 0x778899,
    'lightsteelblue': 0xB0C4DE,
    'lightyellow': 0xFFFFE0,
    'lime': 0x00FF00,
    'limegreen': 0x32CD32,
    'linen': 0xFAF0E6,
    'magenta': 0xFF00FF,
    'maroon': 0x800000,
    'mediumaquamarine': 0x66CDAA,
    'mediumblue': 0x0000CD,
    'mediumorchid': 0xBA55D3,
    'mediumpurple': 0x9370DB,
    'mediumseagreen': 0x3CB371,
    'mediumslateblue': 0x7B68EE,
    'mediumspringgreen': 0x00FA9A,
    'mediumturquoise': 0x48D1CC,
    'mediumvioletred': 0xC71585,
    'midnightblue': 0x191970,
    'mintcream': 0xF5FFFA,
    'mistyrose': 0xFFE4E1,
    'moccasin': 0xFFE4B5,
    'navajowhite': 0xFFDEAD,
    'navy': 0x000080,
    'oldlace': 0xFDF5E6,
    'olive': 0x808000,
    'olivedrab': 0x6B8E23,
    'orange': 0xFFA500,
    'orangered': 0xFF4500,
    'orchid': 0xDA70D6,
    'palegoldenrod': 0xEEE8AA,
    'palegreen': 0x98FB98,
    'paleturquoise': 0xAFEEEE,
    'palevioletred': 0xDB7093,
    'papayawhip': 0xFFEFD5,
    'peachpuff': 0xFFDAB9,
    'peru': 0xCD853F,
    'pink': 0xFFC0CB,
    'plum': 0xDDA0DD,
    'powderblue': 0xB0E0E6,
    'purple': 0x800080,
    'red': 0xFF0000,
    'rosybrown': 0xBC8F8F,
    'royalblue': 0x4169E1,
    'saddlebrown': 0x8B4513,
    'salmon': 0xFA8072,
    'sandybrown': 0xF4A460,
    'seagreen': 0x2E8B57,
    'seashell': 0xFFF5EE,
    'sienna': 0xA0522D,
    'silver': 0xC0C0C0,
    'skyblue': 0x87CEEB,
    'slateblue': 0x6A5ACD,
    'slategray': 0x708090,
    'slategrey': 0x708090,
    'snow': 0xFFFAFA,
    'springgreen': 0x00FF7F,
    'steelblue': 0x4682B4,
    'tan': 0xD2B48C,
    'teal': 0x008080,
    'thistle': 0xD8BFD8,
    'tomato': 0xFF6347,
    'turquoise': 0x40E0D0,
    'violet': 0xEE82EE,
    'wheat': 0xF5DEB3,
    'white': 0xFFFFFF,
    'whitesmoke': 0xF5F5F5,
    'yellow': 0xFFFF00,
    'yellowgreen': 0x9ACD32
};

function Colors(r, g, b) {

    if (g === undefined && b === undefined) {
        return this.set(r);
    }

    return this.setRGB(r, g, b);
}

Colors.prototype = {

    constructor: Colors,

    isColor: true,

    r: 1,
    g: 1,
    b: 1,

    set: function set(value) {

        if (value && value.isColor) {

            this.copy(value);
        } else if (typeof value === 'number') {

            this.setHex(value);
        } else if (typeof value === 'string') {

            this.setStyle(value);
        }

        return this;
    },

    setScalar: function setScalar(scalar) {

        this.r = scalar;
        this.g = scalar;
        this.b = scalar;
    },

    setHex: function setHex(hex) {

        hex = Math.floor(hex);

        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;

        return this;
    },

    setRGB: function setRGB(r, g, b) {

        this.r = r;
        this.g = g;
        this.b = b;

        return this;
    },

    setHSL: function () {
        function hue2rgb(p, q, t) {

            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
            return p;
        }
    }(),

    setStyle: function setStyle(style) {

        function handleAlpha(string) {
            if (string === undefined) return;
        }

        var m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style);

        if (m) {
            var color = void 0;
            var name = m[1];
            var components = m[2];

            switch (name) {

                case 'rgb':
                case 'rgba':

                    if (color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                        this.r = Math.min(255, parseInt(color[1], 10)) / 255;
                        this.g = Math.min(255, parseInt(color[2], 10)) / 255;
                        this.b = Math.min(255, parseInt(color[3], 10)) / 255;
                        this.a = Math.min(1, parseFloat(color[5]));
                        handleAlpha(color[5]);

                        return this;
                    }

                    if (color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                        this.r = Math.min(100, parseInt(color[1], 10)) / 100;
                        this.g = Math.min(100, parseInt(color[2], 10)) / 100;
                        this.b = Math.min(100, parseInt(color[3], 10)) / 100;

                        handleAlpha(color[5]);

                        return this;
                    }

                    break;

                case 'hsl':
                case 'hsla':

                    if (color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {
                        var h = parseFloat(color[1]) / 360;
                        var s = parseInt(color[2], 10) / 100;
                        var l = parseInt(color[3], 10) / 100;

                        handleAlpha(color[5]);

                        return this.setHSL(h, s, l);
                    }

                    break;

            }
        } else if (m = /^\#([A-Fa-f0-9]+)$/.exec(style)) {

            var hex = m[1];
            var size = hex.length;

            if (size === 3) {
                this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
                this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
                this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;

                return this;
            } else if (size === 6) {
                this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
                this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
                this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;

                return this;
            }
        }

        if (style && style.length > 0) {
            var _hex = ColorKeywords[style];

            if (_hex !== undefined) {
                this.setHex(_hex);
            } else {}
        }

        return this;
    },

    clone: function clone() {
        return new this.constructor(this.r, this.g, this.b);
    },

    copy: function copy(color) {

        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        return this;
    },

    copyGammaToLinear: function copyGammaToLinear(color, gammaFactor) {

        if (gammaFactor === undefined) gammaFactor = 2.0;

        this.r = Math.pow(color.r, gammaFactor);
        this.g = Math.pow(color.g, gammaFactor);
        this.b = Math.pow(color.b, gammaFactor);

        return this;
    },

    copyLinearToGamma: function copyLinearToGamma(color, gammaFactor) {

        if (gammaFactor === undefined) gammaFactor = 2.0;

        var safeInverse = gammaFactor > 0 ? 1.0 / gammaFactor : 1.0;

        this.r = Math.pow(color.r, safeInverse);
        this.g = Math.pow(color.g, safeInverse);
        this.b = Math.pow(color.b, safeInverse);

        return this;
    },

    convertGammaToLinear: function convertGammaToLinear() {

        var r = this.r,
            g = this.g,
            b = this.b;

        this.r = r * r;
        this.g = g * g;
        this.b = b * b;

        return this;
    },

    convertLinearToGamma: function convertLinearToGamma() {

        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);

        return this;
    },

    getHex: function getHex() {

        return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
    },

    getHexString: function getHexString() {

        return ('000000' + this.getHex().toString(16)).slice(-6);
    },

    getHSL: function getHSL(optionalTarget) {

        var hsl = optionalTarget || {
            h: 0,
            s: 0,
            l: 0
        };

        var r = this.r,
            g = this.g,
            b = this.b;

        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);

        var hue = void 0,
            saturation = void 0;
        var lightness = (min + max) / 2.0;

        if (min === max) {

            hue = 0;
            saturation = 0;
        } else {

            var delta = max - min;

            saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

            switch (max) {

                case r:
                    hue = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / delta + 2;
                    break;
                case b:
                    hue = (r - g) / delta + 4;
                    break;

            }

            hue /= 6;
        }

        hsl.h = hue;
        hsl.s = saturation;
        hsl.l = lightness;

        return hsl;
    },

    getStyle: function getStyle() {
        return 'rgb(' + (this.r * 255 | 0) + ',' + (this.g * 255 | 0) + ',' + (this.b * 255 | 0) + ')';
    },
    getRgbaStyle: function getRgbaStyle(opacity) {
        return 'rgba(' + (this.r * 255 | 0) + ',' + (this.g * 255 | 0) + ',' + (this.b * 255 | 0) + ',' + (opacity || 1) + ')';
    },


    offsetHSL: function offsetHSL(h, s, l) {

        var hsl = this.getHSL();

        hsl.h += h;
        hsl.s += s;
        hsl.l += l;

        this.setHSL(hsl.h, hsl.s, hsl.l);

        return this;
    },

    add: function add(color) {

        this.r += color.r;
        this.g += color.g;
        this.b += color.b;

        return this;
    },

    addColors: function addColors(color1, color2) {

        this.r = color1.r + color2.r;
        this.g = color1.g + color2.g;
        this.b = color1.b + color2.b;

        return this;
    },

    addScalar: function addScalar(s) {

        this.r += s;
        this.g += s;
        this.b += s;

        return this;
    },

    sub: function sub(color) {

        this.r = Math.max(0, this.r - color.r);
        this.g = Math.max(0, this.g - color.g);
        this.b = Math.max(0, this.b - color.b);

        return this;
    },

    multiply: function multiply(color) {

        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;

        return this;
    },

    multiplyScalar: function multiplyScalar(s) {

        this.r *= s;
        this.g *= s;
        this.b *= s;

        return this;
    },

    lerp: function lerp(color, alpha) {

        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;

        return this;
    },

    equals: function equals(c) {

        return c.r === this.r && c.g === this.g && c.b === this.b;
    },

    fromArray: function fromArray(array, offset) {

        if (offset === undefined) offset = 0;

        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];

        return this;
    },

    toArray: function toArray(array, offset) {

        if (array === undefined) array = [];
        if (offset === undefined) offset = 0;

        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;

        return array;
    }

};
var Color = exports.Color = Colors;

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WhiteLover = exports.WhiteLover = [{
    'featureType': 'water',
    'elementType': 'all',
    'stylers': {
        'color': '#dbe0e7'
    }
}, {
    'featureType': 'land',
    'elementType': 'all',
    'stylers': {
        'color': '#f1f3f5'
    }
}, {
    'featureType': 'green',
    'elementType': 'all',
    'stylers': {
        'color': '#e9ecf2'
    }
}, {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': {
        'color': '#dde1e8'
    }
}, {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': {
        'color': '#dde1e8'
    }
}, {
    'featureType': 'boundary',
    'elementType': 'geometry',
    'stylers': {
        'color': '#d7dadf'
    }
}, {
    'featureType': 'railway',
    'elementType': 'geometry',
    'stylers': {
        'hue': '#3d85c6',
        'lightness': 63,
        'saturation': 21,
        'visibility': 'on'
    }
}, {
    'featureType': 'local',
    'elementType': 'all',
    'stylers': {
        'color': '#e7ebf2',
        'visibility': 'off'
    }
}, {
    'featureType': 'local',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#b5bfc7',
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
        'color': '#73b1df'
    }
}, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': {
        'color': '#b5bfc7',
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
        'color': '#d9e3ea',
        'visibility': 'off'
    }
}, {
    'featureType': 'highway',
    'elementType': 'labels',
    'stylers': {
        'color': '#c6d4df',
        'visibility': 'off'
    }
}, {
    'featureType': 'highway',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#c1c9d5'
    }
}, {
    'featureType': 'highway',
    'elementType': 'geometry.fill',
    'stylers': {
        'color': '#d3d8e1',
        'visibility': 'on'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'on'
    }
}, {
    'featureType': 'administrative',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'background',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry.fill',
    'stylers': {
        'color': '#e9ecf2'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#d9dce3'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'labels.text.fill',
    'stylers': {
        'visibility': 'off'
    }
}];
var Blueness = exports.Blueness = [{
    'featureType': 'water',
    'elementType': 'all',
    'stylers': {
        'color': '#566382'
    }
}, {
    'featureType': 'land',
    'elementType': 'all',
    'stylers': {
        'color': '#172137'
    }
}, {
    'featureType': 'green',
    'elementType': 'all',
    'stylers': {
        'color': '#282f57'
    }
}, {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': {
        'color': '#3f4b8c'
    }
}, {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': {
        'color': '#3f4b8c'
    }
}, {
    'featureType': 'boundary',
    'elementType': 'geometry',
    'stylers': {
        'color': '#4f6b9e'
    }
}, {
    'featureType': 'railway',
    'elementType': 'geometry',
    'stylers': {
        'color': '#4f6b9e'
    }
}, {
    'featureType': 'highway',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#202749',
        'visibility': 'off'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry.fill',
    'stylers': {
        'color': '#4f6b9e',
        'visibility': 'off'
    }
}, {
    'featureType': 'local',
    'elementType': 'geometry.fill',
    'stylers': {
        'color': '#303a6d'
    }
}, {
    'featureType': 'local',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#2d3667',
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
        'color': '#445195',
        'visibility': 'off'
    }
}, {
    'featureType': 'all',
    'elementType': 'labels.text.stroke',
    'stylers': {
        'color': '#141831'
    }
}, {
    'featureType': 'all',
    'elementType': 'labels.text.fill',
    'stylers': {
        'color': '#5564b2'
    }
}, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': {
        'color': '#141831',
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry.stroke',
    'stylers': {
        'color': '#181e3e'
    }
}, {
    'featureType': 'highway',
    'elementType': 'geometry',
    'stylers': {
        'color': '#324160',
        'weight': '0.9'
    }
}, {
    'featureType': 'highway',
    'elementType': 'labels',
    'stylers': {
        'color': '#172137',
        'visibility': 'off'
    }
}, {
    'featureType': 'label',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': {}
}];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Label = exports.Label = function () {
    function Label(x, y, radius, height, byteWidth, name) {
        _classCallCheck(this, Label);

        this.center = {
            x: x,
            y: y
        };
        this.virtualReact = {
            maxX: 0,
            maxY: 0,
            minX: 0,
            minY: 0,
            width: 0,
            height: 0
        };
        this.show = true;
        this.text = name;
        this.textReact = {
            width: 0,
            height: 0
        };
        this.radius = radius + 2;
        this.padding = 0;
        this.aIndex = 0;
        this._getRectangle(height * 1.1, byteWidth - 0.6);
    }

    _createClass(Label, [{
        key: 'getCurrentRect',
        value: function getCurrentRect() {
            var result = null;
            switch (this.aIndex.toString()) {
                case '0':
                    result = this._getRightAnchor();
                    break;
                case '1':
                    result = this._getBottomAnchor();
                    break;
                case '2':
                    result = this._getLeftAnchor();
                    break;
                case '3':
                    result = this._getTopAnchor();
                    break;
                default:
                    result = this._getCenterRectange();
                    break;

            }
            return result;
        }
    }, {
        key: 'next',
        value: function next() {
            this.aIndex++;
            if (this.aIndex > 3) {
                this.show = false;
            }
            return this.getCurrentRect();
        }
    }, {
        key: '_getTrueLength',
        value: function _getTrueLength(str) {
            var len = str.length,
                truelen = 0;
            for (var x = 0; x < len; x++) {
                if (str.charCodeAt(x) > 128) {
                    truelen += 2;
                } else {
                    truelen += 1;
                }
            }
            return truelen;
        }
    }, {
        key: 'isAnchorMeet',
        value: function isAnchorMeet(target) {
            var react = this.getCurrentRect(),
                targetReact = target.getCurrentRect();
            if (react.minX < targetReact.maxX && targetReact.minX < react.maxX && react.minY < targetReact.maxY && targetReact.minY < react.maxY) {
                return true;
            }
            return false;
        }
    }, {
        key: '_getCenterRectange',
        value: function _getCenterRectange() {
            return {
                minX: this.center.x - this.radius,
                maxX: this.center.x + this.radius,
                minY: this.center.y - this.radius,
                maxY: this.center.y + this.radius
            };
        }
    }, {
        key: '_getRectangle',
        value: function _getRectangle(height, byteWidth) {
            var width = this._getTrueLength(this.text) * byteWidth;
            this.textReact = {
                width: width + this.padding * 2,
                height: height
            };
        }
    }, {
        key: '_getLeftAnchor',
        value: function _getLeftAnchor() {

            var x = this.center.x - this.radius - this.textReact.width,
                y = this.center.y - this.textReact.height / 2,
                diam = this.radius * 2,
                maxH = diam > this.textReact.height ? diam : this.textReact.height;
            return {
                x: x,
                y: y,
                minX: x,
                maxX: this.center.x + this.radius,
                minY: this.center.y - maxH / 2,
                maxY: this.center.y + maxH / 2
            };
        }
    }, {
        key: '_getRightAnchor',
        value: function _getRightAnchor() {
            var x = this.center.x + this.radius,
                y = this.center.y - this.textReact.height / 2,
                diam = this.radius * 2,
                maxH = diam > this.textReact.height ? diam : this.textReact.height;
            return {
                x: x,
                y: y,
                minX: this.center.x - this.radius,
                maxX: this.center.x + this.radius + this.textReact.width,
                minY: this.center.y - maxH / 2,
                maxY: this.center.y + maxH / 2
            };
        }
    }, {
        key: '_getTopAnchor',
        value: function _getTopAnchor() {
            var x = this.center.x - this.textReact.width / 2,
                y = this.center.y - this.radius - this.textReact.height,
                diam = this.radius * 2,
                maxW = diam > this.textReact.width ? diam : this.textReact.width;
            return {
                x: x,
                y: y,
                minX: this.center.x - maxW / 2,
                maxX: this.center.x + maxW / 2,
                minY: this.center.y - this.radius - this.textReact.height,
                maxY: this.center.y + this.radius
            };
        }
    }, {
        key: '_getBottomAnchor',
        value: function _getBottomAnchor() {
            var x = this.center.x - this.textReact.width / 2,
                y = this.center.y + this.radius,
                maxW = this.radius > this.textReact.width ? this.radius : this.textReact.width;
            return {
                x: x,
                y: y,
                minX: this.center.x - maxW / 2,
                maxX: this.center.x + maxW / 2,
                minY: this.center.y - this.radius,
                maxY: this.center.y + this.radius + this.textReact.height
            };
        }
    }]);

    return Label;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Legend = __webpack_require__(45);

var _Legend2 = _interopRequireDefault(_Legend);

var _ToolTip = __webpack_require__(46);

var _ToolTip2 = _interopRequireDefault(_ToolTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toolbar = function () {
    function Toolbar(mapDom) {
        _classCallCheck(this, Toolbar);

        var toolDom = this.create(mapDom);
        var legend = new _Legend2.default(toolDom);
        var toolTip = new _ToolTip2.default(toolDom);
        return {
            legend: legend,
            toolTip: toolTip
        };
    }

    _createClass(Toolbar, [{
        key: 'create',
        value: function create(mapDom) {
            var div = document.createElement('div');
            div.classList.add('inmap-container');
            mapDom.appendChild(div);
            return div;
        }
    }]);

    return Toolbar;
}();

exports.default = Toolbar;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _workerMrg = __webpack_require__(31);

var baseClassCounter = 0;
var inmap_instances = {};
var _count = 0;
Function.prototype.inherits = function (parentClass, className) {
    var i = void 0,
        p = void 0,
        op = this.prototype,
        C = function C() {};
    C.prototype = parentClass.prototype;
    p = this.prototype = new C();
    if (typeof className == 'string') {
        p.className = className;
    }
    for (i in op) {
        p[i] = op[i];
    }
    this.prototype.constructor = op.constructor;
    op = C = null;
    return p;
};

var BaseClass = function BaseClass(hc) {
    inmap_instances[this.hashCode = hc || BaseClass.guid()] = this;
};

BaseClass.guid = function () {
    return 'td_' + (baseClassCounter++).toString(36);
};

BaseClass.prototype.dispose = function () {
    if (this.hashCode) {
        inmap_instances[this.hashCode] = null;
    }

    for (var i in this) {
        if (typeof this[i] != 'function') {
            this[i] = null;
        }
    }
};

BaseClass.prototype.getHashCode = function () {
    if (!this.hashCode) {
        inmap_instances[this.hashCode = BaseClass.guid()] = this;
    }
    return this.hashCode;
};

BaseClass.prototype.decontrol = function () {
    inmap_instances[this.hashCode] = null;
};

var baidu = window.BMap || {
    Overlay: {}
};
BaseClass.inherits(baidu.Overlay, 'BaseClass');

BaseClass.prototype.postMessage = function (workerClassPath, data, callback) {
    var map = this.map;
    var center = map.getCenter();
    var size = map.getSize();
    var msgId = this.setMsgId();

    var request = {
        'type': 'web',
        'data': data,
        'hashCode': this.hashCode,
        'className': this.className,
        'classPath': workerClassPath,
        'msgId': msgId,
        'map': {
            'center': {
                lng: center.lng,
                lat: center.lat
            },
            'size': {
                width: size.width,
                height: size.height
            },
            'zoom': map.getZoom(),
            'margin': this.margin
        }
    };
    _workerMrg.workerMrg.postMessage({
        request: request
    }, callback);
};
BaseClass.prototype.getMsgId = function () {
    return 'msgId_' + _count.toString(36);
};
BaseClass.prototype.setMsgId = function () {
    _count++;
    return 'msgId_' + _count.toString(36);
};

exports.default = BaseClass;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _MapStyle = __webpack_require__(7);

var _mapZoom = __webpack_require__(47);

var _Toolbar = __webpack_require__(11);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _InmapConfig = __webpack_require__(40);

var _InmapConfig2 = _interopRequireDefault(_InmapConfig);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = exports.Map = function () {
    function Map(ops) {
        _classCallCheck(this, Map);

        this.map = null;

        this.option = (0, _util.merge)(_InmapConfig2.default, ops);

        this.create();
    }

    _createClass(Map, [{
        key: 'tMapStyle',
        value: function tMapStyle(map, skin) {
            var styleJson = null;
            if ((0, _util.isString)(skin)) {
                styleJson = skin == 'Blueness' ? _MapStyle.Blueness : _MapStyle.WhiteLover;
            } else if ((0, _util.isArray)(skin)) {
                styleJson = skin;
            }
            skin && map && map.setMapStyle({
                styleJson: styleJson
            });
        }
    }, {
        key: 'create',
        value: function create() {
            var id = this.option.id;

            var mapDom = (0, _util.isString)(id) ? document.getElementById(id) : id;
            var bmap = new BMap.Map(mapDom, {
                enableMapClick: false
            });
            bmap.enableScrollWheelZoom();
            bmap.disableDoubleClickZoom();
            bmap.enableKeyboard();

            this.tMapStyle(bmap, this.option.skin);

            bmap.inmapToolBar = new _Toolbar2.default(mapDom);
            var center = this.option.center;

            bmap.centerAndZoom(new BMap.Point(center[0], center[1]), this.option.zoom.value);
            bmap.setMinZoom(this.option.zoom.min);
            bmap.setMaxZoom(this.option.zoom.max);
            if (this.option.zoom.show) {
                var mapZoom = new _mapZoom.MapZoom(bmap, mapDom, this.option.zoom);
                bmap.addEventListener('zoomend', function () {
                    mapZoom.setButtonState();
                });
            }

            this.map = bmap;
        }
    }, {
        key: 'getMap',
        value: function getMap() {
            return this.map;
        }
    }, {
        key: 'add',
        value: function add(overlay) {
            this.map.addOverlay(overlay);
        }
    }, {
        key: 'remove',
        value: function remove(overlay) {
            if (overlay.map) {
                overlay.dispose();
            }
        }
    }]);

    return Map;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundaryOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(4);

var _Color = __webpack_require__(5);

var _util = __webpack_require__(0);

var _BoundaryConfig = __webpack_require__(32);

var _BoundaryConfig2 = _interopRequireDefault(_BoundaryConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoundaryOverlay = exports.BoundaryOverlay = function (_Parameter) {
    _inherits(BoundaryOverlay, _Parameter);

    function BoundaryOverlay(ops) {
        _classCallCheck(this, BoundaryOverlay);

        var _this = _possibleConstructorReturn(this, (BoundaryOverlay.__proto__ || Object.getPrototypeOf(BoundaryOverlay)).call(this, _BoundaryConfig2.default, ops));

        _this.patchSplitList();

        _this.selectedExp = {
            show: false,
            exp: null
        };
        _this.state = null;
        return _this;
    }

    _createClass(BoundaryOverlay, [{
        key: 'parameterInit',
        value: function parameterInit() {
            this.initLegend();
        }
    }, {
        key: 'initLegend',
        value: function initLegend() {
            this.compileSplitList(this.styleConfig.colors, this.points);
            this.patchSplitList();
            this.setlegend(this.legendConfig, this.styleConfig.splitList);
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(this.baseConfig, ops);
            this.initLegend();
            this.refresh();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'compileSplitList',
        value: function compileSplitList(colors, data) {

            if (colors.length <= 0) return;
            data = data.sort(function (a, b) {
                return parseFloat(a.count) - parseFloat(b.count);
            });
            var splitCount = data.length / colors.length;
            var colorIndex = 0;
            var split = [];
            var star = 0,
                end = 0;

            for (var i = 0; i < data.length; i++) {

                if (i > splitCount * (colorIndex + 1)) {
                    if (split.length == 0) {
                        star = data[0].count;
                    }

                    end = data[i].count;

                    split.push({
                        start: star,
                        end: end,
                        backgroundColor: colors[colorIndex]
                    });
                    colorIndex++;
                    star = data[i].count;
                }
            }

            if (split.length > 0) {
                split.push({
                    start: star,
                    end: null,
                    backgroundColor: colors[colorIndex]
                });
            }

            this.styleConfig.splitList = split;
        }
    }, {
        key: 'patchSplitList',
        value: function patchSplitList() {
            var normal = this.styleConfig.normal;
            if (normal.borderWidth != null && normal.borderColor == null) {
                normal.borderColor = new _Color.Color(normal.backgroundColor).getRgbaStyle();
            }
            var splitList = this.styleConfig.splitList;
            for (var i = 0; i < splitList.length; i++) {
                var condition = splitList[i];
                if ((condition.borderWidth != null || normal.borderColor != null) && condition.borderColor == null) {
                    condition.borderColor = new _Color.Color(condition.backgroundColor).getRgbaStyle();
                }
            }
        }
    }, {
        key: 'setSelectd',
        value: function setSelectd(exp) {

            if (this.points.length > 0) {
                var filterFun = new Function('item', 'with(item){ return ' + exp + ' }');
                var temp = this.points.filter(filterFun);

                if (temp.length > 0) {
                    this.setCenterAndZoom(temp[0].geo, exp);
                }
            }
        }
    }, {
        key: 'cancerSelectd',
        value: function cancerSelectd() {
            this.cancerExp();
            this.selectItem = [];
            this.refresh();
        }
    }, {
        key: 'setWorkerData',
        value: function setWorkerData(val) {
            this.workerData = val;
            if (this.filterFun) {
                this.selectItem = this.workerData.filter(this.filterFun);
            }
        }
    }, {
        key: 'parserExp',
        value: function parserExp(exp) {
            if (exp) {
                this.selectedExp.show = true;
                this.selectedExp.exp = exp;
                this.filterFun = new Function('item', 'with(item){ return ' + exp + ' }');
            }
        }
    }, {
        key: 'swopData',
        value: function swopData(index, item) {
            if (index > -1) {
                this.workerData[index] = this.workerData[this.workerData.length - 1];
                this.workerData[this.workerData.length - 1] = item;
            }
            this.cancerExp();
        }
    }, {
        key: 'cancerExp',
        value: function cancerExp() {
            this.selectedExp.show = false;
            this.selectedExp.exp = null;
            this.filterFun = null;
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'getGeoCenter',
        value: function getGeoCenter(geo) {
            var minX = geo[0][0];
            var minY = geo[0][1];
            var maxX = geo[0][0];
            var maxY = geo[0][1];
            for (var i = 1; i < geo.length; i++) {
                minX = Math.min(minX, geo[i][0]);
                maxX = Math.max(maxX, geo[i][0]);
                minY = Math.min(minY, geo[i][1]);
                maxY = Math.max(maxY, geo[i][1]);
            }
            return [minX + (maxX - minX) / 2, minY + (maxY - minY) / 2];
        }
    }, {
        key: 'setMapCenter',
        value: function setMapCenter(geo, exp) {
            var me = this;
            this.parserExp(exp);

            if (me.workerData.length > 0) {
                me.selectItem = me.workerData.filter(me.filterFun);
                me.refresh();
            }
        }
    }, {
        key: 'setMapCenterAndZoom',
        value: function setMapCenterAndZoom(geo, exp) {
            var arr = [];
            geo.forEach(function (val) {
                arr.push(new BMap.Point(val[0], val[1]));
            });

            var view = this.map.getViewport(arr);
            var me = this;

            function zoomEnd() {

                me.map.removeEventListener('zoomend', zoomEnd);
                me.map.panTo(view.center);
            }

            function moveend() {

                me.map.removeEventListener('moveend', moveend);
                me.parserExp(exp);
                if (me.workerData.length > 0) {
                    me.selectItem = me.workerData.filter(me.filterFun);
                    me.refresh();
                }
            }

            var scale = view.zoom - 1;
            this.map.addEventListener('zoomend', zoomEnd);
            this.map.addEventListener('moveend', moveend);
            if (this.map.getZoom() == scale) {
                zoomEnd();
            } else {
                this.map.setZoom(scale);
            }
        }
    }, {
        key: 'setCenterAndZoom',
        value: function setCenterAndZoom(geo, exp, isScale) {
            if (isScale) {
                this.setMapCenterAndZoom(geo, exp);
            } else {
                this.setMapCenter(geo, exp);
            }
        }
    }, {
        key: 'getMaxWidth',
        value: function getMaxWidth(geo) {
            var minX = geo[0][0];
            var minY = geo[0][1];
            var maxX = geo[0][0];
            var maxY = geo[0][1];
            for (var i = 1; i < geo.length; i++) {
                minX = Math.min(minX, geo[i][0]);
                maxX = Math.max(maxX, geo[i][0]);
                minY = Math.min(minY, geo[i][1]);
                maxY = Math.max(maxY, geo[i][1]);
            }
            return maxX - minX;
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                index = this.selectItem.findIndex(function (val) {
                    return val && val.name == item.name;
                });
            }
            return index;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.clearCanvas();
            this.drawLine(this.workerData);
            this.cancerExp();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            this.setState(_OnState2.default.computeBefore);
            this.postMessage('BoundaryOverlay.calculatePixel', this.points, function (pixels) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);
                _this2.clearCanvas();
                _this2.canvasResize();
                _this2.overItem = null;
                _this2.setWorkerData(pixels);
                _this2.setState(_OnState2.default.drawBefore);
                _this2.drawLine(pixels);
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.cancerSelectd();
            this.points = points;
            this.initLegend();
            this.drawMap();
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            var data = this.workerData;
            this.ctx.beginPath();
            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i];
                var geo = item.pgeo;
                this.ctx.beginPath();
                this.ctx.moveTo(geo[0][0], geo[0][1]);
                for (var j = 1; j < geo.length; j++) {
                    this.ctx.lineTo(geo[j][0], geo[j][1]);
                }
                this.ctx.closePath();
                if (this.ctx.isPointInPath(x * this.devicePixelRatio, y * this.devicePixelRatio)) {
                    return {
                        index: i,
                        item: item
                    };
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'drawLine',
        value: function drawLine(data) {

            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            this.ctx.miterLimit = 4;

            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i];
                var geo = item.pgeo;
                var style = this.setDrawStyle(item);
                this.ctx.beginPath();
                this.ctx.shadowColor = style.shadowColor || 'transparent';
                this.ctx.shadowBlur = style.shadowBlur || 10;
                this.ctx.shadowOffsetX = 0;
                this.ctx.shadowOffsetY = 0;
                this.ctx.fillStyle = style.backgroundColor;
                this.ctx.moveTo(geo[0][0], geo[0][1]);
                for (var j = 1; j < geo.length; j++) {
                    this.ctx.lineTo(geo[j][0], geo[j][1]);
                }
                this.ctx.closePath();
                this.ctx.fill();

                this.ctx.strokeStyle = style.borderColor;
                this.ctx.lineWidth = style.borderWidth;
                this.ctx.stroke();
            }

            for (var _i = 0, _len = data.length; _i < _len; _i++) {
                var _item = data[_i];
                var _geo = _item.pgeo;
                var bestCell = _item.bestCell;
                var label = this.setDrawStyle(_item).label;

                if (bestCell && label.show) {
                    this.ctx.shadowBlur = 0;
                    this.ctx.lineWidth = label.lineWidth;
                    this.ctx.font = label.font;
                    this.ctx.fillStyle = label.color;
                    var width = this.ctx.measureText(_item.name).width;
                    if (this.getMaxWidth(_geo) > width) {
                        this.ctx.fillText(_item.name, bestCell.x - width / 2, bestCell.y);
                    }
                }
            }
            this.ctx.closePath();
        }
    }]);

    return BoundaryOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CircuitOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _CanvasOverlay2 = __webpack_require__(2);

var _CircuitConfig = __webpack_require__(33);

var _CircuitConfig2 = _interopRequireDefault(_CircuitConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircuitOverlay = exports.CircuitOverlay = function (_CanvasOverlay) {
    _inherits(CircuitOverlay, _CanvasOverlay);

    function CircuitOverlay(ops) {
        _classCallCheck(this, CircuitOverlay);

        var _this = _possibleConstructorReturn(this, (CircuitOverlay.__proto__ || Object.getPrototypeOf(CircuitOverlay)).call(this, ops));

        _this.points = [];
        _this.styleConfig = {};
        _this._setStyle(_CircuitConfig2.default, ops);
        _this._isCoordinates = false;
        _this.state = null;
        return _this;
    }

    _createClass(CircuitOverlay, [{
        key: '_setStyle',
        value: function _setStyle(config, ops) {
            var option = (0, _util.merge)(config, ops);
            this.points = ops.data ? option.data : this.points;
            this.styleConfig = option.style;
            this.eventConfig = option.event;
            this.tMapStyle(option.skin);
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(_CircuitConfig2.default, ops);
            this.coordinates(this.points);
            this.drawMap();
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.points = points;

            this.coordinates(this.points);
            this.drawMap();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            var zoomUnit = Math.pow(2, 18 - this.map.getZoom());
            var projection = this.map.getMapType().getProjection();
            var mcCenter = projection.lngLatToPoint(this.map.getCenter());
            var nwMc = new BMap.Pixel(mcCenter.x - this.map.getSize().width / 2 * zoomUnit, mcCenter.y + this.map.getSize().height / 2 * zoomUnit);
            var params = {
                points: this.points,
                nwMc: nwMc,
                zoomUnit: zoomUnit
            };
            if (!this._isCoordinates) {
                this.coordinates(this.points);
            }
            this.setState(_OnState2.default.computeBefore);
            this.postMessage('CircuitOverlay.calculatePixel', params, function (pixels) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);

                _this2.clearCanvas();
                _this2.canvasResize();
                _this2.setState(_OnState2.default.drawBefore);

                _this2.drawLine(pixels);
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'coordinates',
        value: function coordinates(data) {
            this._isCoordinates = true;
            var projection = this.map.getMapType().getProjection();
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                item['_coordinates'] = item.geo.map(function (item) {

                    var pixel = projection.lngLatToPoint({
                        lng: item[0],
                        lat: item[1]
                    });
                    return [pixel.x, pixel.y];
                });
            }
        }
    }, {
        key: 'transferCoordinate',
        value: function transferCoordinate(_coordinates, nwMc, zoomUnit) {

            return _coordinates.map(function (item) {

                var x = (item[0] - nwMc.x) / zoomUnit;
                var y = (nwMc.y - item[1]) / zoomUnit;
                return [x, y];
            });
        }
    }, {
        key: 'lngLatToPoints',
        value: function lngLatToPoints(data, nwMc, zoomUnit) {
            if (data.length > 0) {
                return this.transferCoordinate(data, nwMc, zoomUnit);
            } else {
                return [];
            }
        }
    }, {
        key: 'drawLine',
        value: function drawLine(data) {

            var normal = this.styleConfig.normal;
            this.ctx.shadowBlur = 0;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            this.ctx.lineCap = 'butt';
            this.ctx.lineJoin = 'miter';
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.miterLimit = 10;
            this.ctx.strokeStyle = normal.borderColor;
            this.ctx.lineWidth = normal.borderWidth;
            this.ctx.beginPath();

            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                var pixels = item.pixels;
                this.ctx.moveTo(pixels[0][0], pixels[0][1]);
                for (var j = 1; j < pixels.length; j++) {
                    this.ctx.lineTo(pixels[j][0], pixels[j][1]);
                }
                this.ctx.stroke();
            }
        }
    }]);

    return CircuitOverlay;
}(_CanvasOverlay2.CanvasOverlay);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DotOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasOverlay = __webpack_require__(2);

var _Label = __webpack_require__(8);

var _Parameter2 = __webpack_require__(4);

var _util = __webpack_require__(0);

var _BatchesData = __webpack_require__(48);

var _BatchesData2 = _interopRequireDefault(_BatchesData);

var _DotConfig = __webpack_require__(34);

var _DotConfig2 = _interopRequireDefault(_DotConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isMobile = (0, _util.detectmob)();

var DotOverlay = exports.DotOverlay = function (_Parameter) {
    _inherits(DotOverlay, _Parameter);

    function DotOverlay(opts) {
        _classCallCheck(this, DotOverlay);

        var _this = _possibleConstructorReturn(this, (DotOverlay.__proto__ || Object.getPrototypeOf(DotOverlay)).call(this, _DotConfig2.default, opts));

        _this.polyme = opts.type == 'polyme';
        _this._loopDraw = _this._loopDraw.bind(_this);
        if (!(0, _util.isEmpty)(_this._option.draw)) {
            _this.batchesData = new _BatchesData2.default(_this._option.draw);
        }
        _this.mouseLayer = new _CanvasOverlay.CanvasOverlay();
        _this.state = null;
        return _this;
    }

    _createClass(DotOverlay, [{
        key: 'parameterInit',
        value: function parameterInit() {
            this.map.addOverlay(this.mouseLayer);
            if (this.styleConfig.colors.length > 0) {
                this.compileSplitList(this.points);
            } else {
                this.setlegend(this.legendConfig, this.styleConfig.splitList);
            }
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(this.baseConfig, ops);
            if (!(0, _util.isEmpty)(this._option.draw)) {
                this.batchesData = new _BatchesData2.default(this._option.draw);
            } else {
                this.batchesData = null;
            }

            this.refresh();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'drawMouseLayer',
        value: function drawMouseLayer() {
            var overArr = this.overItem ? [this.overItem] : [];
            this.mouseLayer.clearCanvas();
            this._loopDraw(this.mouseLayer.ctx, this.selectItem.concat(overArr));
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            this.batchesData && this.batchesData.clear();
            var path = this.polyme ? 'PolymeOverlay.mergePoint' : 'HeatOverlay.pointsToPixels';
            var data = this.polyme ? {
                points: this.points,
                mergeCount: this.styleConfig.normal.mergeCount,
                size: this.styleConfig.normal.size
            } : this.points;
            this.setState(_OnState2.default.computeBefore);
            this.postMessage(path, data, function (pixels) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);
                _this2.setWorkerData(pixels);
                _this2.updateOverClickItem();
                _this2.setState(_OnState2.default.drawBefore);
                _this2.refresh();
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'updateOverClickItem',
        value: function updateOverClickItem() {
            var _this3 = this;

            var overArr = this.overItem ? [this.overItem] : [];
            var allItems = this.selectItem.concat(overArr);

            var _loop = function _loop(i) {
                var item = allItems[i];
                var ret = _this3.workerData.find(function (val) {
                    return val && val.lat == item.lat && val.lng == item.lng && val.count == item.count;
                });
                item.pixel = ret.pixel;
            };

            for (var i = 0; i < allItems.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'cancerSelectd',
        value: function cancerSelectd() {
            this.selectItem = [];
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.cancerSelectd();
            this.points = points;
            if (this.styleConfig.colors.length > 0) {
                this.compileSplitList(this.points);
            }
            this.drawMap();
        }
    }, {
        key: 'compileSplitList',
        value: function compileSplitList(data) {
            var colors = this.styleConfig.colors;
            if (colors.length <= 0) return;
            data = data.sort(function (a, b) {
                return parseFloat(a.count) - parseFloat(b.count);
            });
            var splitCount = data.length / colors.length;
            var colorIndex = 0;
            var split = [];
            var star = 0,
                end = 0;

            for (var i = 0; i < data.length; i++) {

                if (i > splitCount * (colorIndex + 1)) {
                    if (split.length == 0) {
                        star = data[0].count;
                    }

                    end = data[i].count;

                    split.push({
                        start: star,
                        end: end,
                        backgroundColor: colors[colorIndex]
                    });
                    colorIndex++;
                    star = data[i].count;
                }
            }

            if (split.length > 0) {
                split.push({
                    start: star,
                    end: null,
                    backgroundColor: colors[colorIndex]
                });
            }

            this.styleConfig.splitList = split;
            this.setlegend(this.legendConfig, this.styleConfig.splitList);
        }
    }, {
        key: 'getTarget',
        value: function getTarget(mouseX, mouseY) {
            var pixels = this.workerData,
                ctx = this.ctx;
            var mapSize = this.map.getSize();
            for (var i = 0, len = pixels.length; i < len; i++) {
                var _item = pixels[i];
                var _item$pixel = _item.pixel,
                    x = _item$pixel.x,
                    y = _item$pixel.y,
                    radius = _item$pixel.radius;

                var r = radius + this.styleConfig.normal.borderWidth;
                if (x > -r && y > -r && x < mapSize.width + r && y < mapSize.height + r) {
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
                    if (ctx.isPointInPath(mouseX * this.devicePixelRatio, mouseY * this.devicePixelRatio)) {
                        return {
                            index: i,
                            item: _item
                        };
                    }
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                index = this.selectItem.findIndex(function (val) {
                    return val && val.lat == item.lat && val.lng == item.lng && val.count == item.count;
                });
            }
            return index;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.clearCanvas();
            this.canvasResize();
            this.mouseLayer.canvasResize();
            if (this.batchesData) {
                this.batchesData.action(this.workerData, this._loopDraw, this.ctx);
            } else {
                this._loopDraw(this.ctx, this.workerData);
            }
            if (this.styleConfig.normal.label.show) {
                this._drawLabel(this.ctx, this.workerData);
            }
            this.drawMouseLayer();
        }
    }, {
        key: 'swopData',
        value: function swopData(index, item) {
            if (index > -1 && !this.styleConfig.normal.label.show) {
                this.workerData[index] = this.workerData[this.workerData.length - 1];
                this.workerData[this.workerData.length - 1] = item;
            }
        }
    }, {
        key: '_loopDraw',
        value: function _loopDraw(ctx, pixels) {
            var mapSize = this.map.getSize();
            for (var i = 0, len = pixels.length; i < len; i++) {
                var _item2 = pixels[i];
                var pixel = _item2.pixel;
                var x = pixel.x,
                    y = pixel.y;


                var style = this.polyme ? this.styleConfig.normal : this.setDrawStyle(_item2);
                var size = this.polyme ? pixel.radius : style.size;
                pixel['radius'] = size;
                if (x > -size && y > -size && x < mapSize.width + size && y < mapSize.height + size) {
                    if (style.shadowColor) {
                        ctx.shadowColor = style.shadowColor || 'transparent';
                        ctx.shadowBlur = style.shadowBlur || 10;
                    } else {
                        ctx.shadowColor = 'transparent';
                        ctx.shadowBlur = 0;
                    }
                    if (style.globalCompositeOperation) {
                        ctx.globalCompositeOperation = style.globalCompositeOperation;
                    }
                    this._drawCircle(ctx, x, y, size, style.backgroundColor, style.borderWidth, style.borderColor);
                }
            }
        }
    }, {
        key: '_drawLabel',
        value: function _drawLabel(ctx, pixels) {
            var _this4 = this;

            var fontStyle = this.styleConfig.normal.label;
            var fontSize = parseInt(fontStyle.font);
            ctx.font = fontStyle.font;
            ctx.textBaseline = 'top';
            ctx.fillStyle = fontStyle.color;
            var byteWidth = ctx.measureText('a').width;

            var labels = pixels.map(function (val) {
                var radius = val.pixel.radius + _this4.styleConfig.normal.borderWidth;
                return new _Label.Label(val.pixel.x, val.pixel.y, radius, fontSize, byteWidth, val.name);
            });

            labels.sort(function (a, b) {
                return b.x - a.x;
            });
            var meet = void 0;
            do {
                meet = false;
                for (var i = 0; i < labels.length; i++) {
                    var temp = labels[i];
                    for (var j = 0; j < labels.length; j++) {
                        if (i != j && temp.show && temp.isAnchorMeet(labels[j])) {
                            temp.next();
                            meet = true;
                            break;
                        }
                    }
                }
            } while (meet);

            labels.forEach(function (item) {
                if (item.show) {
                    var pixel = item.getCurrentRect();
                    ctx.beginPath();
                    ctx.fillText(item.text, pixel.x, pixel.y);
                    ctx.fill();
                }
            });
        }
    }, {
        key: '_drawCircle',
        value: function _drawCircle(ctx, x, y, radius, color, lineWidth, strokeStyle) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
            ctx.fill();
            if (lineWidth) {
                ctx.lineWidth = lineWidth;
                if (strokeStyle) {
                    ctx.strokeStyle = strokeStyle;
                }
                ctx.stroke();
            }
        }
    }, {
        key: 'Tdispose',
        value: function Tdispose() {
            this.map.removeOverlay(this.mouseLayer);
        }
    }, {
        key: 'tMousemove',
        value: function tMousemove(event) {

            if (this.eventType == 'onmoving') {
                return;
            }
            if (!this.tooltipConfig.show && (0, _util.isEmpty)(this.styleConfig.mouseOver)) {
                return;
            }
            var result = this.getTarget(event.pixel.x, event.pixel.y);
            var temp = result.item;

            if (temp != this.overItem) {
                this.overItem = temp;
                this.eventType = 'mousemove';
                if (!(0, _util.isEmpty)(this.styleConfig.mouseOver)) {
                    this.drawMouseLayer();
                }
            }
            if (temp) {
                this.map.setDefaultCursor('pointer');
            } else {
                this.map.setDefaultCursor('default');
            }

            this.setTooltip(event);
        }
    }, {
        key: 'tMouseClick',
        value: function tMouseClick(event) {
            if (this.eventType == 'onmoving') return;
            var multiSelect = this.eventConfig.multiSelect;

            var result = this.getTarget(event.pixel.x, event.pixel.y);
            if (result.index == -1) {
                return;
            }

            var item = result.item;
            if (multiSelect) {
                if (this.selectItemContains(item)) {
                    this.deleteSelectItem(item);
                } else {
                    this.selectItem.push(result.item);
                }
            } else {
                this.selectItem = [result.item];
            }

            this.eventConfig.onMouseClick(this.selectItem, event);

            if (isMobile) {
                this.overItem = [item];
                this.setTooltip(event);
            }
            this.drawMouseLayer();
        }
    }]);

    return DotOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasOverlay2 = __webpack_require__(2);

var _util = __webpack_require__(0);

var _FlashDotConfig = __webpack_require__(35);

var _FlashDotConfig2 = _interopRequireDefault(_FlashDotConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
    function Marker(opts, map) {
        _classCallCheck(this, Marker);

        this.city = opts.name;
        this.location = new BMap.Point(opts.lnglat[0], opts.lnglat[1]);
        this.pixel = map.pointToPixel(this.location);
        this.color = opts.color;
        this.speed = opts.speed;
        this.radius = 0;
        this.size = opts.size;
    }

    _createClass(Marker, [{
        key: 'draw',
        value: function draw(context) {
            var pixel = this.pixel;
            context.save();
            context.beginPath();
            context.strokeStyle = this.color;
            context.moveTo(pixel.x + pixel.radius, pixel.y);
            context.arc(pixel.x, pixel.y, this.radius, 0, Math.PI * 2);
            context.stroke();
            context.closePath();
            context.restore();
            this.radius += this.speed;
            if (this.radius > this.size) {
                this.radius = 0;
            }
        }
    }]);

    return Marker;
}();

var FlashDotOverlay = function (_CanvasOverlay) {
    _inherits(FlashDotOverlay, _CanvasOverlay);

    function FlashDotOverlay(ops) {
        _classCallCheck(this, FlashDotOverlay);

        var _this = _possibleConstructorReturn(this, (FlashDotOverlay.__proto__ || Object.getPrototypeOf(FlashDotOverlay)).call(this));

        _this.data = [];
        _this.styleConfig = null;
        _this.markers = [];
        _this.render = _this.render.bind(_this);
        _this.setOptionStyle(ops);
        return _this;
    }

    _createClass(FlashDotOverlay, [{
        key: 'canvasInit',
        value: function canvasInit() {
            this.addMarker();
            var now = void 0;
            var then = Date.now();
            var interval = 1000 / 25;
            var delta = void 0;
            var render = this.render;
            (function drawFrame() {
                requestAnimationFrame(drawFrame);
                now = Date.now();
                delta = now - then;
                if (delta > interval) {
                    then = now - delta % interval;
                    render();
                }
            })();
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            var option = (0, _util.merge)(_FlashDotConfig2.default, ops);
            this.styleConfig = option.style.normal;
            this.data = ops.data ? option.data : this.data;
            this.tMapStyle(option.skin);
            this.map && this.addMarker();
        }
    }, {
        key: 'addMarker',
        value: function addMarker() {
            this.markers = [];
            for (var i = 0; i < this.data.length; i++) {
                var item = (0, _util.merge)(this.styleConfig, this.data[i]);
                this.markers.push(new Marker(item, this.map));
            }
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.addMarker();
            this.canvasResize();
        }
    }, {
        key: 'render',
        value: function render() {
            var ctx = this.ctx;
            if (!ctx) {
                return;
            }
            if (!this.animationFlag) {
                this.clearCanvas();
                return;
            }

            var size = this.map.getSize();
            ctx.fillStyle = 'rgba(0,0,0,.95)';
            var prev = ctx.globalCompositeOperation;
            ctx.globalCompositeOperation = 'destination-in';

            ctx.fillRect(0, 0, size.width, size.height);
            ctx.globalCompositeOperation = prev;

            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                marker.draw(ctx);
            }
        }
    }]);

    return FlashDotOverlay;
}(_CanvasOverlay2.CanvasOverlay);

exports.default = FlashDotOverlay;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GriddingOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(4);

var _util = __webpack_require__(0);

var _GriddingConfig = __webpack_require__(36);

var _GriddingConfig2 = _interopRequireDefault(_GriddingConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GriddingOverlay = exports.GriddingOverlay = function (_Parameter) {
    _inherits(GriddingOverlay, _Parameter);

    function GriddingOverlay(ops) {
        _classCallCheck(this, GriddingOverlay);

        var _this = _possibleConstructorReturn(this, (GriddingOverlay.__proto__ || Object.getPrototypeOf(GriddingOverlay)).call(this, _GriddingConfig2.default, ops));

        _this.state = null;
        _this._drawSize = 0;
        _this.mpp = {};

        return _this;
    }

    _createClass(GriddingOverlay, [{
        key: 'parameterInit',
        value: function parameterInit() {}
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(this.baseConfig, ops);
            this.createColorSplit();
            this.drawMap();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.drawRec();
        }
    }, {
        key: 'resize',
        value: function resize() {
            if (this.eventType == 'onzoomend') {
                this.workerData = {};
            }
            this.drawMap();
        }
    }, {
        key: '_calculateMpp',
        value: function _calculateMpp() {
            var zoom = this.map.getZoom();
            if (this.mpp[zoom]) {
                return this.mpp[zoom];
            } else {
                this.mpp[zoom] = this.getMpp();
                return this.mpp[zoom];
            }
        }
    }, {
        key: 'getMpp',
        value: function getMpp() {
            var mapCenter = this.map.getCenter();
            var assistValue = 10;
            var cpt = new BMap.Point(mapCenter.lng, mapCenter.lat + assistValue);
            var dpx = Math.abs(this.map.pointToPixel(mapCenter).y - this.map.pointToPixel(cpt).y);
            return this.map.getDistance(mapCenter, cpt) / dpx;
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            var _styleConfig = this.styleConfig,
                normal = _styleConfig.normal,
                type = _styleConfig.type;

            var zoom = this.map.getZoom();
            var mapCenter = this.map.getCenter();
            var mapSize = this.map.getSize();

            var zoomUnit = Math.pow(2, 18 - zoom);
            var mercatorProjection = this.map.getMapType().getProjection();
            var mcCenter = mercatorProjection.lngLatToPoint(mapCenter);

            var nwMcX = mcCenter.x - mapSize.width / 2 * zoomUnit;
            var nwMc = new BMap.Pixel(nwMcX, mcCenter.y + mapSize.height / 2 * zoomUnit);
            var size = 0;
            if (normal.unit == 'px') {
                size = normal.size * zoomUnit;
            } else if (normal.unit == 'm') {
                var mpp = this._calculateMpp();
                if (mpp == 0 || isNaN(mpp)) {
                    return;
                }
                size = normal.size / mpp * zoomUnit;
            } else {
                throw new TypeError('inMap: style.normal.unit must be is "meters" or "px" .');
            }

            var params = {
                points: this.points,
                size: size,
                type: type,
                nwMc: nwMc,
                zoomUnit: zoomUnit,
                mapSize: mapSize,
                mapCenter: mapCenter,
                zoom: zoom
            };
            this.setState(_OnState2.default.computeBefore);
            this.postMessage('GriddingOverlay.toRecGrids', params, function (gridsObj) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                var grids = gridsObj.grids;
                _this2.setState(_OnState2.default.conputeAfter);

                _this2.canvasResize();
                _this2.workerData = grids;
                _this2._drawSize = size / zoomUnit;
                _this2.setState(_OnState2.default.drawBefore);

                _this2.createColorSplit();
                _this2.drawRec();
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {

            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.points = points;

            this.drawMap();
        }
    }, {
        key: '_isMouseOver',
        value: function _isMouseOver(mouseX, mouseY, x, y, w, h) {
            return !(mouseX < x || mouseX > x + w || mouseY < y || mouseY > y + h);
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                index = this.selectItem.findIndex(function (val) {
                    return val && val.x == item.x && val.y == item.y;
                });
            }
            return index;
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {

            var grids = this.workerData;
            var gridStep = this._drawSize;
            var mapSize = this.map.getSize();
            for (var i in grids) {

                var item = grids[i];
                var x1 = parseFloat(item.x);
                var y1 = parseFloat(item.y);
                if (x > -gridStep && y > -gridStep && x < mapSize.width + gridStep && y < mapSize.height + gridStep) {
                    if (this._isMouseOver(x, y, x1, y1, gridStep, gridStep)) {
                        return {
                            index: i,
                            item: item
                        };
                    }
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'compileSplitList',
        value: function compileSplitList(data) {

            var colors = this.styleConfig.colors;
            if (colors.length < 0 || data.length <= 0) return;
            data = data.sort(function (a, b) {
                return parseFloat(a.count) - parseFloat(b.count);
            });
            var mod = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

            var colorMod = mod.slice(0, colors.length).reverse();
            var sunMod = colorMod.reduce(function (sum, val) {
                return sum + val;
            }, 0);
            var split = [];
            var star = 0,
                end = 0,
                sign = 0,
                length = data.length;

            for (var i = 0; i < colorMod.length; i++) {
                if (split.length == 0) {
                    star = data[0].count;
                } else {
                    star = split[i - 1].end;
                }
                if (i == colorMod.length - 1) {
                    end = null;
                } else {
                    sign = parseInt(colorMod[i] / sunMod * length) + sign;
                    end = data[sign].count;
                }

                split.push({
                    start: star,
                    end: end,
                    backgroundColor: colors[i]

                });
            }

            this.styleConfig.splitList = split;
            this.setlegend(this.legendConfig, this.styleConfig.splitList);
        }
    }, {
        key: 'createColorSplit',
        value: function createColorSplit() {
            var grids = this.workerData;
            var data = [];
            for (var key in grids) {
                var count = grids[key].count;
                if (count > 0) {
                    data.push({
                        name: key,
                        count: count
                    });
                }
            }

            if (this.styleConfig.colors.length > 0) {
                this.compileSplitList(data);
            }
        }
    }, {
        key: 'setlegendParams',
        value: function setlegendParams() {}
    }, {
        key: 'setTooltip',
        value: function setTooltip(event) {
            var item = this.overItem && this.overItem.list.length > 0 ? this.overItem : null;
            this.toolTip.render(event, item);
        }
    }, {
        key: 'getStyle',
        value: function getStyle(item) {
            if (item.count == 0) {
                return {
                    backgroundColor: 'rgba(255,255,255,0)'
                };
            } else {
                return this.setDrawStyle(item);
            }
        }
    }, {
        key: 'drawRec',
        value: function drawRec() {
            this.clearCanvas();
            var gridStep = this._drawSize;
            var grids = this.workerData;
            var style = this.styleConfig.normal;
            var mapSize = this.map.getSize();
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            for (var i in grids) {
                var item = grids[i];
                var x = item.x;
                var y = item.y;
                if (x > -gridStep && y > -gridStep && x < mapSize.width + gridStep && y < mapSize.height + gridStep) {
                    var drawStyle = this.getStyle(item);
                    if (drawStyle.shadowColor) {
                        this.ctx.shadowColor = drawStyle.shadowColor || 'transparent';
                        this.ctx.shadowBlur = drawStyle.shadowBlur || 10;
                    } else {
                        this.ctx.shadowColor = 'transparent';
                        this.ctx.shadowBlur = 0;
                    }
                    this.ctx.fillStyle = drawStyle.backgroundColor;
                    this.ctx.fillRect(x, y, gridStep - style.padding, gridStep - style.padding);
                }
            }
        }
    }]);

    return GriddingOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeatOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasOverlay2 = __webpack_require__(2);

var _util = __webpack_require__(0);

var _HeatConfig = __webpack_require__(37);

var _HeatConfig2 = _interopRequireDefault(_HeatConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeatOverlay = exports.HeatOverlay = function (_CanvasOverlay) {
    _inherits(HeatOverlay, _CanvasOverlay);

    function HeatOverlay(ops) {
        _classCallCheck(this, HeatOverlay);

        var _this = _possibleConstructorReturn(this, (HeatOverlay.__proto__ || Object.getPrototypeOf(HeatOverlay)).call(this, ops));

        _this.points = [];
        _this._setStyle(_HeatConfig2.default, ops);
        _this.delteOption();
        _this.state = null;
        return _this;
    }

    _createClass(HeatOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: '_setStyle',
        value: function _setStyle(config, ops) {
            ops = ops || {};
            var option = (0, _util.merge)(config, ops);
            this.styleConfig = option.style;
            this.eventConfig = option.event;
            this.gradient = option.style.gradient;
            this.points = ops.data ? option.data : this.points;
            this.tMapStyle(option.skin);
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(_HeatConfig2.default, ops);
            this.delteOption();
            this.drawMap();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'delteOption',
        value: function delteOption() {
            this.tooltipConfig = {
                show: false
            };
            this.legendConfig = {
                show: false
            };
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap :data must be a Array');
            }
            this.points = points;
            this.drawMap();
        }
    }, {
        key: 'getMax',
        value: function getMax() {
            var normal = this.styleConfig.normal;
            normal.maxValue = 0;
            for (var i = 0, len = this.points.length; i < len; i++) {
                if (this.points[i].count > normal.maxValue) {
                    normal.maxValue = this.points[i].count;
                }
            }
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            this.setState(_OnState2.default.computeBefore);

            this.postMessage('HeatOverlay.pointsToPixels', this.points, function (pixels) {

                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);

                _this2.clearCanvas();
                _this2.canvasResize();
                _this2.setState(_OnState2.default.drawBefore);

                _this2.workerData = pixels;
                _this2.refresh();
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            var normal = this.styleConfig.normal;
            var container = this.container;
            if (normal.maxValue == 0) {
                this.getMax();
            }
            if (container.width <= 0) {
                return;
            }

            var ctx = this.ctx;
            for (var i = 0, _len = this.workerData.length; i < _len; i++) {
                var item = this.workerData[i];
                var opacity = (item.count - normal.minValue) / (normal.maxValue - normal.minValue);
                opacity = opacity > 1 ? 1 : opacity;
                this.drawPoint(item.pixel.x, item.pixel.y, normal.radius, opacity);
            }

            var palette = this.getColorPaint();

            var img = ctx.getImageData(0, 0, container.width, container.height);
            var imgData = img.data;

            var max_opacity = normal.maxOpacity * 255;
            var min_opacity = normal.minOpacity * 255;

            var max_scope = (normal.maxScope > 1 ? 1 : normal.maxScope) * 255;
            var min_scope = (normal.minScope < 0 ? 0 : normal.minScope) * 255;
            var len = imgData.length;
            for (var _i = 3; _i < len; _i += 4) {
                var alpha = imgData[_i];
                var offset = alpha * 4;
                if (!offset) {
                    continue;
                }
                imgData[_i - 3] = palette[offset];
                imgData[_i - 2] = palette[offset + 1];
                imgData[_i - 1] = palette[offset + 2];

                if (imgData[_i] > max_scope) {
                    imgData[_i] = 0;
                }
                if (imgData[_i] < min_scope) {
                    imgData[_i] = 0;
                }

                if (imgData[_i] > max_opacity) {
                    imgData[_i] = max_opacity;
                }
                if (imgData[_i] < min_opacity) {
                    imgData[_i] = min_opacity;
                }
            }

            ctx.putImageData(img, 0, 0, 0, 0, container.width, container.height);
        }
    }, {
        key: 'drawPoint',
        value: function drawPoint(x, y, radius, opacity) {
            var ctx = this.ctx;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradient;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
    }, {
        key: 'getColorPaint',
        value: function getColorPaint() {
            var gradientConfig = this.gradient;
            var paletteCanvas = document.createElement('canvas');
            var paletteCtx = paletteCanvas.getContext('2d');

            paletteCanvas.width = 256;
            paletteCanvas.height = 1;

            var gradient = paletteCtx.createLinearGradient(0, 0, 256, 1);
            for (var key in gradientConfig) {
                gradient.addColorStop(key, gradientConfig[key]);
            }

            paletteCtx.fillStyle = gradient;
            paletteCtx.fillRect(0, 0, 256, 1);
            return paletteCtx.getImageData(0, 0, 256, 1).data;
        }
    }]);

    return HeatOverlay;
}(_CanvasOverlay2.CanvasOverlay);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HoneycombOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(4);

var _util = __webpack_require__(0);

var _HoneycombConfig = __webpack_require__(38);

var _HoneycombConfig2 = _interopRequireDefault(_HoneycombConfig);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoneycombOverlay = exports.HoneycombOverlay = function (_Parameter) {
    _inherits(HoneycombOverlay, _Parameter);

    function HoneycombOverlay(ops) {
        _classCallCheck(this, HoneycombOverlay);

        var _this = _possibleConstructorReturn(this, (HoneycombOverlay.__proto__ || Object.getPrototypeOf(HoneycombOverlay)).call(this, _HoneycombConfig2.default, ops));

        _this.state = null;
        _this.mpp = {};
        _this._drawSize = 0;
        return _this;
    }

    _createClass(HoneycombOverlay, [{
        key: 'parameterInit',
        value: function parameterInit() {}
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(this.baseConfig, ops);
            this.parameterInit();
            this.createColorSplit();
            this.refresh();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            if (this.eventType == 'onzoomend') {
                this.workerData = {};
            }
            this.drawRec();
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.points = points;
            this.drawMap();
        }
    }, {
        key: '_calculateMpp',
        value: function _calculateMpp() {
            var zoom = this.map.getZoom();
            if (this.mpp[zoom]) {
                return this.mpp[zoom];
            } else {
                this.mpp[zoom] = this.getMpp();
                return this.mpp[zoom];
            }
        }
    }, {
        key: 'getMpp',
        value: function getMpp() {
            var mapCenter = this.map.getCenter();
            var assistValue = 10;
            var cpt = new BMap.Point(mapCenter.lng, mapCenter.lat + assistValue);
            var dpx = Math.abs(this.map.pointToPixel(mapCenter).y - this.map.pointToPixel(cpt).y);
            return this.map.getDistance(mapCenter, cpt) / dpx;
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            var _styleConfig = this.styleConfig,
                normal = _styleConfig.normal,
                type = _styleConfig.type;

            var zoom = this.map.getZoom();
            var mapCenter = this.map.getCenter();
            var mapSize = this.map.getSize();

            var zoomUnit = Math.pow(2, 18 - zoom);
            var mercatorProjection = this.map.getMapType().getProjection();
            var mcCenter = mercatorProjection.lngLatToPoint(mapCenter);

            var nwMcX = mcCenter.x - mapSize.width / 2 * zoomUnit;
            var nwMc = new BMap.Pixel(nwMcX, mcCenter.y + mapSize.height / 2 * zoomUnit);
            var size = 0;

            if (normal.unit == 'px') {
                size = normal.size * zoomUnit;
            } else if (normal.unit == 'm') {
                var mpp = this._calculateMpp();
                if (mpp == 0 || isNaN(mpp)) {
                    return;
                }
                size = normal.size / mpp * zoomUnit;
            } else {
                throw new TypeError('inMap: style.normal.unit must be is "meters" or "px" .');
            }

            var params = {
                points: this.points,
                size: size,
                type: type,
                nwMc: nwMc,
                zoomUnit: zoomUnit,
                mapSize: mapSize,
                mapCenter: mapCenter,
                zoom: zoom
            };
            this.setState(_OnState2.default.computeBefore);

            this.postMessage('HoneycombOverlay.toRecGrids', params, function (gridsObj) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);

                _this2.canvasResize();
                var grids = gridsObj.grids;
                _this2.workerData = grids;
                _this2._drawSize = size / zoomUnit;

                _this2.setState(_OnState2.default.drawBefore);
                _this2.createColorSplit();
                _this2.drawRec();
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'createColorSplit',
        value: function createColorSplit() {
            var data = [],
                grids = this.workerData;
            for (var key in grids) {
                var count = grids[key].count;

                if (count > 0) {
                    data.push({
                        name: key,
                        count: count
                    });
                }
            }

            if (this.styleConfig.colors.length > 0) {
                this.compileSplitList(data);
            }
        }
    }, {
        key: 'compileSplitList',
        value: function compileSplitList(data) {

            var colors = this.styleConfig.colors;
            if (colors.length < 0 || data.length <= 0) return;
            data = data.sort(function (a, b) {
                return parseFloat(a.count) - parseFloat(b.count);
            });
            var mod = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

            var colorMod = mod.slice(0, colors.length).reverse();
            var sunMod = colorMod.reduce(function (sum, val) {
                return sum + val;
            }, 0);
            var split = [];
            var star = 0,
                end = 0,
                sign = 0,
                length = data.length;

            for (var i = 0; i < colorMod.length; i++) {
                if (split.length == 0) {
                    star = data[0].count;
                } else {
                    star = split[i - 1].end;
                }
                if (i == colorMod.length - 1) {
                    end = null;
                } else {
                    sign = parseInt(colorMod[i] / sunMod * length) + sign;
                    end = data[sign].count;
                }

                split.push({
                    start: star,
                    end: end,
                    backgroundColor: colors[i]
                });
            }

            this.styleConfig.splitList = split;
            this.setlegend(this.legendConfig, this.styleConfig.splitList);
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {

                index = this.selectItem.findIndex(function (val) {
                    return val && val.x == item.x && val.y == item.y;
                });
            }
            return index;
        }
    }, {
        key: 'getStyle',
        value: function getStyle(item) {
            if (item.count == 0) {
                return {
                    backgroundColor: 'rgba(255,255,255,0)'
                };
            } else {
                return this.setDrawStyle(item);
            }
        }
    }, {
        key: 'getTarget',
        value: function getTarget(mouseX, mouseY) {
            var grids = this.workerData;
            var gridStep = this._drawSize;
            var mapSize = this.map.getSize();

            for (var i in grids) {
                var item = grids[i];
                var x = item.x;
                var y = item.y;
                if (item.count > 0 && x > -gridStep && y > -gridStep && x < mapSize.width + gridStep && y < mapSize.height + gridStep) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y - gridStep / 2);
                    this.ctx.lineTo(x + gridStep / 2, y - gridStep / 4);
                    this.ctx.lineTo(x + gridStep / 2, y + gridStep / 4);
                    this.ctx.lineTo(x, y + gridStep / 2);
                    this.ctx.lineTo(x - gridStep / 2, y + gridStep / 4);
                    this.ctx.lineTo(x - gridStep / 2, y - gridStep / 4);
                    this.ctx.closePath();

                    if (this.ctx.isPointInPath(mouseX * this.devicePixelRatio, mouseY * this.devicePixelRatio)) {
                        return {
                            index: i,
                            item: item
                        };
                    }
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'drawRec',
        value: function drawRec() {
            this.clearCanvas();
            var mapSize = this.map.getSize();
            var gridsW = this._drawSize;
            var grids = this.workerData;
            var style = this.styleConfig.normal;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            for (var i in grids) {
                var x = grids[i].x;
                var y = grids[i].y;
                var count = grids[i].count;
                if (count > 0 && x > -gridsW && y > -gridsW && x < mapSize.width + gridsW && y < mapSize.height + gridsW) {
                    var drawStyle = this.getStyle(grids[i]);
                    this.drawLine(x, y, gridsW - style.padding, drawStyle, this.ctx);
                }
            }
        }
    }, {
        key: 'drawLine',
        value: function drawLine(x, y, gridStep, drawStyle, ctx) {

            ctx.beginPath();
            if (drawStyle.shadowColor) {
                this.ctx.shadowColor = drawStyle.shadowColor || 'transparent';
                this.ctx.shadowBlur = drawStyle.shadowBlur || 10;
            } else {
                this.ctx.shadowColor = 'transparent';
                this.ctx.shadowBlur = 0;
            }
            ctx.fillStyle = drawStyle.backgroundColor;
            ctx.moveTo(x, y - gridStep / 2);
            ctx.lineTo(x + gridStep / 2, y - gridStep / 4);
            ctx.lineTo(x + gridStep / 2, y + gridStep / 4);
            ctx.lineTo(x, y + gridStep / 2);
            ctx.lineTo(x - gridStep / 2, y + gridStep / 4);
            ctx.lineTo(x - gridStep / 2, y - gridStep / 4);
            ctx.fill();
            ctx.closePath();
        }
    }]);

    return HoneycombOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(4);

var _ImgConfig = __webpack_require__(39);

var _ImgConfig2 = _interopRequireDefault(_ImgConfig);

var _util = __webpack_require__(0);

var _OnState = __webpack_require__(1);

var _OnState2 = _interopRequireDefault(_OnState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgOverlay = exports.ImgOverlay = function (_Parameter) {
    _inherits(ImgOverlay, _Parameter);

    function ImgOverlay(opts) {
        _classCallCheck(this, ImgOverlay);

        var _this = _possibleConstructorReturn(this, (ImgOverlay.__proto__ || Object.getPrototypeOf(ImgOverlay)).call(this, _ImgConfig2.default, opts));

        _this.cacheImg = {};
        _this.state = null;
        return _this;
    }

    _createClass(ImgOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setStyle(this.baseConfig, ops);
            this.refresh();
        }
    }, {
        key: 'setState',
        value: function setState(val) {
            this.state = val;
            this.eventConfig.onState(this.state);
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var _this2 = this;

            this.setState(_OnState2.default.computeBefore);

            this.postMessage('HeatOverlay.pointsToPixels', this.points, function (pixels) {
                if (_this2.eventType == 'onmoving') {
                    return;
                }
                _this2.setState(_OnState2.default.conputeAfter);
                _this2.setState(_OnState2.default.drawBefore);
                _this2.setWorkerData(pixels);
                _this2.refresh();
                _this2.setState(_OnState2.default.drawAfter);
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap :data must be a Array');
            }
            this.cancerSelectd();
            this.points = points;
            this.drawMap();
        }
    }, {
        key: 'cancerSelectd',
        value: function cancerSelectd() {
            this.selectItem = [];
        }
    }, {
        key: '_isMouseOver',
        value: function _isMouseOver(x, y, imgX, imgY, imgW, imgH) {
            return !(x < imgX || x > imgX + imgW || y < imgY || y > imgY + imgH);
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            var pixels = this.workerData,
                ctx = this.ctx;
            for (var i = 0, len = pixels.length; i < len; i++) {
                var item = pixels[i];
                var pixel = item.pixel;
                var style = this.setDrawStyle(item);
                ctx.beginPath();
                var img = this.cacheImg[style.icon];

                if (!img) break;
                if (style.width && style.height) {
                    var xy = this._getDrawXY(pixel, style.offsets.left, style.offsets.top, style.width, style.height, 1);

                    if (this._isMouseOver(x, y, xy.x, xy.y, style.width, style.height)) {
                        return {
                            index: i,
                            item: item
                        };
                    }
                } else {

                    var _xy = this._getDrawXY(pixel, style.offsets.left, style.offsets.top, style.width, style.height);
                    if (this._isMouseOver(x, y, _xy.x, _xy.y, img.width, img.height)) {

                        return {
                            index: i,
                            item: item
                        };
                    }
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {

                index = this.selectItem.findIndex(function (val) {
                    return val && val.lat == item.lat && val.lng == item.lng;
                });
            }

            return index;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            this.clearCanvas();
            this.canvasResize();
            this._loopDraw(this.ctx, this.workerData);
        }
    }, {
        key: 'loadImg',
        value: function loadImg(img, fun) {
            var me = this;

            if ((0, _util.isString)(img)) {
                var image = me.cacheImg[img];
                if (!image) {
                    var _image = new Image();
                    _image.src = img;
                    _image.onload = function () {

                        me.cacheImg[img] = _image;
                        fun(_image);
                    };
                } else {
                    fun(image);
                }
            } else {
                fun(img);
            }
        }
    }, {
        key: 'isPercent',
        value: function isPercent(val) {
            if (val.toString().indexOf('%') > -1) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: '_getDrawXY',
        value: function _getDrawXY(pixel, offsetL, offsetT, width, height) {
            var x = 0,
                y = 0;
            var scaleW = width;
            var scaleH = height;
            var offsetLeft = parseFloat(offsetL);
            var offsetTop = parseFloat(offsetT);

            if (this.isPercent(offsetL)) {
                x = pixel.x + scaleW * offsetLeft / 100;
            } else {
                x = pixel.x + offsetLeft;
            }
            if (this.isPercent(offsetT)) {
                y = pixel.y + scaleH * offsetTop / 100;
            } else {
                y = pixel.y + offsetTop;
            }
            return {
                x: x,
                y: y
            };
        }
    }, {
        key: 'setDrawStyle',
        value: function setDrawStyle(item) {
            var normal = this.styleConfig.normal;
            var result = {};
            Object.assign(result, normal);


            var splitList = this.styleConfig.splitList;
            for (var i = 0; i < splitList.length; i++) {
                var condition = splitList[i];
                if (condition.end == null) {
                    if (item.count >= condition.start) {
                        Object.assign(result, normal, condition);
                        break;
                    }
                } else if (item.count >= condition.start && item.count < condition.end) {
                    Object.assign(result, normal, condition);
                    break;
                }
            }

            return result;
        }
    }, {
        key: '_loopDraw',
        value: function _loopDraw(ctx, pixels) {
            var _this3 = this;

            var _loop = function _loop(i, len) {
                var item = pixels[i];
                var pixel = item.pixel;
                var style = _this3.setDrawStyle(item);
                _this3.loadImg(style.icon, function (img) {
                    if (style.width && style.height) {
                        var xy = _this3._getDrawXY(pixel, style.offsets.left, style.offsets.top, style.width, style.height);
                        _this3._drawImage(_this3.ctx, img, xy.x, xy.y, style.width, style.height);
                    } else {
                        var _xy2 = _this3._getDrawXY(pixel, style.offsets.left, style.offsets.top, img.width, img.height, 1);
                        _this3._drawImage(_this3.ctx, img, _xy2.x, _xy2.y, img.width, img.height);
                    }
                });
            };

            for (var i = 0, len = pixels.length; i < len; i++) {
                _loop(i, len);
            }
        }
    }, {
        key: '_drawImage',
        value: function _drawImage(ctx, img, x, y, width, height) {
            ctx.drawImage(img, x, y, width, height);
        }
    }]);

    return ImgOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveLineOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasOverlay = __webpack_require__(2);

var _util = __webpack_require__(0);

var _MapStyle = __webpack_require__(7);

var _MoveLineConfig = __webpack_require__(42);

var _MoveLineConfig2 = _interopRequireDefault(_MoveLineConfig);

var _BaseClass2 = __webpack_require__(12);

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
    function Marker(opts) {
        _classCallCheck(this, Marker);

        this.styleConfig = {
            markerColor: opts.markerColor || opts.color,
            markerRadius: opts.markerRadius,
            fontColor: opts.color
        };
        this.text = opts.name;
        this.point = opts.point;
    }

    _createClass(Marker, [{
        key: 'draw',
        value: function draw(ctx, map) {
            var _map$pointToPixel = map.pointToPixel(this.point),
                x = _map$pointToPixel.x,
                y = _map$pointToPixel.y;

            var _styleConfig = this.styleConfig,
                markerColor = _styleConfig.markerColor,
                markerRadius = _styleConfig.markerRadius,
                fontColor = _styleConfig.fontColor;


            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = markerColor;
            ctx.arc(x, y, markerRadius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '12px Microsoft YaHei';
            ctx.fillStyle = fontColor || markerColor;
            ctx.fillText(this.text, x, y - 10);
            ctx.restore();
        }
    }]);

    return Marker;
}();

var MarkLine = function () {
    function MarkLine(opts) {
        _classCallCheck(this, MarkLine);

        this.from = opts.from;
        this.to = opts.to;
        this.id = opts.id;
        this.step = 0;
        this.path = null;
    }

    _createClass(MarkLine, [{
        key: 'getPointList',
        value: function getPointList(from, to) {
            var points = [[from.x, from.y], [to.x, to.y]];
            var ex = points[1][0];
            var ey = points[1][1];
            points[3] = [ex, ey];
            points[1] = this.getOffsetPoint(points[0], points[3]);
            points[2] = this.getOffsetPoint(points[3], points[0]);
            points = this.smoothSpline(points, false);
            points[points.length - 1] = [ex, ey];
            return points;
        }
    }, {
        key: 'getOffsetPoint',
        value: function getOffsetPoint(start, end) {
            var distance = this.getDistance(start, end) / 3;
            var angle = void 0,
                dX = void 0,
                dY = void 0;
            var mp = [start[0], start[1]];
            var deltaAngle = -0.2;
            if (start[0] != end[0] && start[1] != end[1]) {
                var k = (end[1] - start[1]) / (end[0] - start[0]);
                angle = Math.atan(k);
            } else if (start[0] == end[0]) {
                angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
            } else {
                angle = 0;
            }
            if (start[0] <= end[0]) {
                angle -= deltaAngle;
                dX = Math.round(Math.cos(angle) * distance);
                dY = Math.round(Math.sin(angle) * distance);
                mp[0] += dX;
                mp[1] += dY;
            } else {
                angle += deltaAngle;
                dX = Math.round(Math.cos(angle) * distance);
                dY = Math.round(Math.sin(angle) * distance);
                mp[0] -= dX;
                mp[1] -= dY;
            }
            return mp;
        }
    }, {
        key: 'smoothSpline',
        value: function smoothSpline(points, isLoop) {
            var len = points.length;
            var ret = [];
            var distance = 0;
            for (var i = 1; i < len; i++) {
                distance += this.getDistance(points[i - 1], points[i]);
            }
            var segs = distance / 2;
            segs = segs < len ? len : segs;
            for (var _i = 0; _i < segs; _i++) {
                var pos = _i / (segs - 1) * (isLoop ? len : len - 1);
                var idx = Math.floor(pos);
                var w = pos - idx;
                var p0 = void 0;
                var p1 = points[idx % len];
                var p2 = void 0;
                var p3 = void 0;
                if (!isLoop) {
                    p0 = points[idx === 0 ? idx : idx - 1];
                    p2 = points[idx > len - 2 ? len - 1 : idx + 1];
                    p3 = points[idx > len - 3 ? len - 1 : idx + 2];
                } else {
                    p0 = points[(idx - 1 + len) % len];
                    p2 = points[(idx + 1) % len];
                    p3 = points[(idx + 2) % len];
                }
                var w2 = w * w;
                var w3 = w * w2;

                ret.push([this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)]);
            }
            return ret;
        }
    }, {
        key: 'interpolate',
        value: function interpolate(p0, p1, p2, p3, t, t2, t3) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }, {
        key: 'getDistance',
        value: function getDistance(p1, p2) {
            return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
        }
    }, {
        key: 'drawMarker',
        value: function drawMarker(context, map) {
            this.from.draw(context, map);
            this.to.draw(context, map);
        }
    }, {
        key: 'drawLinePath',
        value: function drawLinePath(context, styleConfig, map) {
            var pointList = this.path = this.getPointList(map.pointToPixel(this.from.point), map.pointToPixel(this.to.point));
            var len = pointList.length;
            context.save();
            context.beginPath();
            context.lineWidth = styleConfig.lineWidth;
            context.strokeStyle = styleConfig.colors[this.id];

            if (!styleConfig.lineType || styleConfig.lineType == 'solid') {
                context.moveTo(pointList[0][0], pointList[0][1]);
                for (var i = 0; i < len; i++) {
                    context.lineTo(pointList[i][0], pointList[i][1]);
                }
            } else if (styleConfig.lineType == 'dashed' || styleConfig.lineType == 'dotted') {
                for (var _i2 = 1; _i2 < len; _i2 += 2) {
                    context.moveTo(pointList[_i2 - 1][0], pointList[_i2 - 1][1]);
                    context.lineTo(pointList[_i2][0], pointList[_i2][1]);
                }
            }
            context.stroke();
            context.restore();
            this.step = 0;
        }
    }, {
        key: 'drawMoveCircle',
        value: function drawMoveCircle(context, styleConfig, map) {
            var pointList = this.path || this.getPointList(map.pointToPixel(this.from.point), map.pointToPixel(this.to.point));
            context.save();
            context.fillStyle = styleConfig.fillColor;
            context.shadowColor = styleConfig.shadowColor;
            context.shadowBlur = styleConfig.shadowBlur;
            context.beginPath();
            context.arc(pointList[this.step][0], pointList[this.step][1], styleConfig.moveRadius, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
            context.restore();
            this.step += 1;
            if (this.step >= pointList.length) {
                this.step = 0;
            }
        }
    }]);

    return MarkLine;
}();

var MoveLineOverlay = exports.MoveLineOverlay = function (_BaseClass) {
    _inherits(MoveLineOverlay, _BaseClass);

    function MoveLineOverlay(opts) {
        _classCallCheck(this, MoveLineOverlay);

        var _this = _possibleConstructorReturn(this, (MoveLineOverlay.__proto__ || Object.getPrototypeOf(MoveLineOverlay)).call(this));

        _this.markLines = [];
        _this.map = null;
        _this.styleConfig = null;
        _this.data = opts.data || [];
        _this.baseLayer = null;
        _this.animationLayer = null;
        _this.setOptionStyle(opts);
        _this.render = _this.render.bind(_this);
        _this.animationDraw = null;
        return _this;
    }

    _createClass(MoveLineOverlay, [{
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            var option = (0, _util.merge)(_MoveLineConfig2.default, ops);
            this.styleConfig = option.style.normal;
            this.data = ops.data ? option.data : this.data;
            this.tMapStyle(option.skin);
            if (this.baseLayer) {
                this.markLines.length = 0;
                this.draw();
            }
        }
    }, {
        key: 'tMapStyle',
        value: function tMapStyle(skin) {

            var styleJson = null;
            if ((0, _util.isString)(skin)) {
                styleJson = skin == 'Blueness' ? _MapStyle.Blueness : _MapStyle.WhiteLover;
            } else if ((0, _util.isArray)(skin)) {
                styleJson = skin;
            }
            skin && this.map && this.map.setMapStyle({
                styleJson: styleJson
            });
        }
    }, {
        key: 'initialize',
        value: function initialize(map) {
            this.map = map;
            this.baseLayer = new _CanvasOverlay.CanvasOverlay({
                repaintEnd: this.draw.bind(this)
            });
            this.animationLayer = new _CanvasOverlay.CanvasOverlay();
            map.addOverlay(this.baseLayer);
            map.addOverlay(this.animationLayer);

            var now = void 0;
            var then = Date.now();
            var interval = 1000 / this.styleConfig.fps;
            var delta = void 0;
            var me = this;

            function drawFrame() {
                requestAnimationFrame(drawFrame);
                now = Date.now();
                delta = now - then;
                if (delta > interval) {
                    then = now - delta % interval;
                    me.render();
                }
            }
            this.animationDraw = drawFrame;
            this.animationDraw();
        }
    }, {
        key: 'render',
        value: function render() {
            var markLines = this.markLines,
                animationLayer = this.animationLayer,
                styleConfig = this.styleConfig;

            var animationCtx = animationLayer.ctx;
            if (!animationCtx) {
                return;
            }

            if (!animationLayer.animationFlag) {
                animationLayer.clearCanvas();
                return;
            }
            animationCtx.fillStyle = 'rgba(0,0,0,0.93)';
            var prev = animationCtx.globalCompositeOperation;
            animationCtx.globalCompositeOperation = 'destination-in';
            var size = this.map.getSize();
            animationCtx.fillRect(0, 0, size.width, size.height);
            animationCtx.globalCompositeOperation = prev;

            for (var i = 0; i < markLines.length; i++) {
                var markLine = markLines[i];
                markLine.drawMoveCircle(animationCtx, styleConfig, this.map);
            }
        }
    }, {
        key: 'drawBaseLayer',
        value: function drawBaseLayer() {
            var baseCtx = this.baseLayer.ctx;
            if (!baseCtx) {
                return;
            }
            if (this.markLines.length == 0) {
                this.addMarkLine();
            }
            var styleConfig = this.styleConfig,
                map = this.map;

            this.baseLayer.clearCanvas();
            this.markLines.forEach(function (line) {
                line.drawMarker(baseCtx, map);
                line.drawLinePath(baseCtx, styleConfig, map);
            });
        }
    }, {
        key: 'addMarkLine',
        value: function addMarkLine() {
            var styleConfig = this.styleConfig,
                markLines = this.markLines,
                data = this.data;

            markLines.length = 0;

            data.forEach(function (line, i) {
                markLines.push(new MarkLine({
                    id: i,
                    from: new Marker({
                        name: line.from.city,
                        markerColor: styleConfig.markerColor,
                        markerRadius: styleConfig.markerRadius,
                        point: new BMap.Point(line.from.lnglat[0], line.from.lnglat[1]),
                        color: styleConfig.markerColor || styleConfig.colors[i]
                    }),
                    to: new Marker({
                        name: line.to.city,
                        markerColor: styleConfig.markerColor,
                        markerRadius: styleConfig.markerRadius,
                        point: new BMap.Point(line.to.lnglat[0], line.to.lnglat[1]),
                        color: styleConfig.markerColor || styleConfig.colors[i]
                    })
                }));
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!(0, _util.isArray)(points)) {
                throw new TypeError('inMap: data must be a Array');
            }
            this.data = points;
            this.markLines.length = 0;
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.baseLayer.canvasResize();
            this.animationLayer.canvasResize();
            this.drawBaseLayer();
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            window.requestAnimationFrame(this.animationDraw);
            this.markLines = [];
            this.map.removeOverlay(this.animationLayer);
            this.map.removeOverlay(this.baseLayer);
        }
    }]);

    return MoveLineOverlay;
}(_BaseClass3.default);

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = {};

var WorkerMrg = function () {
    function WorkerMrg() {
        _classCallCheck(this, WorkerMrg);

        this.worker = null;
        this.workerContent = '[workerContentString]';
    }

    _createClass(WorkerMrg, [{
        key: 'create',
        value: function create(workerPath) {
            var workerUrl = void 0;
            if (this.workerContent.length == 21) {
                workerUrl = workerPath.indexOf('http') > -1 ? URL.createObjectURL(new Blob(['importScripts(\'' + workerPath + '\');'])) : workerPath;
            } else {
                workerUrl = URL.createObjectURL(new Blob([this.workerContent], {
                    type: 'application/javascript'
                }));
            }

            this.worker = new Worker(workerUrl);
            this.worker.addEventListener('message', this.message);
            this.worker.onerror = function () {
                throw new TypeError('inMap : worker.onerror');
            };
        }
    }, {
        key: 'message',
        value: function message(e) {
            var data = e.data;
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            if (instances[classPath + '_' + hashCode] && instances[classPath + '_' + hashCode] == hashCode + '_' + msgId) {
                instances[hashCode + '_' + msgId](data.response.data);
            } else {
                instances[hashCode + '_' + msgId] = null;
            }
        }
    }, {
        key: 'postMessage',
        value: function postMessage(data, callback) {
            if (this.worker == null) {
                this.create('../dist/worker.js');
            }
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            instances[hashCode + '_' + msgId] = callback;

            instances[classPath + '_' + hashCode] = hashCode + '_' + msgId;
            this.worker.postMessage(data);
        }
    }]);

    return WorkerMrg;
}();

var workerMrg = exports.workerMrg = new WorkerMrg();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: false,
        customClass: 'inmap-tooltip-black',
        offsets: {
            top: 5,
            left: 12
        }

    },
    legend: {
        show: false,
        toFixed: 2 },

    style: {
        normal: {
            borderWidth: 0.1,
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            mergeCount: 1.5,
            label: {
                show: false,
                color: 'rgba(0,0,0,1)',
                font: '13px Arial'
            }
        },

        colors: [],
        splitList: []

    },
    data: [],
    event: {
        multiSelect: false, onMouseClick: function onMouseClick() {},
        onState: function onState() {}
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    style: {
        normal: {
            borderColor: 'rgba(50, 50, 255, 0.8)',
            borderWidth: 0.05
        }
    },
    data: [],
    event: {
        onState: function onState() {}
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: false,
        customClass: 'inmap-tooltip-black',
        offsets: {
            top: 5,
            left: 12
        }

    },
    legend: {
        show: false,
        toFixed: 2 },
    draw: {},
    style: {
        normal: {
            borderWidth: 0.1,
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            mergeCount: 1.5,
            label: {
                show: false,
                color: 'rgba(0,0,0,1)',
                font: '13px Arial'
            }
        },

        colors: [],
        splitList: []

    },
    data: [],
    event: {
        multiSelect: false, onMouseClick: function onMouseClick() {},
        onState: function onState() {}
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    style: {
        normal: {
            fps: 25,
            color: '#FAFA32',
            radius: 20,
            speed: 0.15 }
    },
    data: []
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: true,
        customClass: 'inmap-tooltip-black',
        formatter: '{count}',
        offsets: {
            top: 5,
            left: 12
        }
    },
    legend: {
        show: true,
        title: '图例'
    },
    style: {
        type: 'sum',
        colors: ['rgba(31,98,1,1)', 'rgba(95,154,4,1)', 'rgba(139,227,7,1)', 'rgba(218,134,9,1)', 'rgba(220,54,6,1)', 'rgba(218,2,8,1)', 'rgba(148,1,2,1)', 'rgba(92,1,0,1)'],
        normal: {
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            padding: 1,
            size: 50,
            unit: 'px',
            label: {
                show: false,
                font: '12px sans-serif',
                shadowBlur: 0,
                lineWidth: 1,
                color: 'rgba(75,80,86,1)'
            }
        },
        mouseOver: {},
        selected: {}

    },
    data: [],
    event: {
        multiSelect: false,
        onMouseClick: function onMouseClick() {},
        onState: function onState() {}
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: false,
        offsets: {
            top: 5,
            left: 12
        }
    },
    legend: {
        show: false
    },
    style: {
        gradient: {
            0.25: 'rgb(0,0,255)',
            0.55: 'rgb(0,255,0)',
            0.85: 'rgb(255,255,0)',
            1.0: 'rgb(255,0,0)'
        },
        normal: {
            radius: 15,
            minOpacity: 0,
            maxOpacity: 1,
            minValue: 0,
            maxValue: 0,
            minScope: 0,
            maxScope: 1 }
    },
    data: [],
    event: {
        multiSelect: false,
        onState: function onState() {}
    }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: true,
        customClass: 'inmap-tooltip-black',
        formatter: '{count}',
        offsets: {
            top: 5,
            left: 12
        }
    },
    legend: {
        show: true,
        title: '图例'
    },
    style: {
        colors: ['rgba(31,98,1,1)', 'rgba(95,154,4,1)', 'rgba(139,227,7,1)', 'rgba(218,134,9,1)', 'rgba(220,54,6,1)', 'rgba(218,2,8,1)', 'rgba(148,1,2,1)', 'rgba(92,1,0,1)'],
        normal: {
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            padding: 1,
            size: 50,
            unit: 'px',
            label: {
                show: false,
                font: '12px sans-serif',
                shadowBlur: 0,
                lineWidth: 1,
                color: 'rgba(75,80,86,1)'
            }
        },
        mouseOver: {},
        selected: {}

    },
    data: [],
    event: {
        multiSelect: false,
        onMouseClick: function onMouseClick() {},
        onState: function onState() {}
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    tooltip: {
        show: true,
        customClass: 'inmap-tooltip-black',
        offsets: {
            top: 5,
            left: 12
        },
        formatter: '{count}'
    },
    legend: {
        show: false
    },
    style: {
        normal: {
            icon: null,
            width: 0,
            height: 0,
            offsets: {
                top: 0,
                left: 0
            }
        },
        mouseOver: {},
        selected: {},
        colors: [],
        splitList: []
    },
    data: [],
    event: {
        multiSelect: false, onMouseClick: function onMouseClick() {},
        onState: function onState() {}
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    center: [],
    id: null,
    skin: null,
    zoom: {
        value: 5,
        show: true,
        max: 18,
        min: 5
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    show: false,
    title: null,
    formatter: null,
    list: []
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    style: {
        normal: {
            markerRadius: 3,

            markerColor: '#fff',

            lineType: 'solid',

            lineWidth: 1,

            colors: ['#F9815C', '#F8AB60', '#EDCC72', '#E2F194', '#94E08A', '#4ECDA5'],

            moveRadius: 2,

            fillColor: '#fff',

            shadowColor: '#fff',

            shadowBlur: 5,
            fps: 30,
            skin: null }
    },
    data: []
};

/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlashDotOverlay = exports.MoveLineOverlay = exports.ImgOverlay = exports.HoneycombOverlay = exports.CircuitOverlay = exports.HeatOverlay = exports.BoundaryOverlay = exports.GriddingOverlay = exports.DotOverlay = exports.Map = exports.utils = exports.version = undefined;

var _DotOverlay = __webpack_require__(16);

var _GriddingOverlay = __webpack_require__(18);

var _BoundaryOverlay = __webpack_require__(14);

var _HeatOverlay = __webpack_require__(19);

var _CircuitOverlay = __webpack_require__(15);

var _HoneycombOverlay = __webpack_require__(20);

var _ImgOverlay = __webpack_require__(21);

var _MoveLineOverlay = __webpack_require__(22);

var _FlashDotOverlay = __webpack_require__(17);

var _FlashDotOverlay2 = _interopRequireDefault(_FlashDotOverlay);

var _index = __webpack_require__(13);

var _util = __webpack_require__(0);

var utils = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = "1.5.5";
console.log('inMap v' + version);

var inMap = {
    version: version,
    utils: utils,
    Map: _index.Map,
    DotOverlay: _DotOverlay.DotOverlay,
    GriddingOverlay: _GriddingOverlay.GriddingOverlay,
    BoundaryOverlay: _BoundaryOverlay.BoundaryOverlay,
    HeatOverlay: _HeatOverlay.HeatOverlay,
    CircuitOverlay: _CircuitOverlay.CircuitOverlay,
    HoneycombOverlay: _HoneycombOverlay.HoneycombOverlay,
    ImgOverlay: _ImgOverlay.ImgOverlay,
    MoveLineOverlay: _MoveLineOverlay.MoveLineOverlay,
    FlashDotOverlay: _FlashDotOverlay2.default
};
exports.version = version;
exports.utils = utils;
exports.Map = _index.Map;
exports.DotOverlay = _DotOverlay.DotOverlay;
exports.GriddingOverlay = _GriddingOverlay.GriddingOverlay;
exports.BoundaryOverlay = _BoundaryOverlay.BoundaryOverlay;
exports.HeatOverlay = _HeatOverlay.HeatOverlay;
exports.CircuitOverlay = _CircuitOverlay.CircuitOverlay;
exports.HoneycombOverlay = _HoneycombOverlay.HoneycombOverlay;
exports.ImgOverlay = _ImgOverlay.ImgOverlay;
exports.MoveLineOverlay = _MoveLineOverlay.MoveLineOverlay;
exports.FlashDotOverlay = _FlashDotOverlay2.default;
exports.default = inMap;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(5);

var _Legend = __webpack_require__(41);

var _Legend2 = _interopRequireDefault(_Legend);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Legend = function () {
    function Legend(toolDom, opts) {
        _classCallCheck(this, Legend);

        this.opts = opts || _Legend2.default;
        this.dom = this.crateDom(toolDom);
        this.hide();
    }

    _createClass(Legend, [{
        key: 'crateDom',
        value: function crateDom(toolDom) {
            var div = document.createElement('div');
            div.classList.add('inmap-legend');
            toolDom.appendChild(div);
            return div;
        }
    }, {
        key: 'show',
        value: function show() {
            this.dom.style.display = 'block';
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.dom.style.display = 'none';
        }
    }, {
        key: 'toFixed',
        value: function toFixed(num) {
            return isNaN(num) ? num : parseFloat(num).toFixed(this.opts.toFixed);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.opts.title = title;
            this.render();
        }
    }, {
        key: 'setOption',
        value: function setOption(opts) {
            this.opts = (0, _util.merge)(_Legend2.default, this.opts, opts);
            this.render();
        }
    }, {
        key: 'setItems',
        value: function setItems(list) {
            this.opts.list = list;
            this.render();
        }
    }, {
        key: '_verify',
        value: function _verify() {
            var _opts = this.opts,
                show = _opts.show,
                title = _opts.title,
                list = _opts.list;

            if (!(0, _util.isBoolean)(show)) {
                throw new TypeError('inMap: legend options show must be a Boolean');
            }
            if (!(0, _util.isEmpty)(title) && !(0, _util.isString)(title)) {
                throw new TypeError('inMap: legend options title must be a String');
            }
            if (!(0, _util.isArray)(list)) {
                throw new TypeError('inMap: legend options list must be a Array');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            this._verify();
            var _opts2 = this.opts,
                show = _opts2.show,
                title = _opts2.title,
                list = _opts2.list;

            if (show) {
                this.show();
            } else {
                this.hide();
                return;
            }

            var str = '';
            if (title) {
                str = '<div class="inmap-legend-title">' + title + ' </div>';
            }

            str += '<table cellpadding="0" cellspacing="0">';
            list.forEach(function (val, index) {
                var text = null,
                    backgroundColor = val.backgroundColor;
                var isShow = backgroundColor != null;
                var legendBg = new _Color.Color(backgroundColor),
                    difference = 0.2;

                var opacity = val.opacity;
                if (opacity) {
                    opacity += difference;
                }
                if (legendBg.a) {
                    opacity = legendBg.a + difference;
                } else {
                    opacity = 1;
                }
                backgroundColor = legendBg.getRgbaStyle(opacity);
                if (val.text) {
                    text = val.text;
                } else if (_this.opts.formatter) {
                    text = _this.opts.formatter(_this.toFixed(val.start), _this.toFixed(val.end), index, val);
                } else {
                    text = _this.toFixed(val.start) + ' ~ ' + (val.end == null ? '<span class="inmap-infinity"></span>' : _this.toFixed(val.end));
                }
                var td = isShow ? ' <td style="background:' + backgroundColor + '; width:17px;"></td>' : '';
                str += '\n                <tr>\n                   ' + td + '\n                    <td class="inmap-legend-text">\n                       ' + text + '\n                    </td>\n                </tr>\n                ';
            });
            str += '</table>';
            if (list.length <= 0) {
                this.hide();
            }
            this.dom.innerHTML = str;
        }
    }]);

    return Legend;
}();

exports.default = Legend;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolTip = function () {
    function ToolTip(toolDom) {
        _classCallCheck(this, ToolTip);

        this.dom = this.create(toolDom);
        this.tooltipTemplate = null;
        this.opts = {};
        this.hide();
    }

    _createClass(ToolTip, [{
        key: 'create',
        value: function create(toolDom) {
            var dom = document.createElement('div');
            dom.classList.add('inmap-tooltip');
            toolDom.appendChild(dom);
            return dom;
        }
    }, {
        key: 'compileTooltipTemplate',
        value: function compileTooltipTemplate(formatter) {
            formatter = '`' + formatter.replace(/\{/g, '${overItem.') + '`';
            this.tooltipTemplate = new Function('overItem', 'return ' + formatter);
        }
    }, {
        key: 'show',
        value: function show(x, y) {
            var _opts$offsets = this.opts.offsets,
                left = _opts$offsets.left,
                top = _opts$offsets.top;

            this.dom.style.left = x + left + 'px';
            this.dom.style.top = y + top + 'px';
            this.dom.style.display = 'block';
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.dom.style.display = 'none';
        }
    }, {
        key: 'setOption',
        value: function setOption(opts) {
            var result = (0, _util.merge)(this.opts, opts);
            var formatter = result.formatter,
                customClass = result.customClass;


            if ((0, _util.isString)(formatter)) {
                this.compileTooltipTemplate(result.formatter);
            }

            if (this.opts.customClass) {
                this.dom.classList.remove(this.opts.customClass);
            }

            this.dom.classList.add(customClass);
            this.opts = result;
        }
    }, {
        key: 'render',
        value: function render(event, overItem) {
            if (!this.opts.show) return;
            if (overItem) {
                var formatter = this.opts.formatter;
                if ((0, _util.isFunction)(formatter)) {
                    this.dom.innerHTML = formatter(overItem);
                } else if ((0, _util.isString)(formatter)) {
                    this.dom.innerHTML = this.tooltipTemplate(overItem);
                }
                this.show(event.offsetX, event.offsetY);
            } else {
                this.hide();
            }
        }
    }]);

    return ToolTip;
}();

exports.default = ToolTip;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapZoom = exports.MapZoom = function () {
    function MapZoom(map, mapDom, opts) {
        _classCallCheck(this, MapZoom);

        this.map = map;
        this.mapDom = mapDom;
        this.zoom = opts;
        this.createDom();
    }

    _createClass(MapZoom, [{
        key: 'createDom',
        value: function createDom() {
            var div = document.createElement('div');
            div.classList.add('inmap-scale-group');
            div.innerHTML = '<a>+</a > <a>-</a >';
            this.mapDom.appendChild(div);
            this.event(div);
        }
    }, {
        key: 'setButtonState',
        value: function setButtonState() {
            var doms = this.mapDom.querySelectorAll('.inmap-scale-group a');
            var zoom = this.map.getZoom();
            if (zoom >= this.zoom.max) {
                doms[0].setAttribute('disabled', 'true');
            } else {
                doms[0].removeAttribute('disabled');
            }
            if (zoom <= this.zoom.min) {
                doms[1].setAttribute('disabled', 'true');
            } else {
                doms[1].removeAttribute('disabled');
            }
        }
    }, {
        key: 'event',
        value: function event(div) {
            var _this = this;

            var doms = div.querySelectorAll('a');
            doms[0].addEventListener('click', function () {
                var zoom = _this.map.getZoom();
                if (zoom < _this.zoom.max) {
                    _this.map.zoomIn();
                }
            });
            doms[1].addEventListener('click', function () {
                var zoom = _this.map.getZoom();
                if (zoom > _this.zoom.min) {
                    _this.map.zoomOut();
                }
            });
        }
    }]);

    return MapZoom;
}();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BatchesData = function () {
    function BatchesData(option) {
        _classCallCheck(this, BatchesData);

        this.setOption(option);
        this.intervalId = null;
        this.splitArray = [];
        this.index = 0;
    }

    _createClass(BatchesData, [{
        key: 'setOption',
        value: function setOption(_ref) {
            var _ref$interval = _ref.interval,
                interval = _ref$interval === undefined ? 400 : _ref$interval,
                _ref$splitCount = _ref.splitCount,
                splitCount = _ref$splitCount === undefined ? 1500 : _ref$splitCount;

            this.clear();
            this.interval = interval;
            this.splitCount = splitCount;
        }
    }, {
        key: 'clear',
        value: function clear() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.splitArray = [];
            this.index = 0;
        }
    }, {
        key: 'action',
        value: function action(data, callback, ctx) {
            var _this = this;

            this.clear();
            var splitCount = this.splitCount,
                interval = this.interval;

            this.splitArray = (0, _util.chunk)(data, splitCount);

            var loop = function loop() {
                var item = _this.splitArray[_this.index];
                item && callback(ctx, item);

                _this.index++;

                if (_this.index >= _this.splitArray.length - 1) {
                    _this.clear();
                } else {
                    _this.intervalId = setTimeout(loop, interval);
                }
            };
            loop();
        }
    }]);

    return BatchesData;
}();

exports.default = BatchesData;

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".inmap-container {\n  opacity: 1;\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;\n}\n.inmap-container,\n.inmap-container *:after,\n.inmap-container *:before {\n  display: -webkit-box;\n}\n.inmap-scale-group {\n  position: absolute;\n  right: 10px;\n  bottom: 35px;\n  z-index: 999999;\n  opacity: 1;\n}\n.inmap-scale-group > a {\n  display: block;\n  width: 24px;\n  height: 24px;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  background: #fff;\n  margin-top: 5px;\n  color: #666;\n  cursor: pointer;\n  text-decoration: none;\n}\n.inmap-scale-group > a[disabled] {\n  color: rgba(187, 190, 196, 0.6);\n  background-color: #f7f7f7;\n  border-color: #dddee1;\n}\n.inmap-tooltip {\n  position: absolute;\n  opacity: 1;\n  display: none;\n  pointer-events: none;\n  border-style: solid;\n  white-space: nowrap;\n  z-index: 9999999;\n  transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 4px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 14px;\n  font-family: sans-serif;\n  line-height: 21px;\n  padding: 5px;\n  left: 323px;\n  top: 451px;\n}\n.inmap-tooltip-black {\n  border-width: 0px;\n  border-color: #333333;\n  background-color: rgba(50, 50, 50, 0.7);\n  color: #ffffff;\n}\n.inmap-legend {\n  position: absolute;\n  list-style: none;\n  opacity: 1;\n  height: auto;\n  font-size: 12px;\n  left: 35px;\n  bottom: 35px;\n  text-align: center;\n  border: 10px solid rgba(255, 255, 255, 0.7);\n  box-shadow: rgba(8, 16, 34, 0.3) 2px 0px 7px;\n  border-radius: 5px;\n  z-index: 9999;\n}\n.inmap-legend .inmap-legend-title {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 3px;\n}\n.inmap-legend > table {\n  width: 100%;\n}\n.inmap-legend table,\n.inmap-legend table tbody,\n.inmap-legend table tr,\n.inmap-legend table tr td {\n  padding: 0;\n  border: 0;\n  margin: 0;\n}\n.inmap-legend .inmap-chunk {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 14px;\n}\n.inmap-legend .inmap-legend-text {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-left: 5px;\n  text-align: left;\n  font-size: 12px;\n}\n.inmap-legend .inmap-infinity {\n  top: 4px;\n  left: 7px;\n  position: relative;\n}\n.inmap-legend .inmap-infinity:before,\n.inmap-legend .inmap-infinity:after {\n  content: \"\";\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid #495060;\n  -moz-border-radius: 50px 50px 0;\n  border-radius: 50px 50px 0 50px;\n  -webkit-transform: rotate(128deg);\n  -moz-transform: rotate(128deg);\n  -ms-transform: rotate(128deg);\n  -o-transform: rotate(128deg);\n  transform: rotate(128deg);\n}\n.inmap-legend .inmap-infinity:after {\n  left: auto;\n  right: 0;\n  -moz-border-radius: 50px 50px 50px 0;\n  border-radius: 50px 50px 50px 0;\n  -webkit-transform: rotate(-128deg);\n  -moz-transform: rotate(-128deg);\n  -ms-transform: rotate(-128deg);\n  -o-transform: rotate(-128deg);\n  transform: rotate(-128deg);\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(52)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./map.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./map.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});