import { GraphQLID } from 'graphql';
import AuctionType from '../../types/auction_type';
import { removeAuction } from '../../../models';

export default {
  removeAuction: {
    type: AuctionType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parentValue, { id }, req) {
      return removeAuction({ id, req });
    }
  }
};
