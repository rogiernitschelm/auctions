import React from 'react';
import { Footer, Navigation } from './';
import { Container } from '../common';

export default props => {
  return (
    <Container>
      <Navigation />
      {props.children}
      <Footer />
    </Container>
  );
};
