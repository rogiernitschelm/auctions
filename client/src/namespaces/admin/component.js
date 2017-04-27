import React from 'react';
import { Main, Container, Header } from 'common';
import { Route, Switch } from 'react-router-dom';
import UserListComponent from './children/user_list_component';
import AuctionListComponent from './children/auction_list_component';
import json from 'customization/admin';

const {
  WELCOME,
} = json.main;

export default props => {
  return (
    <Main>
      <Container>
        <Header title={WELCOME} />

        <UserListComponent
          users={props.users}
          mutate={props.mutate}
          deleteUser={props.deleteUser}
          onLoadMoreUsersClick={props.onLoadMoreUsersClick}
        />

        <AuctionListComponent

        />

      </Container>
    </Main>
  );
};
