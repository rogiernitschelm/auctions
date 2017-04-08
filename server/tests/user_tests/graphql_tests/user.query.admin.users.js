import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import schema from '../../../models/schema';
import { validAdmin, validUser, validSeller, validBuyer } from '../../test_models';
import User from '../../../models/user/model';

describe('GraphQL users', () => {
  let query;

  beforeEach(() => {
    query = `
      query {
        users {
          email
          firstname
          lastname
          id
        }
      }
    `;
  });

  it('should return a list of users', async () => {
    const admin = new User(validAdmin);

    const validUser1 = new User(validUser);
    const validUser2 = new User(Object.assign(validUser, { email: 'abc@mail.com' }));
    const validUser3 = new User(Object.assign(validUser, { email: 'ddd@mail.com' }));

    await [validUser1, validUser2, validUser3].forEach(userObject => userObject.save());
    await admin.save();

    const req = { user: admin };
    const result = await graphql(schema, query, {}, req);
    const { data } = result;

    expect(data.users.length).to.eq(4);
  });

  it('should not return a list of users if the current user is a seller', async () => {
    const seller = new User(validSeller);

    const validUser1 = new User(validUser);
    const validUser2 = new User(Object.assign(validUser, { email: 'abc@mail.com' }));
    const validUser3 = new User(Object.assign(validUser, { email: 'ddd@mail.com' }));

    await [validUser1, validUser2, validUser3].forEach(userObject => userObject.save());
    await seller.save();

    const req = { user: seller };
    const result = await graphql(schema, query, {}, req);
    const { data } = result;

    expect(data.users).to.eq(null);
  });

  it('should not return a list of users if the current user is a seller', async () => {
    const buyer = new User(validBuyer);

    const validUser1 = new User(validUser);
    const validUser2 = new User(Object.assign(validUser, { email: 'abc@mail.com' }));
    const validUser3 = new User(Object.assign(validUser, { email: 'ddd@mail.com' }));

    await [validUser1, validUser2, validUser3].forEach(userObject => userObject.save());
    await buyer.save();

    const req = { user: buyer };
    const result = await graphql(schema, query, {}, req);
    const { data } = result;

    expect(data.users).to.eq(null);
  });
});
