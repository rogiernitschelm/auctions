import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import GuestComponent from './component';

import { formValidator as validate } from '../../helpers';
import { userSchematic } from '../../../../server/models/user/schema.js';

@reduxForm({
  form: 'createAccount',
  fields: ['email'],
  // validate
})
class GuestContainer extends Component {
  onSubmit(props) {
    console.log("SUBMITTED", props)
  }

  render() {
    return (
      <GuestComponent {...this.props} onSubmit={::this.onSubmit} />
    );
  }
}

export default GuestContainer;
