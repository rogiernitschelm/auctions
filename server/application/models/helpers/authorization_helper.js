const noSessionError = Error('You are not logged in.');
const sessionError = Error('You already have an account.');
const noBuyerError = Error('You are not a buyer.');
const noSellerError = Error('You are not a seller.');
const noAdminError = Error('You are not an admin.');

const buyer = ({ usertype }) => usertype === 'buyer';
const seller = ({ usertype }) => usertype === 'seller';
const admin = ({ usertype }) => usertype === 'admin';

export const isLoggedIn = ({ user }) => {
  if (!user) throw noSessionError;

  return true;
};

export const isNotLoggedIn = ({ user }) => {
  if (user) throw sessionError;

  return true;
};

export const isBuyer = ({ req: { user } }) => {
  if (buyer(user)) {
    return true;
  }

  throw noBuyerError;
};

export const isSeller = ({ req: { user } }) => {
  if (seller(user)) {
    return true;
  }

  throw noSellerError;
};

export const isAdmin = ({ req: { user } }) => {
  if (admin(user)) {
    return true;
  }

  throw noAdminError;
};
