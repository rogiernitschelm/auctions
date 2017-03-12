import React from 'react';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';

import Router from './router';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  dataIdFromObject: object => object.id,
  networkInterface
});

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
