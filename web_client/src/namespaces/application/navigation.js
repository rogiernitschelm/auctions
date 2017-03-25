import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { logoutMutation } from 'gql';
import { Navigation, Row, NavLink, Column } from 'common';

import { currentUser } from 'gql';
import SessionLinks from './children/session_links';
import NoSessionLinks from './children/no_session_links';
import BuyerLinks from './children/buyer_links';

class NavigationBar extends Component {
  logout() {
    this.props.mutate({
      refetchQueries: [{ query: currentUser }]
    }).then(data => console.log(data))
    .catch(error => console.log(error.message));
  }

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
    if (this.props.data.currentUser) {
      if (['seller', 'buyer', 'admin'].includes(this.props.data.currentUser.usertype)) {
        return <SessionLinks onLogoutClick={::this.logout} />;
      }
    }

    return <NoSessionLinks />;
  }

  render() {
    return (
      <Navigation>
        <Row>
          <Column columns={{ xs: 2 }}>
            <NavLink type="logo">LOGO</NavLink>
          </Column>

          {this.renderUserSpecificLinks()}
          {this.renderSessionSpecificLinks()}

        </Row>
      </Navigation>
    );
  }
}

export default graphql(currentUser)(graphql(logoutMutation)(NavigationBar));
