import React from 'react';
import { Footer, Column, Row, Container } from '../common';

export default () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Column columns={{ lg: 3, md: 3 }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </Column>

          <Column columns={{ lg: 3, md: 3 }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </Column>

          <Column columns={{ lg: 3, md: 3 }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </Column>

          <Column columns={{ lg: 3, md: 3 }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </Column>
        </Row>
      </Container>
    </Footer>
  );
};
