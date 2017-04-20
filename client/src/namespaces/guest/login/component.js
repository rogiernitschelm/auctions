import React from 'react';
import { Container, Column, Row, Main } from 'common';
import { LoginForm } from '../forms';

export default () => {
  return (
    <Main className="login">
      <Container>
        <Row>
          <Column columns={{ xs: 12, lg: 6 }} offsets={{ lg: 3 }}>
            <LoginForm />
          </Column>
        </Row>
      </Container>
    </Main>
  );
};
