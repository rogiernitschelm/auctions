import User from '../../model';
import * as actions from '../../../../helpers/authorization_helper';

const { isSeller } = actions;

export default ({ req, args }) => {
  isSeller({ req });

  const {
    limit = 50,
    sort = { date: -1 },
    offset = 0
  } = args;

  return User.find({ usertype: 'buyer' }).skip(offset).limit(limit).sort(sort);
};
