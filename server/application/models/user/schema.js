import { Schema } from 'mongoose';

export const schematic = {
  email: {
    type: String,
    match: /^[a-z0-9]+(\\\\.[_a-z0-9]+)*@[a-z0-9-]+(\\\\.[a-z0-9-]+)*(\\\\.[a-z]{2,15})$/,
    lowercase: true,
    required: true,
    unique: true,
    index: true
  },

  firstname: {
    type: String,
    required: true,
    min: 2,
    max: 25,
  },

  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 25,
  },

  password: {
    type: String,
    required: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  },

  usertype: {
    type: String,
    enum: ['seller', 'buyer'],
    required: true
  },

  coc: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },
  //
  // infix: {
  //   type: String,
  //   required: false,
  //   min: 2,
  //   max: 10
  // },
  //
  // gender: {
  //   type: String,
  //   required: false
  // },
  //
  // birthDate: {
  //   type: Date,
  //   required: false
  // },
  //
  // createdAt: {
  //   type: Date,
  //   required: true,
  //   default: new Date()
  // },
  //
  // updatedAt: {
  //   type: Date,
  //   required: false,
  // },
  //
  // _bids: [{ type: Schema.ObjectId, ref: 'bid', required: true }],
  // auctions: [{ type: Schema.ObjectId, ref: 'auction', required: true }]

};

export default new Schema(schematic);
