"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMissingThemeWarning;

var _react = require("react");

function useMissingThemeWarning(_ref) {
  var options = _ref.options,
      noTheme = _ref.noTheme;
  var shownWarnings = (0, _react.useRef)({});
  (0, _react.useEffect)(function () {
    if (noTheme || shownWarnings.current.missingTheme) return;
    var theme = options && options.theme;

    if (!theme) {
      console.warn(['You should supply a theme to react-quill as in', '', "  <Quill options={{ theme: 'snow' }} />", '', 'or explicitly specify that you do not want a theme', '', '  <Quill noTheme={true} />'].join('\n'));
      shownWarnings.current.missingTheme = true;
    }
  }, [noTheme, options]);
}