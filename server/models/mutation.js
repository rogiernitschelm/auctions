import {
  GraphQLObjectType,
} from 'graphql';
import userMutations from './user';
import auctionMutations from './auction/mutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations,
    ...auctionMutations
  })
});
