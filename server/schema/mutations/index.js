import {
  GraphQLObjectType,
} from 'graphql';
import auctionMutations from './auctions';
import userMutations from './users';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...auctionMutations,
    ...userMutations
  })
});
