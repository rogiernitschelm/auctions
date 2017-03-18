import {
  GraphQLString,
} from 'graphql';
import UserType from '../../types/user_type';
import { login } from '../../../models';

export default {
  login: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, args, req) {
      if (!req.user) {
        return login({ args, req });
      }

      throw Error('You are already logged in.');
    }
  },
};
