import { GraphQLID } from 'graphql';
import AuctionType from '../../types/auction_type';
import { updateAuction } from '../../../models';

export default {
  updateAuction: {
    type: AuctionType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parentValue, args, req) {
      if (req.user && req.user.usertype === 'seller') {
        return updateAuction({ args, req });
      }

      throw Error('You have to be logged in as the owner of this auction.');
    }
  }
};
