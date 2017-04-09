import gql from 'graphql-tag';

export default gql`
  mutation adminDeleteUser(
    $userId: ID
  ) {
    adminDeleteUser(
      userId: $userId
    ) {
      id
    }
  }
`;
