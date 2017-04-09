import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { users, adminDeleteUser } from 'gql';

import { RequireAdmin } from '../authentication';
import AdminComponent from './component';

@RequireAdmin
@graphql(users)
@graphql(adminDeleteUser)
export default class GuestContainer extends Component {
  render() {
    return (
      <AdminComponent
        users={this.props.data.users}
        mutate={this.props.mutate}
        refetchQuery={users}
      />
    );
  }
}
