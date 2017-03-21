'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var req = _ref.req,
      args = _ref.args;

  if (req.user) {
    throw new Error('You already have an account.');
  }

  var user = new _model2.default(_extends({ req: req }, args));

  if (!args.email || !args.password) {
    throw new Error('You must provide an email and password.');
  }

  return _model2.default.findOne({ email: args.email }).then(function (existingUser) {
    if (existingUser) {
      throw new Error('This e-mail is in use.');
    }

    return user.save();
  }).then(function (createdUser) {
    return new Promise(function (resolve, reject) {
      req.logIn(createdUser, function (error) {
        if (error) {
          reject(error);
        }

        resolve(createdUser);
      });
    });
  });
};