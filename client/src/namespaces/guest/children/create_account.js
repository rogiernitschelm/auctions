import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { userSchematic } from '../../../../../server/models/user/schema.js';
import { formValidator as validate } from '../../../helpers';
import { Form, Input, Button } from '../../common';

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
     console.log("SUBMITTED", props)
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

export default CreateAccount;
