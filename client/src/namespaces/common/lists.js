import React from 'react';

export const UnorderedList = ({ children, className = '' }) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, className = '' }) => {
  return (
    <li className={className}>
      {children}
    </li>
  );
};
