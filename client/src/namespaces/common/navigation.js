import React from 'react';

export default ({ children }) => {
  return (
    <nav className="navbar container">
      <div className="row">
        {children}
      </div>
    </nav>
  );
};
