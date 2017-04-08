import User from '../models/user/model';

export const validUser = {
  email: 'mail@hoogle.nom',
  firstname: 'Kees',
  lastname: 'Boer',
  usertype: 'seller',
  password: 'abcd1234',
  coc: '123456aa',
  company: 'Hoogle.nom'
};

export const validSeller = {
  email: 'mail@hoogle.nom',
  firstname: 'Annemarie',
  lastname: 'en friends',
  usertype: 'seller',
  password: 'abcd1234',
  coc: '123456aa',
  company: 'Hoogle.nom'
};

export const validAdmin = {
  email: 'mail@hoogle.nom',
  firstname: 'Hermien',
  lastname: 'De Graaf',
  usertype: 'admin',
  password: 'abcd1234',
  coc: '123456aa',
  company: 'Noogle.bom'
};

export const validBuyer = {
  email: 'mail@hoogle.nom',
  firstname: 'Sjaak',
  lastname: 'Henksma',
  usertype: 'buyer',
  password: 'abcd1234',
  coc: '123456aa',
  company: 'Boogle.dom'
};

export const userTypes = {
  buyer: validBuyer,
  seller: validSeller
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

export const insertUsers = async (ofType, amount = 50) => {
  const users = emailGenerator(amount).map(email => {
    return {
      ...userTypes[ofType],
      email
    };
  });

  const insertedUsers = await User.collection.insert(users);

  return insertedUsers;
};
