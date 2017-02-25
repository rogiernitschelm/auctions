import {
  GraphQLString,
} from 'graphql';
import funnel from '../funnel';
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
      if (req.user) throw new Error('You already have an account.');      

      return funnel({ args, req, requestType: 'signup' });
    }
  },
};
