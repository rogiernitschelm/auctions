import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'BidType',
  fields: () => ({
    bidder: { type: new GraphQLNonNull(GraphQLID) },
    amount: { type: new GraphQLNonNull(GraphQLInt) },
    auctionId: { type: new GraphQLNonNull(GraphQLID) },
  })
});
