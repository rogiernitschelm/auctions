import React from 'react';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducer';
import Router, { middleware } from './router';

const combinedMiddlewares = [middleware, ReduxThunk];

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const store = createStore(
  reducer,
  applyMiddleware(...combinedMiddlewares)
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
