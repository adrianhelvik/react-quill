"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useQuillOnChange(quill, onChange) {
  (0, _react.useEffect)(function () {
    if (!quill) return;
    if (typeof onChange !== 'function') return;
    var handler;
    quill.on('text-change', handler = function handler() {
      onChange(quill.getContents(), quill.container.firstChild.innerHTML);
    });
    return function () {
      quill.off('text-change', handler);
    };
  }, [quill, onChange]);
}

var _default = useQuillOnChange;
exports.default = _default;