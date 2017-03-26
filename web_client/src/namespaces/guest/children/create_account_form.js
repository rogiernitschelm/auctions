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
  fields: ['email', 'firstname', 'lastname', 'usertype'],
  // validate
})
class CreateAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email, firstname, lastname, usertype, password }) {
    console.log(email, firstname, lastname, usertype, password)
    this.props.mutate({
      variables: { email, firstname, lastname, password, usertype },
      refetchQueries: [{ query: currentUser }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    const options = [
      { text: 'Aanbieder', value: 'seller' },
      { text: 'Bieder', value: 'buyer' }
    ];

    return (
      <Form
        {...this.props}
        errors={this.state.errors}
        title="Maak account aan"
        onSubmit={this.onSubmit}
        className="create-account-form"
      >
        <Input name="email" type="email" label="E-mail" placeholder="hendrik@bedrijfsmail.nl" autoFocus />
        <Input name="firstname" type="text" label="Voornaam" placeholder="Hendrik-Alexander" />
        <Input name="lastname" type="text" label="Achternaam" placeholder="'De Boer'" />
        <Input name="usertype" type="select" label="Gebruiker" placeholder="Ben je bieder of aanbieder?" options={options} />

        <br />

        <Input name="company" type="text" label="Bedrijfsnaam" placeholder="Bedrijfsnaam" />
        <Input name="kvk" type="text" label="Kvk" placeholder="Kvk-nummer van je organisatie" />

        <br />

        <Input name="password" type="password" label="Wachtwoord" placeholder="Minimaal 8 tekens..." options={options} />

        <br />

        <Button type="submit" className="btn-lg btn-block" size="lg">
          Maak aan!<i className="material-icons">navigate_next</i>
        </Button>
      </Form>
    );
  }
}

export default graphql(createAccountMutation)(CreateAccountForm);
