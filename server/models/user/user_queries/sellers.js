import { GraphQLList } from 'graphql';
import UserType from '../usertype';
import { querySellers } from '../user_methods';

export default {
  type: new GraphQLList(UserType),
  resolve(parentValue, args, req) {
    return querySellers({ req, args });
  }
};
