import React from 'react';
import { Row, Column, Container } from 'common';
import SignupInfo from './children/signup_info';

export default props => (
  <Container className="guest-container">
    <Row>
      <Column columns={{ xs: 12, lg: 6 }}>
        <SignupInfo />
      </Column>
      <Column columns={{ xs: 12, lg: 6 }}>
        {props.children}
      </Column>
    </Row>
  </Container>
);
