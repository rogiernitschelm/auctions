import React from 'react';
import { Container, Row } from 'common';
import SignupForm from './children/signup_form';
import SignupInfo from './children/signup_info';

export default () => {
  return (
    <Container>
      <Row>
        <SignupInfo />
        <SignupForm />
      </Row>
    </Container>
  );
};
