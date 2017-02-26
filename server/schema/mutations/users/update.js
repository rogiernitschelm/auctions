import { GraphQLString, GraphQLID } from 'graphql';
import UserType from '../../types/user_type';
import funnel from '../../funnel';

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
      if (!req.user) throw new Error('You need to be logged in.');

      return funnel({ req, args, requestType: 'updateAccountMutation' });
    }
  },
};
