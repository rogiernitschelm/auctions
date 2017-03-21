'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _user_seeds = require('./user_seeds');

var _models = require('../../../models');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('Creating a user', function () {
  it('saves a user.', function (done) {
    var user = new _models.User(_user_seeds.validUser);

    user.save().then(function (savedUser) {
      (0, _assert2.default)(!savedUser.isNew);
      done();
    });
  });

  it('validates the presence of a password.', function () {
    var user = new _models.User(_user_seeds.invalidUser);
    var validationResult = user.validateSync();
    var message = validationResult.errors.password.message;

    (0, _assert2.default)(message === 'Path `password` is required.');
  });

  it('sanatizes excessive fields', function (done) {
    var user = new _models.User(_user_seeds.validUserHacked);

    user.save().then(function (savedUser) {
      (0, _assert2.default)(savedUser.hackerStuff === undefined);
      done();
    });
  });
});