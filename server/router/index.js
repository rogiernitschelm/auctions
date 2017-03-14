import {
  SellerController,
  GuestController,
  AdminController,
  BuyerController
} from '../controllers';

const Router = ({ req, args, requestType }) => {

  if (!req.user) {
    return GuestController({ req, args, requestType });
  }

  if (requestType === 'logoutMutation') {
    return req.logout();
  }

  switch (req.user.usertype) {
    case 'admin':
      return AdminController({ req, args, requestType });

    case 'seller':
      return SellerController({ req, args, requestType });

    case 'buyer':
      return BuyerController({ req, args, requestType });

    default:
      throw new Error(`You are unable to access the required controller.
      Your usertype may not be correctly defined.`);
  }
};

export default Router;
