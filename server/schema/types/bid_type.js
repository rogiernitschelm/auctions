import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'BidType',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    bidder: { type: new GraphQLNonNull(GraphQLID) },
    amount: { type: new GraphQLNonNull(GraphQLInt) },
    auction: { type: new GraphQLNonNull(GraphQLID) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) }
  })
});
