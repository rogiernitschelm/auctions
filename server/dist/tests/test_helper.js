'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

before(function () {
  _mongoose2.default.Promise = global.Promise;
  _mongoose2.default.connect('mongodb://localhost/auction_tests');
  _mongoose2.default.connection.once('open', function () {
    return console.log('Ready for testing.');
  }).on('error', function (error) {
    console.warn('An error occured.', error);
  });
});

beforeEach(function (done) {
  _mongoose2.default.connection.collections.users.drop(function () {
    done();
  });
});