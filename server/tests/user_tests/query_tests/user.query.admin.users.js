import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validAdmin, insertUsers } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL users', () => {
  let user;
  let req;

  beforeEach(async () => {
    user = new User(validAdmin);
    await user.save();
    req = { user };
  });

  it('should return a list of users', async () => {
    const query = `
      query {
        users {
          email
          firstname
          lastname
          id
        }
      }
    `;
    insertUsers('buyer', 3);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.users.length).to.eq(3);
  });

  it('should return a limited size of users (50)', async () => {
    const query = `
      query {
        users {
          email
        }
      }
    `;

    insertUsers('buyer', 51);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.users.length).to.eq(50);
  });

  it('should correctly limit the size of users', async () => {
    const query = `
      query {
        users(limit: 10) {
          email
        }
      }
    `;

    insertUsers('seller', 11);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.users.length).to.eq(10);
  });

  it('should correctly offset the query of users', async () => {
    const query = `
      query {
        users(limit: 10, offset: 8) {
          email
        }
      }
    `;

    insertUsers('buyer', 10);
    const result = await graphql(schema, query, {}, req);
    expect(result.data.users.length).to.eq(2);
  });
});
