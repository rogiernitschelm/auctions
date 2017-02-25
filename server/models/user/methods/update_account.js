import User from '../';

export default (id, args) => {
  return User.findByIdAndUpdate(id, args);
};
