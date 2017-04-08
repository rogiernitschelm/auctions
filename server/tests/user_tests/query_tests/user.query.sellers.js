import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validBuyer, insertUsers } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL sellers query', () => {
  let user;
  let req;

  beforeEach(async () => {
    user = new User(validBuyer);
    await user.save();
    req = { user };
  });

  it('should return a list of sellers', async () => {
    const query = `
      query {
        sellers {
          email
          firstname
          lastname
          id
        }
      }
    `;

    insertUsers('seller', 3);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.sellers.length).to.eq(3);
  });

  it('should return a limited size of sellers (50)', async () => {
    const query = `
      query {
        sellers {
          email
          firstname
          lastname
          id
        }
      }
    `;

    insertUsers('seller', 51);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.sellers.length).to.eq(50);
  });

  it('should correctly limit the size of sellers', async () => {
    const query = `
      query {
        sellers(limit: 10) {
          email
          firstname
          lastname
          id
        }
      }
    `;

    insertUsers('seller', 11);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.sellers.length).to.eq(10);
  });

  it('should correctly offset the query of sellers', async () => {
    const query = `
      query {
        sellers(limit: 10, offset: 8) {
          email
          firstname
          lastname
          id
        }
      }
    `;

    insertUsers('seller', 10);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.sellers.length).to.eq(2);
  });
});
