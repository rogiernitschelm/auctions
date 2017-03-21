'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _methods = require('../methods');

var _usertype = require('../usertype');

var _usertype2 = _interopRequireDefault(_usertype);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  signup: {
    type: _usertype2.default,
    args: {
      email: { type: _graphql.GraphQLString },
      password: { type: _graphql.GraphQLString },
      // firstName: { type: GraphQLString },
      // lastName: { type: GraphQLString },
      usertype: { type: _graphql.GraphQLString }
    },

    resolve: function resolve(parentValue, args, req) {
      return (0, _methods.signup)({ args: args, req: req });
    }
  }
};