import {
  GraphQLString,
} from 'graphql';
import { updateUser } from '../../user_methods';
import UserType from '../../usertype';

export default {
  updateUser: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, args, req) {
      return updateUser({ args, req });
    }
  }
};
