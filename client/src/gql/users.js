import gql from 'graphql-tag';

export default gql`
  query {
    users {
      email
      firstname
      id
      lastname
      usertype
    }
  }
`;
