import {
  GraphQLString,
} from 'graphql';
import UserType from '../../types/user_type';
import { login } from '../../../authentication';

export default {
  login: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, { email, password }, req) {
      return login({ email, password, req });
    }
  },
};
