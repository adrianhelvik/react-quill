"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = First;

var _react = _interopRequireWildcard(require("react"));

var _lib = _interopRequireDefault(require("../lib.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function First() {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 1),
      startTime = _useState2[0];

  var _useState3 = (0, _react.useState)('Placeholder'),
      _useState4 = _slicedToArray(_useState3, 2),
      placeholder = _useState4[0],
      setPlaceholder = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disableBold = _useState6[0],
      setDisableBold = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      timePassed = _useState8[0],
      setTimePassed = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      value = _useState10[0],
      setValue = _useState10[1];

  var options = {
    modules: {
      toolbar: [[disableBold ? null : 'bold', 'italic', 'underline'].filter(Boolean), // toggled buttons
      [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        script: 'sub'
      }, {
        script: 'super'
      }], // superscript/subscript
      [{
        header: [1, 2, 3, 4, 5, false]
      }], [{
        align: []
      }], ['link', 'image', 'video'], ['clean'] // remove formatting button
      // ['formula'], Requires window.katex to be set
      ],
      clipboard: {
        matchVisual: false
      }
    },
    placeholder: '',
    theme: 'snow'
  };

  var reset = function reset() {
    return setValue(null);
  };

  (0, _react.useEffect)(function () {
    setInterval(function () {
      var seconds = Math.floor((new Date() - startTime) / 1000);
      setTimePassed(seconds);
    }, 100);
  }, [startTime, setTimePassed]);
  var onChange = (0, _react.useCallback)(function (contents) {
    if (disableBold) {
      setValue({
        ops: contents.ops.map(function (x) {
          x = _objectSpread({}, x);

          if (x && x.attributes && x.attributes.bold) {
            x.attributes = _objectSpread({}, x.attributes);
            delete x.attributes.bold;

            if (!Object.keys(x.attributes).length) {
              delete x.attributes;
            }
          }

          return x;
        })
      });
    } else {
      setValue(contents);
    }
  }, [disableBold]);

  var toggleDisableBold = function toggleDisableBold(e) {
    setDisableBold(e.target.checked);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_lib.default, {
    value: value,
    onChange: onChange,
    placeholder: "".concat(placeholder, " (").concat(timePassed, "s)"),
    options: options
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Result:", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(value, null, 2)), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: reset
  }, "Reset"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: disableBold,
    onChange: toggleDisableBold
  }), ' ', "Disable bold"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    value: placeholder,
    onChange: function onChange(e) {
      return setPlaceholder(e.target.value);
    }
  }));
}