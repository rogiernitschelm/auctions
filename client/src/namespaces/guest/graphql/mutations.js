import gql from 'graphql-tag';

export const createAccountMutation = gql`
  mutation {
    signup(
      email: "mail@hoogle.nom",
      password: "abcd1234",
      firstName: "Kees",
      lastName: "van de Koekjesfabriek",
      chamberOfCommerce: "123456789a",
      companyName: "Hoogle.nom",
      usertype: "seller"
    ) {
      id
      email
    }
  }
`;
