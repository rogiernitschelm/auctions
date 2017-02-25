import {
  SellerAuthorization,
  GuestAuthorization,
  AdminAuthorization,
  BuyerAuthorization
} from '../../authorization';

export default request => {
  switch (request.req.user.usertype) {
    case 'admin':
      return AdminAuthorization(request);
    case 'seller':
      return SellerAuthorization(request);
    case 'buyer':
      return BuyerAuthorization(request);
    default:
      return GuestAuthorization(request);
  }
};
