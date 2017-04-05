import React from 'react';
import { Row, Column } from 'common';

export default () => {
  return (
    <Row className="commercial-info">
      <Column columns={{ xs: 12, sm: 4 }}>
        <article>
          <i className="material-icons">android</i>
          <p>Snel en makkelijk advertentieruimte aankopen.</p>
        </article>
      </Column>
      <Column columns={{ xs: 12, sm: 4 }}>
        <article>
          <i className="material-icons">android</i>
          <p>Direct afrekenen met PayPal of iDeal.</p>
        </article>
      </Column>
      <Column columns={{ xs: 12, sm: 4 }}>
        <article>
          <i className="material-icons">android</i>
          <p>Dagbladen, TV, Radio en billboards, alles is te vinden.</p>
        </article>
      </Column>
    </Row>
  );
};
