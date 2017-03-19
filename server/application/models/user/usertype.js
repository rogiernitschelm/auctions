import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: GraphQLID },
    usertype: { type: GraphQLString },
    firstName: { type: GraphQLString },
    // infix: { type: GraphQLString },
    // lastName: { type: GraphQLString },
    // chamberOfCommerce: { type: GraphQLString },
    // companyName: { type: new GraphQLNonNull(GraphQLString) },
    // birthDate: { type: GraphQLString },
    // createdAt: { type: new GraphQLNonNull(GraphQLString) },
    // updatedAt: { type: new GraphQLNonNull(GraphQLString) },
    // bids: { type: new GraphQLList(BidType) },
    // auctions: { type: new GraphQLList(AuctionType) },
    // activeAuctions: { type: new GraphQLList(AuctionType) }
  })
});
