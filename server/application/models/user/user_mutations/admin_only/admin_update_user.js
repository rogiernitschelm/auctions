import { GraphQLID, GraphQLString } from 'graphql';
import UserType from '../../usertype';
import { adminUpdateUser } from '../../user_methods';

export default {
  adminUpdateUser: {
    type: UserType,
    args: {
      userId: { type: GraphQLID },
      email: { type: GraphQLString },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      location: { type: GraphQLString },
    },
    resolve(parentValue, args, req) {
      return adminUpdateUser({ req, args });
    }
  },
};
