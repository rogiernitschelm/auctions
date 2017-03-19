import {
  GraphQLString,
} from 'graphql';
import { signup } from '../methods';
import UserType from '../usertype';

export default {
  signup: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      usertype: { type: GraphQLString }
    },

    resolve(parentValue, args, req) {
      return signup({ args, req });
    }
  }
};
