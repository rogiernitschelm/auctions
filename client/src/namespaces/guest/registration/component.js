import React from 'react';
import { Container, Row, Main, Column } from 'common';
import { SignupForm } from '../forms';

export default () => {
  return (
    <Main className="registration">
      <Container>
        <Row>
          <Column columns={{ xs: 12, lg: 6 }} offsets={{ lg: 3 }}>
            <SignupForm />
          </Column>
        </Row>
      </Container>
    </Main>
  );
};
