import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import { currentUser } from 'gql';
import { formValidator as validate } from 'helpers';
// import { userSchematic } from '../../../../../server/models/user/schema.js';
import { Form, Input, Button } from 'common';
import { createAccountMutation } from '../graphql/mutations';


@reduxForm({
  form: 'createAccount',
  fields: ['email'],
  // validate
})
class CreateAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email }) {
    this.props.mutate({
      variables: { email, password: "abcd1234", usertype: 'seller' },
      refetchQueries: [{ query: currentUser }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    return (
      <Form
        {...this.props}
        errors={this.state.errors}
        title="Maak account"
        onSubmit={this.onSubmit}
        className="create-account-form"
      >
        <Input name="email" type="email" label="E-mail" placeholder="hendrik@bedrijfsmail.nl" />
        <Input name="fname" type="text" label="Voornaam" placeholder="Hendrik-Alexander" />
        <Input name="lname" type="text" label="Achternaam" placeholder="'De Boer'" />
        <Input name="usertype" type="text" label="Gebruiker" placeholder="Ben je bieder of aanbieder?" />
        <Button type="submit" size="lg">Submit</Button>
      </Form>
    );
  }
}

export default graphql(createAccountMutation)(CreateAccountForm);
