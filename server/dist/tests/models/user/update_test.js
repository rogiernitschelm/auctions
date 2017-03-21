'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _user_seeds = require('./user_seeds');

var _models = require('../../../models');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('Updating a user', function () {
  it('updates the e-mail of the user', function (done) {
    var email = 'mail@noogle.hom';
    _models.User.create(_user_seeds.validUser).then(function (createdUser) {
      createdUser.update({ email: email }).then(function () {
        return _models.User.find({ email: email });
      }).then(function (users) {
        (0, _assert2.default)(users[0].email === email);
        done();
      });
    });
  });
});