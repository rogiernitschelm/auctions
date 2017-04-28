import { GraphQLID, GraphQLString } from 'graphql';
import UserType from '../usertype';
import adminUpdateUser from './method';

export default {
  adminUpdateUser: {
    type: UserType,
    args: {
      userId: { type: GraphQLID },
      email: { type: GraphQLString },
      firstname: { type: GraphQLString },
      lastname: { type: GraphQLString },
      location: { type: GraphQLString },
    },
    resolve(parentValue, args, req) {
      return adminUpdateUser({ req, args });
    }
  },
};
