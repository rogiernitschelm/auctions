import { GraphQLString, GraphQLID } from 'graphql';

import UserType from '../../types/user_type';
import { updateAccount } from '../../../models';

export default {
  updateAccount: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      chamberOfCommerce: { type: GraphQLString },
      companyName: { type: GraphQLString },
      infix: { type: GraphQLString },
      gender: { type: GraphQLString },
      birthDate: { type: GraphQLString }
    },

    resolve(parentValue, args, req) {
      if (!req.user) {
        return updateAccount({ req, args });
      }

      throw Error('You are not logged in.');
    }
  },
};
