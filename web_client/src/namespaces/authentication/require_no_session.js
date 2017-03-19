import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { currentUser } from '../../fragments';

export default ComposedComponent => {
  class RequireNoSession extends Component {
    componentWillMount() {
      if (this.props.data.currentUser) {
        this.props.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      const { data, push } = this.props;

      if (!data.currentUser && nextProps.data.currentUser) {
        push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return graphql(currentUser)(RequireNoSession);
};
