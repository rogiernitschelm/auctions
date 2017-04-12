import React from 'react';
import { Container, Row, Main } from 'common';

import SignupForm from '../../forms/signup_form';

export default () => {
  return (
    <Main>
      <Container>
        <Row>
          <SignupForm />
        </Row>
      </Container>
    </Main>
  );
};
