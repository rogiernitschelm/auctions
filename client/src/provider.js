import React from 'react';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import Router, { middleware } from './router';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const store = createStore(
  reducer,
  applyMiddleware(middleware)
);

const client = new ApolloClient({
  dataIdFromObject: object => object.id,
  networkInterface
});

export default () => (
  <ApolloProvider store={store} client={client}>
    <Router />
  </ApolloProvider>
);
