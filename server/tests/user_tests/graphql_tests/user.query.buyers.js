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
        buyers {
          email
          firstname
          lastname
          id
        }
      }
    `;
  });

  it('should return a list of sellers', async () => {
    const user = new User(validSeller);
    const buyer1 = new User(validBuyer);
    const buyer2 = new User(Object.assign(validBuyer, { email: 'abc@mail.com' }));
    const buyer3 = new User(Object.assign(validBuyer, { email: 'ddd@mail.com' }));

    await [buyer1, buyer2, buyer3].forEach(userObject => userObject.save());
    await user.save();

    const parentValue = {};
    const req = { user };
    const result = await graphql(schema, query, parentValue, req);
    const { data } = result;

    expect(data.buyers.length).to.eq(3);
  });
});
