import User from '../../model';
import * as actions from '../../../../helpers/authorization_helper';

const { isAdmin } = actions;

export default ({ req, args }) => {
  isAdmin({ req });

  console.warn(args)

  const {
    limit = 50,
    sort = { date: -1 },
    offset = 0
  } = args;

  return User.find({ usertype: { $ne: 'admin' } }).skip(offset).limit(limit).sort(sort);
};
