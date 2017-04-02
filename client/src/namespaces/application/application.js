import React from 'react';
import { ContainerFluid } from 'common';
import { Navigation } from './';

export default ({ children }) => (
  <main className="application">
    <Navigation />
    <ContainerFluid className="application-container">
      {children}
    </ContainerFluid>
    {/* <Footer /> */}
  </main>
);
