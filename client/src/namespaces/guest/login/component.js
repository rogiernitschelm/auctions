import React from 'react';
import { Container, Row, Main } from 'common';
import { LoginForm } from 'forms';

export default () => {
  return (
    <Main>
      <Container>
        <Row>
          <LoginForm />
        </Row>
      </Container>
    </Main>
  );
};
