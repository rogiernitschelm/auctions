import { mockServer } from 'graphql-tools';
import assert from 'assert';
import Schema from '../../../schema';

describe('GraphQL queries', () => {
  let testServer;

  before(done => {
    testServer = mockServer(Schema, {
      String: () => 'I am a test-string'
    });

    done();
  });

  it('returns a valid user query', done => {
    testServer.query(`
      query {
        users {
          id
          email
          firstName
          lastName
          birthDate
          usertype
          chamberOfCommerce
          bids {
            id
            auction
            bidder
            createdAt
          }
          auctions {
            id
            title
            highestBid
            startingPrice
            createdAt
            updatedAt
            description
            type
            endDateTime
          }
        }
      }
    `)
    .then(response => {
      assert(response.data.users.length === 2);
      assert(response.data.users[0].bids.length === 2);
      assert(response.data.users[0].auctions.length === 2);
      done();
    });
  });
});
