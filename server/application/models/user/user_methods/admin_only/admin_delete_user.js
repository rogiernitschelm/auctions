import { isAdmin, isNotSelf } from '../../../helpers';
import User from '../../model';

export default ({ req, args }) => {
  isAdmin({ req });
  isNotSelf({ req, args });

  return new Promise((resolve, reject) => {
    User.findByIdAndRemove(args.userId)
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};
