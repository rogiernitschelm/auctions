import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { logoutMutation } from './graphql';
import { Navigation, Row, NavLink, Column } from '../common';
import SessionLinks from './children/session_links';
import NoSessionLinks from './children/no_session_links';
import BuyerLinks from './children/buyer_links';

class NavigationBar extends Component {
  renderUserSpecificLinks() {
    switch (this.props.usertype) {
      case 'buyer':
        return <BuyerLinks />;

      default:
        return (
          <Column columns={{ xs: 5, sm: 4 }} />
        );
    }
  }

  renderSessionSpecificLinks() {
    if (['seller', 'buyer', 'admin'].includes(this.props.usertype)) {
      return <SessionLinks onLogoutClick={() => console.log("click")} />;
    }

    return <NoSessionLinks />;
  }

  logout() {
    this.props.mutate().then(data => console.log(data))
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <Navigation>
        <Row>
          <Column columns={{ xs: 2 }}>
            <NavLink type="logo">LOGO</NavLink>
          </Column>

          <a onClick={::this.logout}>Logout</a>

          {this.renderUserSpecificLinks()}
          {this.renderSessionSpecificLinks()}

        </Row>
      </Navigation>
    );
  }
}

export default graphql(logoutMutation)(NavigationBar);
