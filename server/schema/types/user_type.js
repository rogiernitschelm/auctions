import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: GraphQLID }
  })
});
