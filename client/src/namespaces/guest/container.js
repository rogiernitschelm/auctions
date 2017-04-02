import React, { Component } from 'react';
import { Container, Row, Column } from 'common';
import { RequireNoSession } from '../authentication';
import SignupForm from './children/signup_form';
import SignupInfo from './children/signup_info';

@RequireNoSession
export default class GuestContainer extends Component {
  render() {
    if (this.props.location.pathname === '/guest/create_account') {
      return (
        <Container className="guest-container">
          <Row>
            <Column columns={{ xs: 12, lg: 6 }}>
              <SignupInfo />
            </Column>
            <Column columns={{ xs: 12, lg: 6 }}>
              <SignupForm />
            </Column>
          </Row>
        </Container>
      );
    }
    return <div />;
  }
}
