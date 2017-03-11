import { GraphQLString, GraphQLInt } from 'graphql';
import AuctionType from '../../types/auction_type';
import router from '../../../router';

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
      return router({ args, req, requestType: 'createAuctionMutation' });
    }
  }
};
