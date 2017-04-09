import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import { validUser } from '../../test_models';
import User from '../../../models/user/model';
import schema from '../../../models/schema';

describe('GraphQL user update mutation', () => {
  beforeEach(async () => {
    await User.create(validUser);
  });

  it('updates a user', async () => {
    const query = `
      mutation {
        updateUser(
          email: "mail@moogle.nom",
        ) {
          email
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const updatedUser = await User.findOne({ email: 'mail@moogle.nom' });

    expect(updatedUser).to.not.eq(null);
  });

  it('does not update a user when invalid information is provided', async () => {
    const badEmail = 'mail@boogle.';
    const query = `
      mutation {
        updateUser(
          email: "${badEmail}",
        ) {
          email
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser, query });
    const notUpdatedUser = await User.findOne({ email: badEmail });

    expect(notUpdatedUser).to.eq(null);
  });

  it('does not update when a password is provided', async () => {
    const password = 'newpassword1234';

    const query = `
      mutation {
        updateUser(
          email: 'mail@zoogle.nom'
          password:"${password}",
        ) {
          email
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser, query });
    const updatedUser = await User.findOne({ email: 'mail@zoogle.nom' });

    expect(updatedUser).to.eq(null);
  });
});
