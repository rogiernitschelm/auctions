import { GraphQLList, GraphQLString, GraphQLInt } from 'graphql';
import UserType from '../usertype';
import { queryBuyers } from '../user_methods';

export default {
  type: new GraphQLList(UserType),
  args: {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    sort: { type: GraphQLString }
  },
  resolve(parentValue, args, req) {
    return queryBuyers({ req, args });
  }
};
