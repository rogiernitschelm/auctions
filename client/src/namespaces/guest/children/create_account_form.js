import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser } from 'gql';
import { userValidator as validate } from 'helpers';
import json from 'customization/guest';

import { Form, Input } from 'common';
import { createAccountMutation } from '../graphql/mutations';

@reduxForm({ form: 'createAccount', fields: Object.keys(json.form), validate })
class CreateAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email, firstname, lastname, usertype, coc, company, password }) {
    this.props.mutate({
      variables: { email, firstname, lastname, password, usertype, coc, company },
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
      REPEAT_PASSWORD,
    } = json.form;

    return (
      <Form
        {...this.props}
        errors={this.state.errors}
        title={TITLE}
        onSubmit={this.onSubmit}
        submit={SUBMIT}
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

        <hr />

        <Input
          name="company"
          type="text"
          label={COMPANY.label}
          placeholder={COMPANY.placeholder}
        />

        <Input
          name="coc"
          type="text"
          label={COC.label}
          placeholder={COC.placeholder}
        />

        <hr />

        <Input
          name="password"
          type="password"
          label={PASSWORD.label}
          placeholder={PASSWORD.placeholder}
        />

        <Input
          name="repeatpassword"
          type="password"
          label={REPEAT_PASSWORD.label}
          placeholder={REPEAT_PASSWORD.placeholder}
        />

        <br />
      </Form>
    );
  }
}

export default graphql(createAccountMutation)(CreateAccountForm);
