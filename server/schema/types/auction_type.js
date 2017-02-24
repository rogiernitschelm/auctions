import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'AuctionType',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: GraphQLID },
    startingPrice: { type: new GraphQLNonNull(GraphQLInt) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    description: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    endDateTime: { type: GraphQLString }
  })
});
