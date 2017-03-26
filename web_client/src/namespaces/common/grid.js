import React from 'react';

export const Container = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

export const ContainerFluid = ({ children }) => (
  <div className="container-fluid">{children}</div>
);

export const Row = ({ children }) => <div className="row">{children}</div>;

export const Column = ({ columns = {}, offsets = {}, children }) => {
  let className = '';

  if (offsets !== {}) {
    for (const offset of Object.keys(offsets)) {
      className = className.concat(`offset-${offset}-${offsets[offset]} `);
    }
  }

  if (columns !== {}) {
    for (const column of Object.keys(columns)) {
      className = className.concat(
        `col${column === 'xs' ? `-${columns[column]}` : `-${column}-${columns[column]}`} `
      );
    }
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};
