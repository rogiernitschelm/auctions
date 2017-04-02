const checkForCallback = callback => {
  if (!callback || typeof callback !== 'function') {
    throw Error(
      `
      This awesome function requires a callback as a second argument.
      You gave me the following value: ${callback}
      `
    );
  }
};

export const recuriveArrayModification = (array, callback) => {
  checkForCallback(callback);

  return array.map(arr => {
    if (Array.isArray(arr)) {
      return recuriveArrayModification(arr, callback);
    }

    return callback(arr);
  });
};

const recursiveObjectModification = (object, callback) => {
  checkForCallback(callback);
  const newObject = object;

  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      recursiveObjectModification(object[key], callback);
    } else {
      newObject[key] = callback(object[key]);
    }
  }
  return newObject;
};
