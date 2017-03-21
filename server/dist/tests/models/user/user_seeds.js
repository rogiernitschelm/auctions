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

var validUser = exports.validUser = {
  email: 'amail@hoogle.nom',
  password: 'abcd1234',
  firstName: 'Sponge',
  lastName: 'Rob',
  infix: 'of the',
  usertype: 'seller',
  chamberOfCommerce: 'abcd1234',
  companyName: 'Noogle.bom',
  gender: 'male',
  birthDate: '2010-01-01'
};

var invalidUser = exports.invalidUser = {
  email: 'amail@hoogle.nom',
  password: ''
};

var validUserHacked = exports.validUserHacked = _extends({}, validUser, {
  hackerStuff: 'I hackz u1!'
});