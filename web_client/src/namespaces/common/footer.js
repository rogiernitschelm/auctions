import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ children }) => (
  <footer className="footer">
    {children}
  </footer>
);

export const FooterLinks = ({ title, links }) => {
  const renderLinks = () =>
    links.map(link => <li key={link.text}>{<Link to={link.path}>{link.text}</Link>}</li>);

  return (
    <div className="col-4">
      <h5 className="footer-links-title">{title}</h5>
      {renderLinks()}
    </div>
  );
};
