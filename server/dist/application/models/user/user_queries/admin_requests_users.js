'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

var _usertype = require('../usertype');

var _usertype2 = _interopRequireDefault(_usertype);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  type: new _graphql.GraphQLList(_usertype2.default),
  resolve: function resolve() {
    return _model2.default.find({});
  }
};