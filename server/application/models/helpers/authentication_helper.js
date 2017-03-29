import bcrypt from 'bcrypt';

export const passwordEncryptor = async user => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(String(user.password), salt);

  user.password = hash;

  return user;
};
