import React from 'react';
import { Column, NavList, NavLink } from 'common';

export default ({ onLogoutClick }) => {
  return (
    <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
      <NavList>
        <NavLink type="link">Account</NavLink>
        <NavLink type="link" onClick={onLogoutClick}>Uitloggen</NavLink>
      </NavList>
    </Column>
  );
};
