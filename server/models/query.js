import { GraphQLObjectType } from 'graphql';
import {
  adminUsers,
  buyers,
  currentUser,
  sellers,
} from './user/user_queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    adminUsers,
    buyers,
    currentUser,
    sellers,
  })
});
