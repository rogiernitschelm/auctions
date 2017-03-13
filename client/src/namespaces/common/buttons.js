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
