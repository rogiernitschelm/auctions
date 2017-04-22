import React, { Component } from 'react';
import { Container, Row, Main } from 'common';
import json from 'customization/account';

const {
  EMAIL,
  PASSWORD,
  REPEAT_PASSWORD
} = json.form;

class SellerAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  render() {
    return (
      <Main>
        <Container>
          <Row>
            asddsa
          </Row>
        </Container>
      </Main>
    );
  }
}

export default SellerAccountForm;
