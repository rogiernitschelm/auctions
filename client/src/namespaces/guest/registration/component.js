import React from 'react';
import { Container, Row, Main } from 'common';
import { SignupForm } from '../forms';

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
