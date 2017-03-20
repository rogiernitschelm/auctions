import { GraphQLList } from 'graphql';
import User from '../model';
import UserType from '../usertype';

export default {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find({});
  }
};
