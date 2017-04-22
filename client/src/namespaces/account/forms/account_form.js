import React from 'react';
import { Container, Row, Main, Form, Input } from 'common';
import json from 'customization/account';

const {
  EMAIL,
  TITLE,
  SUBMIT,
  FIRSTNAME,
  LASTNAME,
} = json.form;

export default props => {
  const { onSubmit, errors } = props;

  return (
    <Main>
      <Container>
        <Row>
          <Form
            {...props}
            errors={errors}
            title={TITLE}
            onSubmit={onSubmit}
            submit={SUBMIT}
            className="registration-form"
          >
            <Input
              autoFocus
              label={EMAIL.label}
              name="email"
              placeholder={EMAIL.placeholder}
              type="email"
            />

            <Input
              label={FIRSTNAME.label}
              name="firstname"
              placeholder={FIRSTNAME.placeholder}
              type="text"
            />

            <Input
              label={LASTNAME.label}
              name="lastname"
              placeholder={LASTNAME.placeholder}
              type="text"
            />

          </Form>
        </Row>
      </Container>
    </Main>
  );
};
