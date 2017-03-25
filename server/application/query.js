import { GraphQLObjectType } from 'graphql';
import { currentUser, adminQueryUsers } from './models/user/user_queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    currentUser,
    adminQueryUsers
  })
});
