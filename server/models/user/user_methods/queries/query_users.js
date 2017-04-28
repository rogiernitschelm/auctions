import User from '../../model';
import * as actions from '../../../../helpers/authorization_helper';

const { isAdmin } = actions;

export default ({ req, args }) => {
  isAdmin({ req });

  const {
    limit = 50,
    sort = { date: -1 },
    offset = 0,
    searchTerm = ''
  } = args;

  const regex = new RegExp(searchTerm, 'i');
  const result = User
    .find({
      usertype: { $ne: 'admin' },
      $or: [
        { email: regex || '' },
        { firstname: regex || '' },
        { lastname: regex || '' }
      ]
    })
    .skip(offset)
    .limit(limit)
    .sort(sort);

  return result;
};
