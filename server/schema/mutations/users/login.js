import {
  GraphQLString,
} from 'graphql';
import UserType from '../../types/user_type';
import funnel from '../../funnel';

export default {
  login: {
    type: UserType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, args, req) {
      if (req.user) throw new Error('You are already logged in.');

      return funnel({ args, req, requestType: 'loginMutation' });
    }
  },
};
