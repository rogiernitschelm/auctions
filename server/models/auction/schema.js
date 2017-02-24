import mongoose, { Schema } from 'mongoose';
import auctionSchematic from './schematic';
import User from '../user';

const AuctionSchema = new Schema(auctionSchematic);

AuctionSchema.pre('save', function save(next) {
  const auction = this;

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

AuctionSchema.post('save', function () {
  User.findOneAndUpdate({ _id: this._owner }, { $push: { auctions: this } })
    .then(result => result)
    .catch(error => error);
});

AuctionSchema.pre('remove', function (next) {
  if (this._bids.length > 0) {
    throw new Error('There is a bid present. It is no longer possible to withdraw.');
  }

  next();
});

AuctionSchema.pre('update', function (next) {
  if (this._bids.length > 0) {
    throw new Error('There is a bid present. It is no longer possible to update.');
  }

  next();
});

export default mongoose.model('auction', AuctionSchema);
