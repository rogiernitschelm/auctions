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

      if (!data.currentUser && nextProps.data.currentUser) {
        this.setState({ redirect: true });
      }

      if (data.currentUser && !nextProps.data.currentUser) {
        this.setState({ redirect: false });
      }
    }

    render() {
      if (this.state.redirect) return <Redirect to="/" />;
      if (this.props.data.loading) return <div>Loading yo</div>;

      return <ComposedComponent {...this.props} />;
    }
  }

  return RequireNoSession;
};
