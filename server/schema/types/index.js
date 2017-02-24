import { GraphQLObjectType, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import UserType from './user_type';
import AuctionType from './auction_type';
import BidType from './bid_type';

const User = mongoose.model('user');
const Auction = mongoose.model('auction');
const Bid = mongoose.model('bid');

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },

    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },

    auctions: {
      type: new GraphQLList(AuctionType),
      resolve() {
        return Auction.find({});
      }
    },

    bids: {
      type: new GraphQLList(BidType),
      resolve() {
        return Bid.find({});
      }
    }
  })
});
