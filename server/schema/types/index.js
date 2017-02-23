import { GraphQLObjectType, GraphQLList } from 'graphql';
import mongoose from 'mongoose';
import UserType from './user_type';
import AuctionType from './auction_type';

const User = mongoose.model('user');
const Auction = mongoose.model('auction');

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
  })
});
