import { expect } from 'chai';
import { describe, it } from 'mocha';

import { validUser } from '../test_models';
import User from '../../application/models/user/model';

describe('Changing the password', () => {
  it('changes the password', async () => {
    const newUser = new User(validUser);

    const user = await newUser.save();
    user.comparePassword('abcd1234', (_, isMatch) => {
      expect(isMatch).to.eql(true);
      user.password = 'newpassword1234';
      user.save()
        .then(savedUser => {
          user.comparePassword('newpassword1234', (__, isMatch2) => {
            expect(isMatch2).to.eql(true);
          });
          expect(savedUser.isNew).to.eql(false);
        });
    });
  });
});
