import { GraphQLID } from 'graphql';
import UserType from '../../usertype';
import { adminDeleteUser } from '../../user_methods';

export default {
  adminDeleteUser: {
    type: UserType,
    args: {
      userId: { type: GraphQLID }
    },
    resolve(parentValue, args, req) {
      return adminDeleteUser({ req, args });
    }
  },
};
