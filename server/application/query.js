import { GraphQLObjectType } from 'graphql';
import { currentUser, adminRequestsUsers } from './models/user/user_queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    currentUser,
    adminRequestsUsers
  })
});
