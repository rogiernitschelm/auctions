import React, { Component } from 'react';
import { Container, Row, Column } from 'common';
import { RequireNoSession } from '../authentication';
import CreateAccountForm from './children/create_account_form';
import CreateAccountInfo from './children/create_account_info';

@RequireNoSession
export default class GuestContainer extends Component {
  render() {
    if (this.props.location.pathname === '/guest/create_account') {
      return (
        <Container className="guest-container">
          <Row>
            <Column columns={{ xs: 12, md: 6 }}>
              <CreateAccountInfo />
            </Column>
            <Column columns={{ xs: 12, md: 6 }}>
              <CreateAccountForm />
            </Column>
          </Row>
        </Container>
      );
    }
    return <div />;
  }
}
