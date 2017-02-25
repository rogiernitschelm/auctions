export const validUser = {
  email: 'amail@hoogle.nom',
  password: 'abcd1234',
  firstName: 'Sponge',
  lastName: 'Rob',
  infix: 'of the',
  usertype: 'seller',
  chamberOfCommerce: 'abcd1234',
  companyName: 'Noogle.bom',
  gender: 'male',
  birthDate: '2010-01-01'
};

export const invalidUser = {
  email: 'amail@hoogle.nom',
  password: ''
};

export const validUserHacked = {
  ...validUser,
  hackerStuff: 'I hackz u1!'
};
