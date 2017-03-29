import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import UserSchema from './schema';
import { passwordEncryptor } from '../helpers/authentication_helper';

UserSchema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  passwordEncryptor(user)
    .then(() => next());
});

UserSchema.pre('update', function (next) {
  const user = this._update.$set;

  if (this._update.$set.password) {
    console.warn(
      `
      WARNING: Do not use update-middleware for updating secure
      information. Pre-save validations are not ran on these mutations.
      Please use find() and then save().

      The password you have provided has still been securely encrypted. This
      warning is merely to encourage changing methods.
      `
    );

    passwordEncryptor(user)
      .then(() => next());
  }
});

UserSchema
  .methods
  .comparePassword = function comparePassword(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
    callback(error, isMatch);
  });
};

export default mongoose.model('user', UserSchema);
