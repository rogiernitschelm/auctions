import {
  GraphQLString,
} from 'graphql';
import mongoose from 'mongoose';
import UserType from '../../types/user_type';

const User = mongoose.model('user');

export default {
  updateAccount: {
    type: UserType,
    args: {
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

    resolve(parentValue, attributes, { user }) {
      return User.update({ _id: user._id }, attributes)
        .catch(error => error)
        .then(() => user);
    }
  },
};
