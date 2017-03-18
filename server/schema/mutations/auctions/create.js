import { GraphQLString, GraphQLInt } from 'graphql';
import AuctionType from '../../types/auction_type';
import { createAuction } from '../../../models';

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
      if (req.user.userType === 'seller') {
        return createAuction({ args, req });
      }

      throw Error('Only sellers can create auctions.');
    }
  }
};
