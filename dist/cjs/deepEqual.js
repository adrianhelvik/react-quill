"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function deepEqual(previous, current) {
  if (previous === current) return true;
  if (!previous && current) return false;
  if (previous && !current) return false;
  if (!previous && !current) return false;

  if (Array.isArray(previous)) {
    if (!Array.isArray(current)) return false;
    if (previous.length !== current.length) return false;

    for (var i = 0; i < previous.length; i++) {
      if (!deepEqual(current[i], previous[i])) {
        return false;
      }
    }

    return true;
  }

  if (_typeof(current) === 'object') {
    if (_typeof(previous) !== 'object') return false;
    var prevKeys = Object.keys(previous);
    var currKeys = Object.keys(current);
    if (prevKeys.length !== currKeys.length) return false;
    prevKeys.sort();
    currKeys.sort();

    for (var _i = 0; _i < prevKeys.length; _i++) {
      if (prevKeys[_i] !== currKeys[_i]) return false;
      var key = prevKeys[_i];
      if (!deepEqual(previous[key], current[key])) return false;
    }

    return true;
  }

  return false;
}

var _default = deepEqual;
exports.default = _default;