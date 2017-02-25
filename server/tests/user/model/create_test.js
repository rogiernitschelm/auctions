import assert from 'assert';
import { validUser, invalidUser, validUserHacked } from '../../seeds/user_seeds';
import { User } from '../../../models';

describe('Creating a user', () => {
  it('saves a user.', done => {
    const user = new User(validUser);

    user.save()
      .then(savedUser => {
        assert(!savedUser.isNew);
        done();
      });
  });

  it('validates the presence of a password.', () => {
    const user = new User(invalidUser);
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.password;

    assert(message === 'Path `password` is required.');
  });

  it('sanatizes excessive fields', done => {
    const user = new User(validUserHacked);

    user.save()
      .then(savedUser => {
        assert(savedUser.hackerStuff === undefined);
        done();
      });
  });
});
