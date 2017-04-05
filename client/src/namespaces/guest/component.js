import React from 'react';
import { Row, Column, Container, ContainerFluid } from 'common';
import SignupInfo from './children/signup_info';
import CommercialInfo from './children/commercial_info';

export default props => (
  <ContainerFluid>
    <main className="guest-container">
      <Container>
        <Row>
          <Column columns={{ xs: 12, lg: 6 }}>
            <SignupInfo />
          </Column>
          <Column columns={{ xs: 12, lg: 6 }}>
            {props.children}
          </Column>
        </Row>
      </Container>
    </main>
    <Container>
      <CommercialInfo />
    </Container>
  </ContainerFluid>
);
