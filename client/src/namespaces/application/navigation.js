import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { logoutMutation, currentUser } from 'gql';
import { Navigation, NavLink } from 'common';

@graphql(currentUser)
@graphql(logoutMutation)
export default class NavigationBar extends Component {
  logout() {
    this.props.mutate({
      refetchQueries: [{ query: currentUser }]
    });
  }

  renderSessionSpecificLinks() {
    if (this.props.data.currentUser) {
      return <NavLink onClick={::this.logout}>Uitloggen</NavLink>;
    }

    return (
      <div className="btn-group">
        <NavLink to="/create_account" type="button">Maak account</NavLink>
        <NavLink to="/" type="button">Login</NavLink>
      </div>
    );
  }

  render() {
    return (
      <Navigation>
        {this.renderSessionSpecificLinks()}
      </Navigation>
    );
  }
}
