import { GraphQLList } from 'graphql';
import UserType from '../../usertype';
import { queryUsers } from '../../user_methods';

export default {
  type: new GraphQLList(UserType),
  resolve(parentValue, args, req) {
    return queryUsers({ req });
  }
};
