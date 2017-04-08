import User from '../../model';
import * as actions from '../../../../helpers/authorization_helper';

const { isBuyer } = actions;

export default ({ req, args }) => {
  isBuyer({ req });

  const {
    limit = 50,
    sort = { date: -1 },
    offset = 0
  } = args;

  return User.find({ usertype: 'seller' }).skip(offset).limit(limit).sort(sort);
};
