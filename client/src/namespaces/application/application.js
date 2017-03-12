import React from 'react';
import { Footer, Navigation } from './';
import { ContainerFluid, Container } from '../common';

export default props => (
  <ContainerFluid>
    <div className="nav-and-content">
      <Navigation />
      <Container>
        {props.children}
      </Container>
    </div>
    <Footer />
  </ContainerFluid>
);
