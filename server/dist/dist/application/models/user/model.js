'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_schema2.default.pre('save', function save(next) {
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  _bcryptNodejs2.default.genSalt(10, function (genSaltError, salt) {
    if (genSaltError) {
      return next(genSaltError);
    }

    _bcryptNodejs2.default.hash(user.password, salt, null, function (hashError, hash) {
      if (hashError) {
        return next(hashError);
      }

      user.password = hash;
      next();
    });
  });
});

_schema2.default.pre('update', function () {
  this.update({}, { $set: { updatedAt: new Date() } });
});

_schema2.default.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  _bcryptNodejs2.default.compare(candidatePassword, this.password, function (error, isMatch) {
    callback(error, isMatch);
  });
};

exports.default = _mongoose2.default.model('user', _schema2.default);