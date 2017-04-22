import React from 'react';
import json from 'customization/guest';
import { Form, Input } from 'common';

const {
  COC,
  COMPANY,
  EMAIL,
  FIRSTNAME,
  LASTNAME,
  PASSWORD,
  REPEAT_PASSWORD,
  SUBMIT_SIGNUP,
  TITLE_SIGNUP,
  USERTYPE,
} = json.form;

export default props => {
  const { onSubmit, errors } = props;

  return (
    <Form
      {...props}
      errors={errors}
      title={TITLE_SIGNUP}
      onSubmit={onSubmit}
      submit={SUBMIT_SIGNUP}
      className="registration-form"
    >
      <Input
        name="email"
        type="email"
        label={EMAIL.label}
        placeholder={EMAIL.placeholder}
        autoFocus
      />

      <Input
        name="firstname"
        type="text"
        label={FIRSTNAME.label}
        placeholder={FIRSTNAME.placeholder}
      />

      <Input
        name="lastname"
        type="text"
        label={LASTNAME.label}
        placeholder={LASTNAME.placeholder}
      />

      <Input
        name="usertype"
        type="select"
        label={USERTYPE.label}
        placeholder={USERTYPE.placeholder}
        options={USERTYPE.options}
      />

      <hr />

      <Input
        name="company"
        type="text"
        label={COMPANY.label}
        placeholder={COMPANY.placeholder}
      />

      <Input
        name="coc"
        type="text"
        label={COC.label}
        placeholder={COC.placeholder}
      />

      <hr />

      <Input
        name="password"
        type="password"
        label={PASSWORD.label}
        placeholder={PASSWORD.placeholder}
      />

      <Input
        name="repeatpassword"
        type="password"
        label={REPEAT_PASSWORD.label}
        placeholder={REPEAT_PASSWORD.placeholder}
      />

      <br />
    </Form>
  );
};
