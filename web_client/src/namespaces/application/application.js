import React from 'react';
import { Footer, Navigation } from './';
import { ContainerFluid } from '../common';

export default ({ children }) => (
  <ContainerFluid>
    <Navigation />
      {children}
    <Footer />
  </ContainerFluid>
);
