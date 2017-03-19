import React from 'react';
import { Column, NavList, NavLink } from '../../common';

export default () => (
  <Column columns={{ xs: 5, sm: 4 }}>
    <NavList>
      <NavLink type="button">Mijn biedingen</NavLink>
    </NavList>
  </Column>
);
