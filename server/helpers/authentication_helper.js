import bcrypt from 'bcrypt';

export const passwordEncryptor = async password => {
  let hash;

  try {
    const salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }

  return hash;
};
