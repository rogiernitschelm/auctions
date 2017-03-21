'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usertype = require('../usertype');

var _usertype2 = _interopRequireDefault(_usertype);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  type: _usertype2.default,
  resolve: function resolve(parentValue, args, req) {
    return req.user;
  }
};