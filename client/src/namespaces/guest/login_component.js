import React from 'react';
import { Container, Row } from 'common';
import LoginForm from './children/login_form';
import LoginInfo from './children/login_info';

export default () => {
  return (
    <Container>
      <Row>
        <LoginInfo />
        <LoginForm />
      </Row>
    </Container>
  );
};
