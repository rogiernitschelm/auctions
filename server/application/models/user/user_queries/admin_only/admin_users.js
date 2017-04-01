import { GraphQLList } from 'graphql';
import UserType from '../../usertype';
import { adminQueryUsers } from '../../user_methods';

export default {
  type: new GraphQLList(UserType),
  resolve(parentValue, args, req) {
    return adminQueryUsers({ req });
  }
};
