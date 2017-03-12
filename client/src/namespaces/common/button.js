import React from 'react';

export const Button = ({
  type = 'primary',
  children,
  size = 'md',
  onClick = null
}) => {
  const buttonClassName = `btn btn-${type} ${size ? `btn-${size}` : ''}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export const ButtonGroup = ({ children, size = null }) => {
  const buttonGroupClassName =
  `btn-group ${size ? `btn-group-${size}` : null} pull-right btn-group-right`;

  return (
    <div className={buttonGroupClassName}>
      {children}
    </div>
  );
};
