import React from 'react';
import { Row, ListWithSearch, Column, Button } from 'common';
import json from 'customization/admin';

const {
  CREDENTIALS,
  REMOVE,
  USERTYPE,
  SEARCH,
  TITLE,
  LOAD_MORE,
} = json.users;

const UserListComponent = ({ users = [], onDeleteUser, onLoadMoreUsers, onSearchTermChange }) => {
  const renderUsers = () => {
    return users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.firstname} {user.lastname}<br /> {user.email} </td>
          <td>{user.usertype}</td>
          <td>
            <Button color="danger" className="btn-sm" onClick={() => onDeleteUser(user.id)}>
              {REMOVE}
            </Button>
          </td>
        </tr>
      );
    });
  };

  const renderHeaders = () => [CREDENTIALS, USERTYPE, REMOVE];

  return (
    <Row>
      <Column columns={{ xs: 12, lg: 6 }}>
        <ListWithSearch
          rows={renderUsers()}
          headers={renderHeaders()}
          placeholder={SEARCH}
          title={TITLE}
          onSearchTermChange={onSearchTermChange}
          onButtonClick={onLoadMoreUsers}
          onButtonClickText={LOAD_MORE}
        />
      </Column>
    </Row>
  );
};

export default UserListComponent;
