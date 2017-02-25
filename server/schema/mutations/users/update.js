import { GraphQLString, GraphQLID } from 'graphql';
import UserType from '../../types/user_type';
import funnel from '../funnel';

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
      return funnel({ req, args, mutationType: 'updateAccount' });
      // return User.update({ _id: user._id }, attributes)
      //   .catch(error => error)
      //   .then(() => user);
    }
  },
};
