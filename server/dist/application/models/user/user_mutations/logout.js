'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usertype = require('../usertype');

var _usertype2 = _interopRequireDefault(_usertype);

var _user_methods = require('../user_methods');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  logout: {
    type: _usertype2.default,
    resolve: function resolve(parentValue, args, req) {
      return (0, _user_methods.logout)({ req: req, args: args });
    }
  }
};