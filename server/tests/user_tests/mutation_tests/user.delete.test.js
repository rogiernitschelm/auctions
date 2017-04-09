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

  it('deletes a user', async () => {
    const query = `
      mutation {
        deleteUser(
          email: "mail@moogle.nom",
        ) {
          email
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const user = await User.findOne({ email: 'mail@moogle.nom' });

    expect(user).to.eq(null);
  });
});
