import React from 'react';
import json from 'customization/guest';
import { Form, Input } from 'common';

const {
  EMAIL,
  PASSWORD,
  SUBMIT_LOGIN,
  TITLE_LOGIN,
} = json.form;

export default props => {
  const { onSubmit, errors } = props;

  return (
    <Form
      {...props}
      className="login-form"
      errors={errors}
      onSubmit={onSubmit}
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
};
