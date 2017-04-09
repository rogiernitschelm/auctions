import React from 'react';
import { Container, Row, Table, Column } from 'common';
import { Link } from 'react-router-dom';

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
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
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
    return ['E-mailadres', 'Voornaam', 'Achternaam', 'Gebruikerstype', 'Verwijder'];
  }

  render() {
    console.log(this.props)
    return (
      <Row>
        <Column columns={{ xs: 12 }}>
          <Table rows={this.renderUsers()} headers={this.renderHeaders()} />
        </Column>
      </Row>
    );
  }
}
