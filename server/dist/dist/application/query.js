'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user_queries = require('./models/user/user_queries');

exports.default = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: function fields() {
    return {
      currentUser: _user_queries.currentUser,
      adminRequestsUsers: _user_queries.adminRequestsUsers
    };
  }
});