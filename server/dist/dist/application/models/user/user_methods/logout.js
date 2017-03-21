'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var req = _ref.req;

  if (!req.user) {
    throw new Error('You are not logged in.');
  }

  req.logout();
};