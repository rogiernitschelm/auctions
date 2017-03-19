import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Navigation = ({ children }) => (
  <div className="navigation-bar">
    <nav className="navbar">
      {children}
    </nav>
  </div>
);

export const NavList = ({ children }) => (
  <ul className="nav">
    {children}
  </ul>
);

export const NavButton = ({ children, onClick }) => (
  <button className='btn btn-primary' onClick={onClick}>
    {children}
  </button>
);

export const NavLink = ({ to = '/', children, onClick, type = 'link' }) => {
  const linkType = type === 'button' ? 'btn btn-primary' : '';

  if (type === 'logo') {
    return (
      <RouterLink to={to} className={`${linkType} nav-link`} onClick={onClick}>
        {children}
      </RouterLink>
    );
  }

  return (
    <li className="nav-item">
      <RouterLink to={to} className={`${linkType} nav-link`} onClick={onClick}>
        {children}
      </RouterLink>
    </li>
  );
};
