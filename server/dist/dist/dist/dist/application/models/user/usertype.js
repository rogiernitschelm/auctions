'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'UserType',
  fields: function fields() {
    return {
      email: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
      id: { type: _graphql.GraphQLID },
      usertype: { type: _graphql.GraphQLString },
      firstName: { type: _graphql.GraphQLString }
    };
  }
});