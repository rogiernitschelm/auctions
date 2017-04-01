import { GraphQLList } from 'graphql';
import UserType from '../usertype';
import { queryBuyers } from '../user_methods';

export default {
  type: new GraphQLList(UserType),
  resolve(parentValue, args, req) {
    return queryBuyers({ req, args });
  }
};
