import {
  SellerController,
  GuestController,
  AdminController,
  BuyerController
} from '../controllers';

export default request => {
  const { req, args, requestType } = request;

  if (!req.user) {
    return GuestController({
      req,
      args,
      requestType
    });
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
      return GuestController({ req, args, requestType });
  }
};
