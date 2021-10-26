"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Examples;

require("./styles.css");

var _First = _interopRequireDefault(require("./First"));

var _Second = _interopRequireDefault(require("./Second"));

var _ClassAndStyle = _interopRequireDefault(require("./ClassAndStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Examples() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "First example"), /*#__PURE__*/React.createElement(_First.default, null), /*#__PURE__*/React.createElement("h1", null, "Second example"), /*#__PURE__*/React.createElement("p", null, "This is Quill without any options. Its first Quill component should print a warning about no theme being specified to the console. The second one should however receive the prop noTheme = true, and not print the warning."), /*#__PURE__*/React.createElement(_Second.default, null), /*#__PURE__*/React.createElement(_ClassAndStyle.default, null));
}