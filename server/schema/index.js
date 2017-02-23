import { GraphQLSchema } from 'graphql';
import mutation from './mutations';
import query from './types';

export default new GraphQLSchema({
  query,
  mutation
});
