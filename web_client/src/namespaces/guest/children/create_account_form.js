import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser } from 'gql';
import { formValidator as validate } from 'helpers';
import json from 'customization/guest';

import { Form, Input, Button } from 'common';
import { createAccountMutation } from '../graphql/mutations';

@reduxForm({ form: 'createAccount', fields: Object.keys(json.form) })// validate })
class CreateAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email, firstname, lastname, usertype, password }) {
    this.props.mutate({
      variables: { email, firstname, lastname, password, usertype },
      refetchQueries: [{ query: currentUser }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    const {
      COC,
      COMPANY,
      EMAIL,
      FIRSTNAME,
      LASTNAME,
      PASSWORD,
      SUBMIT,
      TITLE,
      USERTYPE,
    } = json.form;

    return (
      <Form
        {...this.props}
        errors={this.state.errors}
        title={TITLE}
        onSubmit={this.onSubmit}
        className="create-account-form"
      >
        <Input
          name="email"
          type="email"
          label={EMAIL.label}
          placeholder={EMAIL.placeholder}
          autoFocus
        />

        <Input
          name="firstname"
          type="text"
          label={FIRSTNAME.label}
          placeholder={FIRSTNAME.placeholder}
        />

        <Input
          name="lastname"
          type="text"
          label={LASTNAME.label}
          placeholder={LASTNAME.placeholder}
        />

        <Input
          name="usertype"
          type="select"
          label={USERTYPE.label}
          placeholder={USERTYPE.placeholder}
          options={USERTYPE.options}
        />

        <br />

        <Input
          name="company"
          type="text"
          label={COMPANY.label}
          placeholder={COMPANY.placeholder}
        />

        <Input
          name="kvk"
          type="text"
          label={COC.label}
          placeholder={COC.placeholder}
        />

        <br />

        <Input
          name="password"
          type="password"
          label={PASSWORD.label}
          placeholder={PASSWORD.placeholder}
        />

        <br />

        <Button type="submit" className="btn-lg btn-block" size="lg">
          {SUBMIT}<i className="material-icons">navigate_next</i>
        </Button>
      </Form>
    );
  }
}

export default graphql(createAccountMutation)(CreateAccountForm);
