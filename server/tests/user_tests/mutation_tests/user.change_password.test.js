import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import { validUser } from '../../test_models';
import User from '../../../models/user/model';
import schema from '../../../models/schema';

describe('GraphQL user update mutation', () => {
  beforeEach(async () => {
    await User.create(validUser);
  });

  it('updates a user\'s password', async () => {
    const user = await User.findOne({ email: validUser.email });
    const query = `
      mutation {
        changePassword (
          password: "${validUser.password}",
          newPassword: "bbbb1234z"
        ) {
          id
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const updatedUser = await User.findById(user._id);

    expect(updatedUser.password).to.not.eq(user.password);
  });

  it('does not update a user\'s password with an invalid password', async () => {
    const user = await User.findOne({ email: validUser.email });
    const query = `
      mutation {
        changePassword (
          password: "${validUser.password}",
          newPassword: "bb123"
        ) {
          id
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const updatedUser = await User.findById(user._id);

    expect(updatedUser.password).to.eq(user.password);
  });

  it('does not update a user\'s password with no password', async () => {
    const user = await User.findOne({ email: validUser.email });
    const query = `
      mutation {
        changePassword (
          password: "${validUser.password}",
          newPassword: ""
        ) {
          id
        }
      }
    `;

    await graphql(schema, query, {}, { user: validUser });
    const updatedUser = await User.findById(user._id);

    expect(updatedUser.password).to.eq(user.password);
  });
});
