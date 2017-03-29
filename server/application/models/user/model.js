import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import UserSchema from './schema';
import { passwordEncryptor } from '../helpers/authentication_helper';

UserSchema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = passwordEncryptor(user)
    .then(() => next());
});

UserSchema.pre('update', function (next) {
  const user = this._update.$set;

  user.password = passwordEncryptor(user)
    .then(() => next());
});

UserSchema
  .methods
  .comparePassword = function comparePassword(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
    callback(error, isMatch);
  });
};

export default mongoose.model('user', UserSchema);
