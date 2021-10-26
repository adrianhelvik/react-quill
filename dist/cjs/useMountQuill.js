"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMountQuill;

var _useDeepEqualMemo = _interopRequireDefault(require("./useDeepEqualMemo.js"));

var _react = require("react");

var _flatten = _interopRequireDefault(require("./flatten.js"));

var _quill = _interopRequireDefault(require("quill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useMountQuill(_ref) {
  var uploadImage = _ref.uploadImage,
      passedOptions = _ref.options,
      element = _ref.element;

  var _useState = (0, _react.useState)(Boolean(window.katex)),
      _useState2 = _slicedToArray(_useState, 2),
      katexLoaded = _useState2[0],
      setKatexLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      quill = _useState4[0],
      setQuill = _useState4[1];

  var options = (0, _useDeepEqualMemo.default)(passedOptions);
  var toolbar = (0, _react.useMemo)(function () {
    if (options && options.modules && options.modules.toolbar) {
      return options.modules.toolbar;
    }

    return [];
  }, [options]);
  var requiresKatex = (0, _react.useMemo)(function () {
    return (0, _flatten.default)(toolbar).includes('formula');
  }, [toolbar]);
  (0, _react.useEffect)(function () {
    if (!requiresKatex) return;
    if (katexLoaded) return;
    var interval = setInterval(function () {
      if (window.katex) {
        setKatexLoaded(true);
        clearInterval(interval);
      }
    });
    return function () {
      clearInterval(interval);
    };
  }, [setKatexLoaded, katexLoaded, requiresKatex]);
  (0, _react.useEffect)(function () {
    if (!element) return;

    if (requiresKatex && !katexLoaded) {
      element.innerHTML = '<div style="font-family: sans-serif; color: #ddd">Loading Katex...</div>';
      return;
    }

    var quillNode = document.createElement('div');
    element.appendChild(quillNode);
    var quill = new _quill.default(quillNode, options);
    setQuill(quill);

    if (typeof uploadImage === 'function') {
      quill.getModule('toolbar').addHandler('image', function () {
        uploadImage(quill);
      });
    }

    return function () {
      element.innerHTML = '';
    };
  }, [element, options, requiresKatex, katexLoaded, uploadImage]);
  return quill;
}