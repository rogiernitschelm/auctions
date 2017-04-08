import User from '../models/user/model';

export const validUser = {
  coc: '123456aa',
  company: 'Hoogle.nom',
  email: 'mail@hoogle.nom',
  firstname: 'Kees',
  lastname: 'Boer',
  password: 'abcd1234',
  usertype: 'seller',
};

export const validSeller = {
  coc: '123456aa',
  company: 'Hoogle.nom',
  email: 'mail@hoogle.nom',
  firstname: 'Annemarie',
  lastname: 'en friends',
  password: 'abcd1234',
  usertype: 'seller',
};

export const validAdmin = {
  coc: '123456aa',
  company: 'Noogle.bom',
  email: 'mail@hoogle.nom',
  firstname: 'Hermien',
  lastname: 'De Graaf',
  password: 'abcd1234',
  usertype: 'admin',
};

export const validBuyer = {
  coc: '123456aa',
  company: 'Boogle.dom',
  email: 'mail@hoogle.nom',
  firstname: 'Sjaak',
  lastname: 'Henksma',
  password: 'abcd1234',
  usertype: 'buyer',
};

export const userTypes = {
  admin: validAdmin,
  buyer: validBuyer,
  seller: validSeller,
  user: validUser,
};

const randomNumber = max => Math.floor(Math.random() * max) + 1;

export const emailGenerator = number => {
  const arrayOfEmails = [];

  for (let i = 0; i < number; i++) {
    const randomEmail = `mail${randomNumber(99999)}@example.com`;
    if (!arrayOfEmails.includes(randomEmail)) {
      arrayOfEmails.push(randomEmail);
    } else {
      i--;
    }
  }

  return arrayOfEmails;
};

export const insertUsers = async (ofType = 'user', amount = 50) => {
  const users = emailGenerator(amount).map(email => {
    return {
      ...userTypes[ofType],
      email
    };
  });

  const insertedUsers = await User.collection.insert(users);

  return insertedUsers;
};
