import { Schema } from 'mongoose';

export const schematic = {
  title: {
    type: String,
    minlength: 10,
  },

  startingPrice: {
    type: Number,
    min: 0.00,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },

  duration: {
    type: Number,
    required: true
  }
  //
  // updatedAt: {
  //   type: Date,
  //   required: false,
  // },
};

export default new Schema(schematic);
