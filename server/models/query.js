import { GraphQLObjectType } from 'graphql';
import {
  users,
  buyers,
  currentUser,
  sellers,
} from './user/user_queries';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users,
    buyers,
    currentUser,
    sellers,
  })
});
