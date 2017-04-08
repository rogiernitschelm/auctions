import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import UserType from '../../usertype';
import { queryUsers } from '../../user_methods';

export default {
  type: new GraphQLList(UserType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: GraphQLString }
  },
  resolve(parentValue, args, req) {
    return queryUsers({ req, args });
  }
};
