import React, { Component } from 'react';
import { Container, Row, Main } from 'common';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import json from 'customization/account';
import { userValidator as validate } from 'helpers';

const {
  EMAIL,
  PASSWORD,
  REPEAT_PASSWORD
} = json.form;

@reduxForm({
  form: 'sellerAccount',
  fields: Object.assign({}, json.form) },
  validate
)
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
