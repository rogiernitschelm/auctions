import User from '../';

export default (id, args) => User.findByIdAndUpdate(id, args);
