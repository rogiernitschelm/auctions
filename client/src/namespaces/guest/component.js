import React from 'react';
import { Form, Input, Button } from '../common';

export default props => {
  return (
    <Form title="Maak account" {...props}>
      <Input name="email" type="email" placeholder="email" label="E-mail" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
