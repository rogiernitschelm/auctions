import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validSeller, insertUsers } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL buyers', () => {
  let user;
  let req;

  beforeEach(async () => {
    user = new User(validSeller);
    await user.save();
    req = { user };
  });

  it('should return a list of buyers', async () => {
    const query = `
      query {
        buyers {
          email
          firstname
          lastname
          id
        }
      }
    `;
    insertUsers('buyer', 3);
    const result = await graphql(schema, query, {}, req);

    expect(result.data.buyers.length).to.eq(3);
  });

  it('should return a limited size of buyers (50)', async () => {
    const query = `
      query {
        buyers {
          email
        }
      }
    `;

    insertUsers('buyer', 51);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.buyers.length).to.eq(50);
  });

  it('should correctly limit the size of buyers', async () => {
    const query = `
      query {
        buyers(limit: 10) {
          email
        }
      }
    `;

    insertUsers('buyer', 11);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.buyers.length).to.eq(10);
  });

  it('should correctly offset the query of buyers', async () => {
    const query = `
      query {
        buyers(limit: 10, offset: 8) {
          email
        }
      }
    `;

    insertUsers('buyer', 10);
    const result = await graphql(schema, query, {}, req);

    expect(result.data.buyers.length).to.eq(2);
  });
});
