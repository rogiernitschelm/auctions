import { describe, before, it } from 'mocha';
import { expect } from 'chai';
import { deleteUser } from '../user_methods';
import User from '../model';
import { validUser } from './test_helper';

describe('User', () => {
  let user;

  before(done => {
    user = new User(validUser);
    user.save()
      .then(() => done());
  });

  it('deletes a user with the deleteUser-method.', done => {
    const email = user.email;
    const request = { req: { user } };

    deleteUser(request)
      .then(() => User.findOne({ email }))
      .then(result => {
        expect(result).to.eql(null);
        
        return done();
      });
  });
});
