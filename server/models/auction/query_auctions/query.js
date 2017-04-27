import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import AuctionType from '../auctiontype';
import queryAuctions from './method';

export default {
  type: new GraphQLList(AuctionType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: GraphQLString }
  },
  resolve(parentValue, args, req) {
    return queryAuctions({ req, args });
  }
};
