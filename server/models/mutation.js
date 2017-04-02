import {
  GraphQLObjectType,
} from 'graphql';
import userMutations from './user/mutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations
  })
});
