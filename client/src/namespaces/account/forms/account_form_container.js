import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { currentUser as query, updateUser } from 'gql';
import { graphql } from 'react-apollo';
import json from 'customization/account';
import { userValidator as validate } from 'helpers';
import AccountForm from './account_form';

@graphql(updateUser)
@graphql(query, {
  props: ({
    data: {
      loading,
      currentUser
    }
  }) => ({
    initialValues: {
      email: loading ? '' : currentUser.email,
      firstname: loading ? '' : currentUser.firstname,
      lastname: loading ? '' : currentUser.lastname
    }
  })
})
@reduxForm({
  form: 'account',
  fields: Object.assign({}, json.form),
  validate,
  enableReinitialize: true
  }
)
class AccountFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
    this.onSubmit = ::this.onSubmit;
  }

  onSubmit({ email, firstname, lastname }) {
    this.props.mutate({
      variables: { email, firstname, lastname },
      refetchQueries: [{ query }]
    })
    .then(() => this.setState({ errors: [] }))
    .catch(response => this.setState({ errors: response.graphQLErrors }));
  }

  render() {
    return (
      <AccountForm
        onSubmit={this.onSubmit}
        errors={this.state.errors}
        {...this.props}
      />
    );
  }
}

export default AccountFormContainer;
