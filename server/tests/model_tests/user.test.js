import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';

import { validUser } from '../test_models';
import User from '../../application/models/user/model';

describe('User', () => {
  let user;

  beforeEach(done => {
    user = new User(validUser);
    user.save()
      .then(() => done());
  });

  describe('changing the password', () => {
    it('changes the password', async () => {
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

  describe('creation', () => {
    it('saves a user', async () => {
      const newUser = new User(validUser);
      const savedUser = await newUser.save();

      expect(savedUser.isNew).to.eql(false);
    });
  });

  describe('deletion', () => {
    it('deletes a user', async () => {
      const removedUser = await user.remove();
      const findRemovedUser = await User.findOne({ email: removedUser.email });

      expect(findRemovedUser).to.eql(null);
    });
  });

  describe('updating', () => {
    it('updates a user', async () => {
      await user.update({ email: 'nail@moogle.com' }, { runValidators: true });
      const updatedUser = await User.findById(user._id);

      expect(updatedUser.email).to.eql('nail@moogle.com');
    });

    it('does not update an invalid email', async () => {
      try {
        await user.update({ email: 'mail@hoogle' }, { runValidators: true });
      } catch (error) {
        expect(error.message).to.eql('Validation failed');
      }

      expect(user.email).to.eql('mail@hoogle.nom');
    });
  });
});
