import User from '../model';
import * as actions from '../../helpers/authorization_helper';

const { isSeller } = actions;

export default ({ req, args }) => {
  isSeller({ req });

  return User.find({ usertype: 'buyer' });
};
