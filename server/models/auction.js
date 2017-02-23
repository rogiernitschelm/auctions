import mongoose, { Schema } from 'mongoose';

const AuctionSchema = new Schema({
  title: {
    type: String,
    minlength: 10,
    maxlength: 30,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },

  updatedAt: {
    type: Date,
    required: false
  },

  owner: {
    type: String,
    required: true
  },

  description: {
    type: String,
    minLength: 10,
    maxLength: 1000,
    required: true
  },

  type: {
    type: String,
    enum: ['a', 'b'],
    required: true
  },

  startingPrice: {
    type: Number,
    required: true,
    min: 0.01,
    max: 999999
  },

  highestBid: {
    type: Number,
    required: false,
    max: 999999
  },

  buyoutPrice: {
    type: Number,
    required: false,
    max: 999999
  },

  endDateTime: {
    type: Date,
    required: true
  },

  startDateTime: {
    type: Date,
    required: true,
    default: new Date()
  },

  bids: {
    type: [Object],
    default: [],
  }
});

AuctionSchema.pre('save', function save(next) {
  const auction = this;

  // if validation(auction) returns XYZ then next('Error')

  if (auction.buyoutPrice <= auction.startingPrice) {
    next(Error('The buyout-price must be higher than the starting price.'));
  }

  if (auction.buyoutPrice < auction.highestBid) {
    next(Error('The bid is higher than the buyout price. Please use the buy-out function.'));
  }

  if (auction.endDateTime < new Date()) {
    next(Error('The end of the auction cannot be before today.'));
  }

  if (auction.startDateTime > auction.endDateTime) {
    next(Error('The end date must be after the begin date.'));
  }

  next();
});
//
// AuctionSchema.pre('remove', function remove(next) {
//   const auction = this;
//
//
// })

AuctionSchema.methods = {

};

mongoose.model('auction', AuctionSchema);
