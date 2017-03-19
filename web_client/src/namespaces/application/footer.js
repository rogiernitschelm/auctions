import React from 'react';
import { Footer, FooterLinks, Column, Row, Container } from '../common';
import json from './customization';

export default () => {
  return (
    <Footer>
      <Container>
        <Row>
          <FooterLinks {...json.footer.about} />
          <FooterLinks {...json.footer.contact} />
          <FooterLinks {...json.footer.opportunities} />
        </Row>
      </Container>
    </Footer>
  );
};
