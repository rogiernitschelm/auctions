import React from 'react';
import { Column, NavList, NavLink } from 'common';

export default () => (
  <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
    <NavList>
      <NavLink to="/guest/create_account" type="button">Maak account</NavLink>
    </NavList>
  </Column>
);
