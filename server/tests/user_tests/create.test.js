import { expect } from 'chai';
import { describe, it } from 'mocha';

import { validUser } from '../test_models';
import User from '../../application/models/user/model';

describe('Creating a user', () => {
  it('saves a user', async () => {
    const user = new User(validUser);
    const savedUser = await user.save();

    expect(savedUser.isNew).to.eql(false);
  });
});
