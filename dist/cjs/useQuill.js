"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useMissingThemeWarning = _interopRequireDefault(require("./useMissingThemeWarning.js"));

var _useQuillPlaceholder = _interopRequireDefault(require("./useQuillPlaceholder.js"));

var _useQuillValueSync = _interopRequireDefault(require("./useQuillValueSync.js"));

var _useQuillOnChange = _interopRequireDefault(require("./useQuillOnChange.js"));

var _useMountQuill = _interopRequireDefault(require("./useMountQuill.js"));

var _react = require("react");

var _excluded = ["color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useQuill(_ref) {
  var disallowColors = _ref.disallowColors,
      placeholder = _ref.placeholder,
      uploadImage = _ref.uploadImage,
      className = _ref.className,
      onChange = _ref.onChange,
      noTheme = _ref.noTheme,
      element = _ref.element,
      options = _ref.options,
      value = _ref.value,
      style = _ref.style;
  (0, _useMissingThemeWarning.default)({
    options: options,
    noTheme: noTheme
  });
  var quill = (0, _useMountQuill.default)({
    uploadImage: uploadImage,
    element: element,
    options: options
  });
  (0, _react.useEffect)(function () {
    if (disallowColors && quill) {
      quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
        delta.ops = delta.ops.map(function (op) {
          if (op.attributes && op.attributes.color) {
            var _op$attributes = op.attributes,
                color = _op$attributes.color,
                attributes = _objectWithoutProperties(_op$attributes, _excluded);

            return _objectSpread(_objectSpread({}, op), {}, {
              attributes: attributes
            });
          }

          return op;
        });
        return delta;
      });
    }
  }, [disallowColors, quill]);
  (0, _useQuillPlaceholder.default)(quill, placeholder);
  (0, _useQuillOnChange.default)(quill, onChange);
  (0, _useQuillValueSync.default)(quill, value);
}

var _default = useQuill;
exports.default = _default;