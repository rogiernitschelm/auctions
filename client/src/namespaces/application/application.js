import React from 'react';
import { Footer, Navigation } from './';
import { ContainerFluid } from '../common';

export default props => {
  return (
    <ContainerFluid>
      <Navigation />
      {props.children}
      <Footer />
    </ContainerFluid>
  );
};
