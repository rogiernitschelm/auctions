import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import json from 'customization/account';
import { userValidator as validate } from 'helpers';
import BuyerAccountForm from './seller_account_form';

@reduxForm({
  form: 'sellerAccount',
  fields: Object.assign({}, json.form) },
  validate
)
class BuyerAccountFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  render() {
    return (
      <BuyerAccountForm {...this.props} />
    );
  }
}

export default BuyerAccountForm;
