import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser, loginMutation } from 'gql';
import { userValidator as validate } from 'helpers';
import json from 'customization/guest';
import { Form, Input } from 'common';

const {
  EMAIL,
  PASSWORD,
  SUBMIT_LOGIN,
  TITLE_LOGIN,
} = json.form;

@graphql(currentUser)
@graphql(loginMutation)
@reduxForm({ form: 'login', fields: Object.keys(json.form), validate })
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUser }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    return (
      <Form
        {...this.props}
        className="login-form"
        errors={this.state.errors}
        onSubmit={this.onSubmit}
        submit={SUBMIT_LOGIN}
        title={TITLE_LOGIN}
      >

        <Input
          autoFocus
          label={EMAIL.label}
          name="email"
          placeholder={EMAIL.placeholder}
          type="email"
        />

        <Input
          label={PASSWORD.label}
          name="password"
          placeholder={PASSWORD.placeholder}
          type="password"
        />

        <br />

      </Form>
    );
  }
}
