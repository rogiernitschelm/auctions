import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import UserSchema from './schema';
import { passwordEncryptor } from '../../helpers/authentication_helper';

UserSchema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  passwordEncryptor(user.password)
    .then(result => {
      user.password = result;

      return next();
    });
});

UserSchema.methods.comparePassword =
  function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (error, isMatch) =>
      cb(error, isMatch));
};

export default mongoose.model('user', UserSchema);
