import gql from 'graphql-tag';

export default gql`
  mutation signup(
    $email: String,
    $password: String,
    $firstname: String,
    $lastname: String,
    $coc: String,
    $company: String,
    $usertype: String
  ) {
    signup(
      email: $email,
      password: $password
      usertype: $usertype
      firstname: $firstname
      lastname: $lastname
      coc: $coc
      company: $company
    ) {
      email
      id
    }
  }
`;
