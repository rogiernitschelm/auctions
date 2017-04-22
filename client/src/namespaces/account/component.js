import React from 'react';
import { Container, ContainerFluid, Row, Main, Column } from 'common';
import AccountForm from './forms/account_form_container';

export default props => {
  return (
    <Main>
      <ContainerFluid>
        <Container>
          <Row>
            <Column columns={{ xs: 12, lg: 6 }}>
            <AccountForm />
            </Column>
          </Row>
        </Container>
      </ContainerFluid>
    </Main>
  );
};
