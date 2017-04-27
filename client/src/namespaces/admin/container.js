import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { users as query, adminDeleteUser } from 'gql';

import { RequireAdmin } from '../authentication';
import AdminComponent from './component';

const INITIAL_LIMIT = 10;

@RequireAdmin
@graphql(query, {
  options: props => {
    return {
      variables: { limit: INITIAL_LIMIT }
    };
  }
})
@graphql(adminDeleteUser)
export default class GuestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [], limit: INITIAL_LIMIT, offset: 0 };
    this.deleteUser = ::this.deleteUser;
    this.loadMoreUsers = ::this.loadMoreUsers;
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.users && nextProps.data.users) {
      this.setState({ offset: nextProps.data.users.length, limit: nextProps.data.users.length });
    }

    if (this.props.data.users) {
      if (this.props.data.users.length !== nextProps.data.users.length) {
        this.setState({ offset: nextProps.data.users.length, limit: nextProps.data.users.length });
      }
    }
  }

  loadMoreUsers() {
    const { fetchMore } = this.props.data;

    fetchMore({
      variables: {
        offset: this.state.offset
      },

      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return Object.assign({}, previousResult, {
          users: [...previousResult.users, ...fetchMoreResult.users]
        });
      }
    });
  }

  deleteUser(userId) {
    this.props.mutate({ variables: { userId } })
    .then(() => {
      this.setState({ errors: [] });

      this.props.data.refetch({ limit: this.state.limit });
    })
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    return (
      <AdminComponent
        users={this.props.data.users}
        deleteUser={this.deleteUser}
        onLoadMoreUsersClick={this.loadMoreUsers}
      />
    );
  }
}
