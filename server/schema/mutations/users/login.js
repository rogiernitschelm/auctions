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
      return router({ args, req, requestType: 'loginMutation' });
    }
  },
};
