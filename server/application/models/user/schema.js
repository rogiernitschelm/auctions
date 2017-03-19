import { Schema } from 'mongoose';

export const schematic = {
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
  },
  //
  // chamberOfCommerce: {
  //   type: String,
  //   required: true
  // },
  //
  // companyName: {
  //   type: String,
  //   required: true
  // },
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
