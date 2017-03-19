import React from 'react';
import { Column, NavList, NavLink } from '../../common';

export default ({ onLogoutClick }) => (
  <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
    <NavList>
      <NavLink type="link">Account</NavLink>
      <NavLink type="link">Uitloggen</NavLink>
      <NavLink type="link">About us</NavLink>
    </NavList>
  </Column>
);
