import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    email: { type: GraphQLString },
    id: { type: GraphQLID }
  })
});
