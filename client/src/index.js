import React from 'react';
import ReactDOM from 'react-dom';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';

// import Router from './router';
// import reducer from './reducer';
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

const Root = () => {
  return (
    <ApolloProvider client={client} />
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
