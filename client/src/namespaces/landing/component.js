import React from 'react';
import { Container, ContainerFluid, Row, Main, Column } from 'common';

import CommercialInfo from './children/commercial_info';
import Steps from './children/steps';
import LoginInfo from './children/login_info';
import LoginForm from '../forms/login_form';

export default () => {
  return (
    <Main>
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
