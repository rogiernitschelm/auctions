import React from 'react';
import { Row, Column } from 'common';

export default () => {
  return (
    <Row className="admin-welcome">
      <Column columns={{ xs: 12 }}>
        Welcome administrator!
      </Column>
    </Row>
  );
};
