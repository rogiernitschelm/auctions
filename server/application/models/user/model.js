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
      WARNING: You are not supposed to use update-middleware for updating secure
      information. Please use find() and then save().
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
