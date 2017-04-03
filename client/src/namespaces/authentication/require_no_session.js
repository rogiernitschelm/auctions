import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { currentUser } from 'gql';

export default ComposedComponent => {
  class RequireNoSession extends Component {
    state = { redirect: false };

    componentWillUpdate(nextProps) {
      if (!this.props.data.currentUser && nextProps.data.currentUser) {
        this.setState({ redirect: true });
      }
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to="/" />;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  return graphql(currentUser)(RequireNoSession);
};
