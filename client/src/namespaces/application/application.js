import React from 'react';
import { Footer, Navigation } from './';
import { ContainerFluid, Container } from '../common';

export default ({ children }) => (
  <ContainerFluid>
    <Navigation />
      <Container>
        {children}
      </Container>
    <Footer />
  </ContainerFluid>
);
