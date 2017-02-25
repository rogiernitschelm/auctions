import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import UserSchema from './schema';

UserSchema.pre('save', function save(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (genSaltError, salt) => {
    if (genSaltError) {
      return next(genSaltError);
    }

    bcrypt.hash(user.password, salt, null, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      user.password = hash;
      next();
    });
  });
});

UserSchema.pre('update', function () {
  this.update({}, { $set: { updatedAt: new Date() } });
});

UserSchema
  .methods
  .comparePassword = function comparePassword(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
    callback(error, isMatch);
  });
};

export default mongoose.model('user', UserSchema);
