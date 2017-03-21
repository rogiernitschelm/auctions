'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _mutation = require('./mutation');

var _mutation2 = _interopRequireDefault(_mutation);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = new _graphql.GraphQLSchema({
  query: _query2.default,
  mutation: _mutation2.default
});