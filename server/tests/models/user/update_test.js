import assert from 'assert';
import { validUser } from './user_seeds';
import { User } from '../../../models';

describe('Updating a user', () => {
  it('updates the e-mail of the user', done => {
    const email = 'mail@noogle.hom';
    User.create(validUser)
    .then(createdUser => {
      createdUser.update({ email })
        .then(() => User.find({ email }))
        .then(users => {
          assert(users[0].email === email);
          done();
        });
    });
  });
});
