import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { currentUser } from 'gql';

export default ComposedComponent => {
  @graphql(currentUser)
  class RequireNoSession extends Component {
    state = { redirect: false };

    componentWillUpdate(nextProps) {
      const { data } = this.props;

      if (data.currentUser) {
        this.setState({ redirect: true });
      }

      if (nextProps.data.currentUser) {
        this.setState({ redirect: true });
      }
    }

    componentWillUnmount() {
      this.setState({ redirect: false });
    }

    render() {
      const { data } = this.props;

      if (this.state.redirect) {
        switch (data.currentUser.usertype) {
          case 'admin': return <Redirect to="/admin" />;
          case 'seller': return <Redirect to="/seller" />;
          case 'buyer': return <Redirect to="/buyer" />;
          default: return <Redirect to="/" />;
        }
      }

      if (data.loading) return <div>Loading yo</div>;

      return <ComposedComponent {...this.props} />;
    }
  }

  return RequireNoSession;
};
