import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validBuyer, validSeller } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL sellers', () => {
  let query;

  beforeEach(() => {
    query = `
      query {
        sellers {
          email
          firstname
          lastname
          id
        }
      }
    `;
  });

  it('should return a list of sellers', async () => {
    const user = new User(validBuyer);
    const seller1 = new User(validSeller);
    const seller2 = new User(Object.assign(validSeller, { email: 'abc@mail.com' }));
    const seller3 = new User(Object.assign(validSeller, { email: 'ddd@mail.com' }));

    await [seller1, seller2, seller3].forEach(userObject => userObject.save());
    await user.save();

    const parentValue = {};
    const req = { user };
    const result = await graphql(schema, query, parentValue, req);
    const { data } = result;

    expect(data.sellers.length).to.eq(3);
  });
});
