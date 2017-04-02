import gql from 'graphql-tag';

export const createAccountMutation = gql`
  mutation signup(
    $email: String,
    $password: String,
    # $firstName: String,
    # $lastName: String,
    $usertype: String
  ) {
    signup(
      email: $email,
      password: $password
      usertype: $usertype
    ) {
      email
      id
    }
  }
`;
