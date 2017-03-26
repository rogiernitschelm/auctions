import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Navigation = ({ children }) => (
  <div className="container-fluid navigation-bar">
    <nav className="container">
      <div className="row">
        <div className="col-6">
          <ul className="nav justify-content">
            <li className="nav-item">
              <RouterLink className="nav-link" to="/">LOGO</RouterLink>
            </li>
          </ul>

          </div>
          <div className="col-6">
          <ul className="nav justify-content-end">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  </div>
);


export const NavLink = ({ to = '/', children, onClick, type = 'link' }) => {
  const linkType = type === 'button' ? 'btn btn-outline-primary' : '';

  if (type === 'logo') {
    return (
      <li className="nav-item">
        <RouterLink to={to} className={`${linkType} nav-link`} onClick={onClick}>
          {children}
        </RouterLink>
      </li>
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
