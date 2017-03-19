import React from 'react';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';
import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import Router from './router';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'include'
  }
});

const store = createStore(combineReducers({ form }));
const client = new ApolloClient({
  dataIdFromObject: object => object.id,
  networkInterface
});

export default () => (
  <ApolloProvider store={store} client={client}>
    <Router />
  </ApolloProvider>
);
