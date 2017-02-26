import { GraphQLString, GraphQLInt } from 'graphql';
import AuctionType from '../../types/auction_type';
import funnel from '../../funnel';

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
      if (!req.user) throw new Error('You must be logged in as a seller.');

      return funnel({ args, req, requestType: 'createAuctionMutation' });
    }
  }
};
