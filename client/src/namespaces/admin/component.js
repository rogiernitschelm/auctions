import React from 'react';
import { Main, Container } from 'common';
import { Route } from 'react-router-dom';

import Welcome from './children/welcome';
import UserListComponent from './user_list_component';

export default props => {
  return (
    <Container>
      <Main>
        <Welcome />
        <Route exact path="/admin/auctions" />
        <UserListComponent
          users={props.users}
          refetchQuery={props.refetchQuery}
          mutate={props.mutate}
          exact path="/admin/users"
        />
      </Main>
    </Container>
  );
};
