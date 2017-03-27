import assert from 'assert';
import { describe, beforeEach, it } from 'mocha';
import { deleteUser } from '../user_methods';
import User from '../model';
import { validUser } from './test_helper';

describe('User', () => {
  let user;

  beforeEach(done => {
    user = new User(validUser);
    user.save()
      .then(() => done());
  });

  it('deletes a user with model instance remove.', done => {
    const email = user.email;
    const request = { req: { user } };

    deleteUser(request)
      .then(() => User.findOne({ email }))
      .then(result => {
        assert(result === null);
        return done();
      });
  });
});
