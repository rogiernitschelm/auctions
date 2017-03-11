import React from 'react';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom'

import Router from './router';
import { Application } from './namespaces/application';

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

export default () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}
