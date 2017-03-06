import {
  GraphQLString,
} from 'graphql';
import UserType from '../../types/user_type';
import router from '../../../router';

export default {
  login: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, args, req) {
      if (req.user) throw new Error('You are already logged in.');

      return router({ args, req, requestType: 'loginMutation' });
    }
  },
};
