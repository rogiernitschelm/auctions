import { expect } from 'chai';
import { describe, it } from 'mocha';

import { validUser } from '../test_helper';
import User from '../../application/models/user/model';

describe('Deleting a user', () => {
  it('deletes a user', async () => {
    const newUser = new User(validUser);

    const user = await newUser.save();
    const removedUser = await user.remove();
    const findRemovedUser = await User.findOne({ email: removedUser.email });

    expect(findRemovedUser).to.eql(null);
  });
});
