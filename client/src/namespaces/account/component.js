import React from 'react';
import { Container, ContainerFluid, Row, Main, Column } from 'common';
import SellerAccountForm from './forms/seller_account_form';

export default props => {
  const renderForm = () => {
    if (props.data.currentUser.usertype === 'seller') {
      return <SellerAccountForm />;
    }
  };

  return (
    <Main>
      <ContainerFluid>
        <Container>
          <Row>
            <Column columns={{ xs: 12, lg: 6 }}>
            {renderForm()}
            </Column>
          </Row>
        </Container>
      </ContainerFluid>
    </Main>
  );
};
