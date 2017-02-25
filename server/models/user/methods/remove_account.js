import User from '../';

export default (id, user) => {
  return User.findById(id)
    .then(foundUser => {
      foundUser.remove();
    })
    .then(() => user);
};
