import React from 'react';
import { Navigation, Row, NavLink, NavList, Column } from '../common';

export default props => {
  const renderUserSpecificLinks = () => {
    switch (props.usertype) {
      case 'buyer':
        return (
          <Column columns={{ xs: 5, sm: 4 }}>
            <NavList>
              <NavLink type="button">Mijn biedingen</NavLink>
            </NavList>
          </Column>
        );
      case 'seller':
        return (
          <Column columns={{ xs: 5, sm: 4 }}>
            <NavList>
              <NavLink type="button">Mijn biedingen</NavLink>
            </NavList>
          </Column>
        );
      case 'admin':
        return (
          <Column columns={{ xs: 5, sm: 4 }}>
            <NavList>
              <NavLink type="button">Mijn biedingen</NavLink>
            </NavList>
          </Column>
        );
      default:
        return (
          <Column columns={{ xs: 5, sm: 4 }} />
        );
    }
  };

  const renderSessionSpecificLinks = () => {
    if (['seller', 'buyer', 'admin'].includes(props.usertype)) {
      return (
        <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
          <NavList>
            <NavLink type="link">Account</NavLink>
            <NavLink type="link">Uitloggen</NavLink>
            <NavLink type="link">About us</NavLink>
          </NavList>
        </Column>
      );
    }

    return (
      <Column columns={{ xs: 5, sm: 4 }} offsets={{ sm: 2 }}>
        <NavList>
          <NavLink type="link">Create account</NavLink>
          <NavLink type="link">About us</NavLink>
        </NavList>
      </Column>
    );
  };

  return (
    <Navigation>
      <Row>
        <Column columns={{ xs: 2 }}>
          <NavLink type="logo">LOGO</NavLink>
        </Column>

        {renderUserSpecificLinks()}
        {renderSessionSpecificLinks()}

      </Row>
    </Navigation>
  );
};
