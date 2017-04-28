import {
  GraphQLString,
} from 'graphql';
import UserType from '../usertype';
import login from './method';

export default {
  login: {
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      usertype: { type: GraphQLString }
    },
    type: UserType,
    resolve(parentValue, user, req) {
      return login(req, user);
    }
  },
};
