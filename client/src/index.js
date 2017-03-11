import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Router from './router';
import reducer from './reducer';

import './style/index.scss';

const client = new ApolloClient({
  dataIdFromObject: object => object.id
});

const root = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <div />,
  document.querySelector('#root')
);
