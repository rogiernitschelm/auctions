import User from '../../model';
import * as actions from '../../../helpers/authorization_helper';

const { isAdmin } = actions;

export default ({ req }) => {
  isAdmin({ req });

  return User.find();
};
