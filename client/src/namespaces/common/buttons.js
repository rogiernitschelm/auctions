import React from 'react';

export const Button = ({
  color = 'primary',
  type = 'submit',
  children,
  size = 'md',
  onClick = null,
  className
}) => {
  const buttonClassName = `btn btn-${color} ${size ? `btn-${size}` : ''}`;

  return (
    <button className={`${buttonClassName} ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export const ButtonGroup = ({ children }) => <div className="btn-group">{children}</div>;
