import React from 'react';
import { ContainerFluid } from 'common';

export default ({ children }) => (
  <ContainerFluid className="application-container application">
    {children}
  </ContainerFluid>
);
