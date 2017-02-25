import {
  SellerAuthorization,
  GuestAuthorization,
  AdminAuthorization,
  BuyerAuthorization
} from '../../authorization';

export default request => {
  const { req, args, requestType } = request;

  if (!req.user) {
    return GuestAuthorization({
      req,
      args,
      requestType
    });
  }

  if (requestType === 'logout') {
    return req.logout();
  }

  switch (req.user.usertype) {
    case 'admin':
      return AdminAuthorization({ req, args, requestType });
    case 'seller':
      return SellerAuthorization({ req, args, requestType });
    case 'buyer':
      return BuyerAuthorization({ req, args, requestType });
    default:
      return GuestAuthorization({ req, args, requestType });
  }
};
