import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser, signUpMutation } from 'gql';
import { userValidator as validate } from 'helpers';
import json from 'customization/guest';
import SignupForm from './signup_form';

@graphql(currentUser)
@graphql(signUpMutation)
@reduxForm({ form: 'signup', fields: Object.keys(json.form), validate })
export default class SignupFormContainer extends Component {
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
    return (
      <SignupForm
        {...this.props}
        errors={this.state.errors}
        onSubmit={this.onSubmit}
      />
    );
  }
}
