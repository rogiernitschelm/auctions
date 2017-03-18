import {
  GraphQLString,
} from 'graphql';
import { signup } from '../../../models';
import UserType from '../../types/user_type';

export default {
  signup: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      usertype: { type: GraphQLString },
      chamberOfCommerce: { type: GraphQLString },
      companyName: { type: GraphQLString },
      infix: { type: GraphQLString },
      gender: { type: GraphQLString },
      birthDate: { type: GraphQLString }
    },

    resolve(parentValue, args, req) {
      console.log(args, "ARGS")
      console.log(req, "REQ")
      if (!req.user) {
        return signup({ args, req });
      }

      throw Error('You already have an account.');
    }
  },
};
