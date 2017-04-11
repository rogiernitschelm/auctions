import React from 'react';
import { Container, Row, Column, Jumbotron } from 'common';

import placeholder from '../../../assets/placeholder.png';

export default () => {
  return (
    <Container>
      <Row>
        <Column columns={{ xs: 12, lg: 6 }}>
          <Jumbotron
            lead="Stap 1: Registeer"
            paragraph="Dit duurt niet langer dan een minuut."
            icon="account_box"
          />
        </Column>
        <Column columns={{ xs: 12, lg: 6 }} className="hidden-md-down">
          <img className="step" src={placeholder} alt="placeholder" />
        </Column>
      </Row>
      <Row>
        <Column columns={{ xs: 12, lg: 6 }} className="hidden-md-down">
          <img className="step" src={placeholder} alt="placeholder" />
        </Column>
        <Column columns={{ xs: 12, lg: 6 }}>
          <Jumbotron
            lead="Stap 2: Zoek advertentieruimte"
            paragraph="Heb jij goede advertentieruimte gevonden? Start met bieden!"
            icon="search"
          />
        </Column>
      </Row>
      <Row>
        <Column columns={{ xs: 12, lg: 6 }}>
          <Jumbotron
            lead="Stap 3: Gewonnen?"
            paragraph="Reken de ruimte af en word bekend!"
            icon="tag_faces"
          />
        </Column>
        <Column columns={{ xs: 12, lg: 6 }} className="hidden-md-down">
          <img className="step" src={placeholder} alt="placeholder" />
        </Column>
      </Row>
    </Container>
  );
};
