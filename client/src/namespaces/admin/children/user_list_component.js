import React from 'react';
import { Row, ListWithSearch, Column, Button } from 'common';
import json from 'customization/admin';

const {
  EMAIL,
  NAME,
  REMOVE,
  USERTYPE,
  SEARCH,
  TITLE,
} = json.users;

const UserListComponent = ({ users = [], deleteUser, onLoadMoreUsersClick }) => {
  const renderUsers = () => {
    return users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.email}</td>
          <td>{`${user.firstname} ${user.lastname}`}</td>
          <td>{user.usertype}</td>
          <td>
            <i
              className="material-icons delete-user"
              onClick={() => deleteUser(user.id)}
            >
              not_interested
            </i>
          </td>
        </tr>
      );
    });
  };

  const renderHeaders = () => [EMAIL, NAME, USERTYPE, REMOVE];

  return (
    <Row>
      <Column columns={{ xs: 12, lg: 6 }}>
        <ListWithSearch
          rows={renderUsers()}
          headers={renderHeaders()}
          placeholder={SEARCH}
          title={TITLE}
        />
        <button onClick={onLoadMoreUsersClick}>Click</button>
      </Column>
    </Row>
  );
};

export default UserListComponent;
