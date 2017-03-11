import React from 'react';
import ReactDOM from 'react-dom';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';

import Router from './router';
import './style/index.scss';


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

ReactDOM.render(
  <div>
    testaaaaaabasdadssaddasdas
  </div>,

  document.querySelector('#root')
);


/* <ApolloProvider client={client}>
  <Router />
</ApolloProvider>, */
