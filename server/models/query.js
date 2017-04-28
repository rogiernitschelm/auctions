import { GraphQLObjectType } from 'graphql';
import { queryAuctions as auctions } from './auction';
import {
  queryUsers as users,
  queryCurrentUser as currentUser
} from './user/';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    auctions,
    currentUser,
    users,
  })
});
