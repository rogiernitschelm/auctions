import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { logoutMutation, currentUser } from 'gql';
import { Navigation, NavLink } from 'common';

class NavigationBar extends Component {
  logout() {
    this.props.mutate({
      refetchQueries: [{ query: currentUser }]
    }).then(data => console.log(data))
    .catch(error => console.log(error.message));
  }

  renderSessionSpecificLinks() {
    if (this.props.data.currentUser) {
      return <NavLink onLogoutClick={::this.logout} />;
    }

    return <NavLink to="/guest/create_account" type="button">Maak account</NavLink>;
  }

  render() {
    return (
      <Navigation>
        <NavLink>Over ons</NavLink>
        {this.renderSessionSpecificLinks()}
      </Navigation>
    );
  }
}

export default graphql(currentUser)(graphql(logoutMutation)(NavigationBar));
