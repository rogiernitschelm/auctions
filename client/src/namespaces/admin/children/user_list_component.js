import React from 'react';
import { Row, Table, Column } from 'common';
import json from 'customization/admin';

const {
  EMAIL,
  NAME,
  REMOVE,
  USERTYPE,
} = json.users;

export default class UserListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  deleteUser(userId) {
    this.props.mutate({
      variables: { userId },
      refetchQueries: [{ query: this.props.refetchQuery }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  renderUsers() {
    const { users = [] } = this.props;

    return users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.email}</td>
          <td>{`${user.firstname} ${user.lastname}`}</td>
          <td>{user.usertype}</td>
          <td>
            <i
              className="material-icons delete-user"
              onClick={() => this.deleteUser(user.id)}
            >
              not_interested
            </i>
          </td>
        </tr>
      );
    });
  }

  renderHeaders() {
    return [EMAIL, NAME, USERTYPE, REMOVE];
  }

  render() {
    return (
      <Row>
        <Column columns={{ xs: 12 }}>
          <Table rows={this.renderUsers()} headers={this.renderHeaders()} />
        </Column>
      </Row>
    );
  }
}
