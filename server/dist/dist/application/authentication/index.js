'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var User = _mongoose2.default.model('user');

_passport2.default.serializeUser(function (user, done) {
  done(null, user.id);
});

_passport2.default.deserializeUser(function (id, done) {
  User.findById(id, function (error, user) {
    done(error, user);
  });
});

_passport2.default.use(new _passportLocal.Strategy({ usernameField: 'email' }, function (email, password, done) {
  User.findOne({ email: email.toLowerCase() }, function (userFindError, user) {
    if (userFindError) {
      return done(userFindError);
    }

    if (!user) {
      return done(null, false, 'Invalid credentials.');
    }

    user.comparePassword(password, function (comparePasswordError, isMatch) {
      if (comparePasswordError) {
        return done(comparePasswordError);
      }

      if (isMatch) {
        return done(null, user);
      }

      return done(null, false, 'Invalid credentials.');
    });
  });
}));