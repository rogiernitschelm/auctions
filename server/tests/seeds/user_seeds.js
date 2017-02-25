export const validUser = {
  email: 'amail@hoogle.nom',
  password: 'abcd1234'
};

export const invalidUser = {
  email: 'amail@hoogle.nom',
  password: ''
};

export const validUserHacked = {
  ...validUser,
  hackerStuff: 'I hackz u1!'
};
