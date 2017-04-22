import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { updateUser } from '../user_methods';
import UserType from '../usertype';

export default {
  updateUser: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      firstname: { type: new GraphQLNonNull(GraphQLString) },
      lastname: { type: new GraphQLNonNull(GraphQLString) }

    },
    resolve(parentValue, args, req) {
      return updateUser({ args, req });
    }
  }
};
