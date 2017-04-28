import gql from 'graphql-tag';

export default gql`
  query users(
    $limit: Int,
    $offset: Int,
    $searchTerm: String
  ){
    users(
      limit: $limit,
      offset: $offset,
      searchTerm: $searchTerm
    ) {
      email
      firstname
      id
      lastname
      usertype
    }
  }
`;
