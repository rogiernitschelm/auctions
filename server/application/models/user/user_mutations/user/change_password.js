import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { changePassword } from '../../user_methods';
import UserType from '../../usertype';

export default {
  changePassword: {
    type: UserType,
    args: {
      password: { type: new GraphQLNonNull(GraphQLString) },
      newPassword: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args, req) {
      return changePassword({ args, req });
    }
  }
};
