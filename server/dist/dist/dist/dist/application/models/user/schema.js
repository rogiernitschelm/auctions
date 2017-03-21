'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schematic = undefined;

var _mongoose = require('mongoose');

var schematic = exports.schematic = {
  email: {
    type: String,
    match: /\S+@\S+\.\S+/,
    lowercase: true,
    required: true,
    unique: true,
    index: true
  },
  //
  // firstName: {
  //   type: String,
  //   required: true,
  //   min: 2,
  //   max: 25,
  // },
  //
  // lastName: {
  //   type: String,
  //   required: true,
  //   min: 2,
  //   max: 25,
  // },
  //
  password: {
    type: String,
    required: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  },

  usertype: {
    type: String,
    enum: ['seller', 'buyer'],
    required: true
  }
};

exports.default = new _mongoose.Schema(schematic);