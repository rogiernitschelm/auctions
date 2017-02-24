import mongoose, { Schema } from 'mongoose';

const BidSchema = new Schema({
  bidder: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  auctionId: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    defaultValue: new Date()
  }
});

export default mongoose.model('bid', BidSchema);
