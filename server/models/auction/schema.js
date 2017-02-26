import { Schema } from 'mongoose';

export const schematic = {
  title: {
    type: String,
    minlength: 10,
    maxlength: 30,
    required: true,
  },
  //
  // createdAt: {
  //   type: Date,
  //   required: true,
  //   default: new Date()
  // },
  //
  // updatedAt: {
  //   type: Date,
  //   required: false
  // },
  //
  // description: {
  //   type: String,
  //   minLength: 10,
  //   maxLength: 1000,
  //   required: true
  // },
  //
  // type: {
  //   type: String,
  //   enum: ['a', 'b'],
  //   required: true
  // },
  //
  // startingPrice: {
  //   type: Number,
  //   required: true,
  //   min: 0.01,
  //   max: 999999
  // },
  //
  // highestBid: {
  //   type: Number,
  //   required: false,
  //   max: 999999
  // },
  //
  // buyoutPrice: {
  //   type: Number,
  //   required: false,
  //   max: 999999
  // },
  //
  endDateTime: {
    type: Date,
    required: true
  },
  //
  // startDateTime: {
  //   type: Date,
  //   required: true,
  //   default: new Date()
  // },

  _owner: { type: Schema.ObjectId, ref: 'user', required: true },
  _bids: [{ type: Schema.ObjectId, ref: 'bid', required: true }]

};

export default new Schema(schematic);
