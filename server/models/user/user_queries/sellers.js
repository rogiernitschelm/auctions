import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import UserType from '../usertype';
import { querySellers } from '../user_methods';

export default {
  type: new GraphQLList(UserType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: GraphQLString }
  },
  resolve(parentValue, args, req) {
    return querySellers({ req, args });
  }
};
