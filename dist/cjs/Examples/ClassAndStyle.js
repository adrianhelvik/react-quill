"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ClassAndStyle;

var _lib = _interopRequireDefault(require("../lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClassAndStyle() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Class and style"), /*#__PURE__*/React.createElement("p", null, "In this example, we'll add a className and style to Quill."), /*#__PURE__*/React.createElement("style", null, '.my-classy-quill { background-color: pink }'), /*#__PURE__*/React.createElement(_lib.default, {
    className: "my-classy-quill",
    value: "Hello Quill!",
    style: {
      padding: 20
    }
  }));
}