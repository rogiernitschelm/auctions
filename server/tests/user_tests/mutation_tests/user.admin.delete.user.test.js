import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import { validAdmin, validUser } from '../../test_models';
import User from '../../../models/user/model';
import schema from '../../../models/schema';

describe('GraphQL user update mutation', () => {
  let user;

  beforeEach(async () => {
    await User.create(validAdmin);
    user = await User.create(validUser);
  });

  it('deletes a user', async () => {
    const query = `
      mutation {
        adminDeleteUser(
          userId: "${user._id}",
        ) {
          email
        }
      }
    `;

    await graphql(schema, query, {}, { user: validAdmin });
    const admin = await User.find({ usertype: 'admin' });
    const deletedUser = await User.findById(user._id);

    expect(deletedUser).to.eq(null);
    expect(admin.length).to.eq(1);
  });
});
