import gql from 'graphql-tag';

export default gql`
  query users(
    $limit: Int,
    $offset: Int
  ){
    users(
      limit: $limit,
      offset: $offset
    ) {
      email
      firstname
      id
      lastname
      usertype
    }
  }
`;
