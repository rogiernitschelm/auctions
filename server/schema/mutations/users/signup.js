import {
  GraphQLString,
} from 'graphql';

import UserType from '../../types/user_type';
import { signup } from '../../../models';

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

    resolve(parentValue, attributes, req) {
      return signup({ ...attributes, req })
        .catch(error => error)
        .then(() => req.user);
    }
  },
};
