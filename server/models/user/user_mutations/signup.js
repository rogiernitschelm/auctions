import {
  GraphQLString,
} from 'graphql';
import { signup } from '../user_methods';
import UserType from '../usertype';

export default {
  signup: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      firstname: { type: GraphQLString },
      lastname: { type: GraphQLString },
      company: { type: GraphQLString },
      coc: { type: GraphQLString },
      usertype: { type: GraphQLString }
    },

    resolve(parentValue, args, req) {
      console.log(args)
      return signup({ args, req });
    }
  }
};
