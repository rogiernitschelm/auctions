import mongoose from 'mongoose';
import UserType from '../../types/user_type';

const User = mongoose.model('user');

export default {
  removeAccount: {
    type: UserType,
    resolve(parentValue, args, { user }) {
      return User.remove({ _id: user._id }).then(() => 'Account removed!')
        .catch(error => error)
        .then(() => user);
    }
  },
};
