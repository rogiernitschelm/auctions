import React from 'react';
import { Container, ContainerFluid, Row, Main, Column } from 'common';
import { LoginForm } from '../forms';

import CommercialInfo from './children/commercial_info';
import Steps from './children/steps';
import LoginInfo from './children/login_info';

export default () => {
  return (
    <Main className="landing">
      <ContainerFluid className="landing-container">
        <Container>
          <Row>
            <Column columns={{ xs: 12, lg: 6 }}>
              <LoginInfo />
            </Column>
            <Column columns={{ xs: 12, lg: 6 }}>
              <LoginForm />
            </Column>
          </Row>
        </Container>
      </ContainerFluid>

      <ContainerFluid>
        <CommercialInfo />
        <Steps />
      </ContainerFluid>
    </Main>
  );
};
