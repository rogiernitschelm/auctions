import { GraphQLObjectType, GraphQLList } from 'graphql';
import UserType from './models/user/usertype';
import User from './models/user/model';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },

    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    }
  })
});
