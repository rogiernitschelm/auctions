import {
  GraphQLObjectType,
} from 'graphql';
import userMutations from './models/user/mutations';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations
  })
});
