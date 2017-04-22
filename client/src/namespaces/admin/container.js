import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { users as query, adminDeleteUser } from 'gql';

import { RequireAdmin } from '../authentication';
import AdminComponent from './component';

@RequireAdmin
@graphql(query, {
  options: props => {
    return {
      variables: { limit: 10 }
    };
  }
})
@graphql(adminDeleteUser)
export default class GuestContainer extends Component {
  constructor(props) {
    super(props);


    this.state = { errors: [], limit: 0, offset: 0 };
    this.deleteUser = ::this.deleteUser;
    this.loadMoreUsers = ::this.loadMoreUsers;
  }

  loadMoreUsers() {
    const { fetchMore, users } = this.props.data;

    fetchMore({
      variables: {
        offset: users.length
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
    this.props.mutate({
      variables: {
        userId
      },
      refetchQueries: [{
        query,
        variables: { limit: 2, offset: 2 }
      }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    return (
      <AdminComponent
        users={this.props.data.users}
        mutate={this.props.mutate}
        deleteUser={this.deleteUser}
        onLoadMoreUsersClick={this.loadMoreUsers}
      />
    );
  }
}
