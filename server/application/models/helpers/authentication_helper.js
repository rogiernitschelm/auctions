import bcrypt from 'bcrypt';

export const passwordEncryptor = async password => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};