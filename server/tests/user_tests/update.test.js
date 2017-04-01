import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';

import { validUser } from '../test_models';
import User from '../../application/models/user/model';

describe('Updating a user', () => {
  let user;

  beforeEach(async () => {
    const newUser = new User(validUser);
    user = await newUser.save();
  });

  it('updates it\'s fields', async () => {
    const foundUser = await User.findOne({ email: user.email });
    const updatedUser = Object.assign(foundUser, { email: 'mailz@hoogle.nom' });

    //
    // updatedUser.save(updatedUser, { email: 'mailz@hoogle.nom' })
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error))


    // expect(savedUpdatedUser.email).to.eql('mail@hoogle.nom');
  });
});
