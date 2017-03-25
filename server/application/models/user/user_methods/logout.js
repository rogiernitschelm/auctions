import { isLoggedIn } from '../../helpers/authorization_helper';

export default ({ req }) => {
  isLoggedIn(req);

  req.logout();
};
