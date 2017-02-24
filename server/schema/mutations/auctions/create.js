import {
  GraphQLString,
  GraphQLInt
} from 'graphql';
import mongoose from 'mongoose';
import AuctionType from '../../types/auction_type';

import { createAuction } from '../../../models/auction';

const Auction = mongoose.model('auction');

export default {
  createAuction: {
    type: AuctionType,
    args: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      type: { type: GraphQLString },
      endDateTime: { type: GraphQLString },
      startingPrice: { type: GraphQLInt }
    },
    resolve(parentValue, args, req) {
      return createAuction({ ...args, req });
    }
  }
};
