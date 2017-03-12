import React from 'react';
import { Navigation, Row, NavLink, NavList, Column } from '../common';

export default () => {
  return (
    <Navigation>
      <Row>
        <Column columns={{ xs: 2 }}>
          <NavLink type="logo">LOGO</NavLink>
        </Column>

        <Column columns={{ xs: 5, sm: 4}}>
          <NavList>
            <NavLink type="button">Veilingen</NavLink>
            <NavLink type="button">Biedingen</NavLink>
          </NavList>
        </Column>

        <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
          <NavList>
            <NavLink type="link">Account</NavLink>
            <NavLink type="link">Uitloggen</NavLink>
          </NavList>
        </Column>
      </Row>
    </Navigation>
  );
};
