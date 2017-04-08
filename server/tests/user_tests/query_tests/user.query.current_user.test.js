import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validUser } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL currentUser', () => {
  let query;

  beforeEach(() => {
    query = `
      query {
        currentUser {
          email
          firstname
          lastname
          id
        }
      }
    `;
  });

  it('should return null when the user is not logged in', async () => {
    const parentValue = {};
    const req = {};
    const result = await graphql(schema, query, parentValue, req);
    const { data } = result;

    expect(data.currentUser).to.eq(null);
  });

  it('should return the current user when logged in', async () => {
    const user = new User(validUser);
    await user.save();

    const parentValue = {};
    const req = { user };
    const result = await graphql(schema, query, parentValue, req);
    const { data } = result;

    expect(data.currentUser.email).to.eq(validUser.email);
    expect(data.currentUser.firstname).to.eq(validUser.firstname);
  });
});
