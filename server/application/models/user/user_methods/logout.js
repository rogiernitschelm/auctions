import { isLoggedIn } from '../../helpers';

export default ({ req }) => {
  isLoggedIn(req);

  req.logout();
};
