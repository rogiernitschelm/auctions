export default ({ req }) => {
  if (!req.user) {
    throw new Error('You are not logged in.');
  }

  return req.logout();
};
