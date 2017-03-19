import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
// import { userSchematic } from '../../../../../server/models/user/schema.js';
// import { formValidator as validate } from '../../../helpers';
import { Form, Input, Button } from '../../common';
import { createAccountMutation } from '../graphql/mutations';

@reduxForm({
  form: 'createAccount',
  fields: ['email'],
  // validate
})
class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = ::this.onSubmit;
  }

  onSubmit(props) {
    this.props.mutate().then(data => console.log(data))
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <Form title="Maak account" {...this.props} onSubmit={this.onSubmit}>
        <Input name="email" type="email" placeholder="email" label="E-mail" />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default graphql(createAccountMutation)(CreateAccount);
