export const capitalize = value => {
  const firstCharacter = value.split('')[0].toUpperCase();
  const rest = value.slice(1);

  return `${firstCharacter}${rest}`;
};
