import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import create from './method';
import AuctionType from '../auctiontype';

export default {
  createAuction: {
    type: AuctionType,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      startingPrice: { type: new GraphQLNonNull(GraphQLInt) },
      duration: { type: new GraphQLNonNull(GraphQLInt) }
    },

    resolve(parentValue, args, req) {
      return create({ args, req });
    }
  }
};
