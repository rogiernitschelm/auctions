import { GraphQLObjectType } from 'graphql';
import {
  adminUsers,
  currentUser,
  buyers,
  sellers,
} from './models/user/user_queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    adminUsers,
    currentUser,
    buyers,
    sellers,
  })
});
