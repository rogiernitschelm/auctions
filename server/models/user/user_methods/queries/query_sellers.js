import User from '../../model';
import * as actions from '../../../../helpers/authorization_helper';

const { isBuyer } = actions;

export default ({ req, args }) => {
  isBuyer({ req });

  return User.find({ usertype: 'seller' });
};
