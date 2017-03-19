import gql from 'graphql-tag';

export const createAccountMutation = gql`
  mutation {
    signup(
      email: "maiaaazasl@hoogle.nom",
      password: "abcd1234",
      firstName: "Kees",
      lastName: "van de Koekjesfabriek",
      usertype: "seller"
    ) {
      id
      email
    }
  }
`;
