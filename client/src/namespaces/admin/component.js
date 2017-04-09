import React from 'react';
import { Main, Container } from 'common';
import { Route, Switch } from 'react-router-dom';

import Welcome from './children/welcome';
import UserListComponent from './user_list_component';

export default props => {
  return (
    <Container>
      <Main>
        <Route exact path="/admin" component={Welcome} />

        <Switch>
          <UserListComponent
            users={props.users}
            refetchQuery={props.refetchQuery}
            mutate={props.mutate}
            exact path="/admin/users"
          />
        </Switch>

      </Main>
    </Container>
  );
};
