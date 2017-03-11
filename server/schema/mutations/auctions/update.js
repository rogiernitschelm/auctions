import { GraphQLID } from 'graphql';
import AuctionType from '../../types/auction_type';
import router from '../../../router';

export default {
  updateAuction: {
    type: AuctionType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parentValue, args, req) {
      return router({ args, req, requestType: 'updateAuctionMutation' });
    }
  }
};
