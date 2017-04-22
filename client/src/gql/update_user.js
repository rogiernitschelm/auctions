import gql from 'graphql-tag';

export default gql`
  mutation updateUser(
    $email: String!,
    $firstname: String!,
    $lastname: String!,
  ) {
    updateUser(
      email: $email,
      firstname: $firstname
      lastname: $lastname
    ) {
      email
      id
    }
  }
`;
