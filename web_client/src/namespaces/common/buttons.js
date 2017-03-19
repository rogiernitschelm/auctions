import React from 'react';

export const Button = ({
  color = 'primary',
  type = 'submit',
  children,
  size = 'md',
  onClick = null
}) => {
  const buttonClassName = `btn btn-${color} ${size ? `btn-${size}` : ''}`;

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
