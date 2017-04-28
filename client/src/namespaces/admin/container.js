import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { users as query, adminDeleteUser } from 'gql';

import { RequireAdmin } from '../authentication';
import AdminComponent from './component';

const INITIAL_LIMIT = 10;

@RequireAdmin
@graphql(query, {
  options: () => {
    return {
      variables: { limit: INITIAL_LIMIT }
    };
  }
})
@graphql(adminDeleteUser)
export default class GuestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [], limit: INITIAL_LIMIT, offset: 0, searchTerm: '' };
    this.deleteUser = ::this.deleteUser;
    this.loadMoreUsers = ::this.loadMoreUsers;
    this.searchTermChange = ::this.searchTermChange;
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

    console.log("trigger")

    fetchMore({
      variables: {
        offset: this.state.offset,
        searchTerm: this.state.searchTerm
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
      this.props.data.refetch({ limit: this.state.limit, searchTerm: this.state.searchTerm });
    })
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  searchTermChange(event) {
    this.setState({ searchTerm: event.target.value });

    console.log(event.target.value)
  }

  render() {
    return (
      <AdminComponent
        users={this.props.data.users}
        onDeleteUser={this.deleteUser}
        onLoadMoreUsers={this.loadMoreUsers}
        onSearchTermChange={this.searchTermChange}
      />
    );
  }
}
