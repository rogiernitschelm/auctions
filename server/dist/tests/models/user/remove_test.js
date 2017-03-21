'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _user_seeds = require('./user_seeds');

var _models = require('../../../models');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('Removing a user', function () {
  var user = void 0;

  before(function (done) {
    user = new _models.User(_user_seeds.validUser);
    user.save().then(function () {
      return done();
    });
  });

  it('deletes a user with model instance remove.', function (done) {
    var email = user.email;

    user.remove().then(function () {
      return _models.User.findOne({ email: email });
    }).then(function (result) {
      (0, _assert2.default)(result === null);
      done();
    });
  });
});