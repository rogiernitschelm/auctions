'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _signup = require('./user_methods/signup');

Object.defineProperty(exports, 'signup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_signup).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}