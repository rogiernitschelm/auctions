import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'AuctionType',
  fields: () => ({
    title: { type: GraphQLString },
    id: { type: GraphQLID },
    startingPrice: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    endDateTime: { type: GraphQLString }
  })
});
