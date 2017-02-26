import { GraphQLID } from 'graphql';
import AuctionType from '../../types/auction_type';
import funnel from '../../funnel';

export default {
  removeAuction: {
    type: AuctionType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parentValue, args, req) {
      if (!req.user) throw new Error('You must be logged in as the owner.');

      return funnel({ args, req, requestType: 'removeAuctionMutation' });
    }
  }
};
