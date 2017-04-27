import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'AuctionType',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: GraphQLID },
    startingPrice: { type: GraphQLInt },
    duration: { type: GraphQLInt }
  })
});
