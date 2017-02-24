import mongoose, { Schema } from 'mongoose';

const BidSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    defaultValue: new Date()
  },

  _auction: { type: Schema.ObjectId, ref: 'auction', required: true },
  _bidder: { type: Schema.ObjectId, ref: 'user', required: true }
});

export default mongoose.model('bid', BidSchema);
