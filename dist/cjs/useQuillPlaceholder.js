"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useQuillPlaceholder(quill) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _react.useEffect)(function () {
    if (!quill || !quill.root) return;
    quill.root.dataset.placeholder = placeholder;
  }, [quill, placeholder]);
}

var _default = useQuillPlaceholder;
exports.default = _default;