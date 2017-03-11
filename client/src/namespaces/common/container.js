import React from 'react';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
}

export const ContainerFluid = ({ children }) => {
  return <div className="container-fluid">{children}</div>;
}
