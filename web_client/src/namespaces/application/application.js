import React from 'react';
import { ContainerFluid } from 'common';
import { Footer, Navigation } from './';

export default ({ children }) => (
  <ContainerFluid>
    <Navigation />
      {children}
    <Footer />
  </ContainerFluid>
);
