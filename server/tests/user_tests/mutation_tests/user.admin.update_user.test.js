import { graphql } from 'graphql';
import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import { validUser, validAdmin } from '../../test_models';
import User from '../../../models/user/model';
import schema from '../../../models/schema';

describe('GraphQL admin user update mutation', () => {
  let user;

  beforeEach(async () => {
    await User.create(validAdmin);
    user = await User.create(validUser);
  });

  it('updates a user\'s information', async () => {
    const query = `
      mutation {
        adminUpdateUser (
          userId: "${user._id}"
          email: "hoogle@mail.com"
          firstname: "Annemarietje"
          lastname: "De Bruin"
        ) {
          id
        }
      }
    `;

    await graphql(schema, query, {}, { user: validAdmin });
    const updatedUser = await User.findById(user._id);

    expect(updatedUser.email).to.eq('hoogle@mail.com');
    expect(updatedUser.firstname).to.eq('Annemarietje');
    expect(updatedUser.lastname).to.eq('De Bruin');
  });
});
