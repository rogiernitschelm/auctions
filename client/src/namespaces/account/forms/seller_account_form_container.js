import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import json from 'customization/account';
import { userValidator as validate } from 'helpers';
import SellerAccountForm from './seller_account_form';

@reduxForm({
  form: 'sellerAccount',
  fields: Object.assign({}, json.form) },
  validate
)
class SellerAccountFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  render() {
    return (
      <SellerAccountForm {...this.props} />
    );
  }
}

export default SellerAccountForm;
