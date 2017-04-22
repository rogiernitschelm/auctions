import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser, loginMutation } from 'gql';
import { userValidator as validate } from 'helpers';
import json from 'customization/guest';
import LoginForm from './login_form';

@graphql(currentUser)
@graphql(loginMutation)
@reduxForm({ form: 'login', fields: Object.keys(json.form), validate })
export default class LoginFormContainer extends Component {
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
      <LoginForm
        {...this.props}
        errors={this.state.errors}
        onSubmit={this.onSubmit}
      />
    );
  }
}
