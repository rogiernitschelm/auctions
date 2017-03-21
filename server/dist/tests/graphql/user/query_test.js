'use strict';

var _graphqlTools = require('graphql-tools');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _schema = require('../../../schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('GraphQL queries', function () {
  var testServer = void 0;

  before(function (done) {
    testServer = (0, _graphqlTools.mockServer)(_schema2.default, {
      String: function String() {
        return 'I am a test-string';
      }
    });

    done();
  });

  it('returns a valid user query', function (done) {
    testServer.query('\n      query {\n        users {\n          id\n          email\n          firstName\n          lastName\n          birthDate\n          usertype\n          chamberOfCommerce\n          bids {\n            id\n            auction\n            bidder\n            createdAt\n          }\n          auctions {\n            id\n            title\n            highestBid\n            startingPrice\n            createdAt\n            updatedAt\n            description\n            type\n            endDateTime\n          }\n        }\n      }\n    ').then(function (response) {
      (0, _assert2.default)(response.data.users.length === 2);
      (0, _assert2.default)(response.data.users[0].bids.length === 2);
      (0, _assert2.default)(response.data.users[0].auctions.length === 2);
      done();
    });
  });
});