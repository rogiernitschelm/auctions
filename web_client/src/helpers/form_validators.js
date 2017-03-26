import validationSchema from 'customization/validations';

const checkMinimalLength = (length, value) => {
  if (value.length < length) {
    return false;
  }

  return true;
};

const checkMaximumLength = (length, value) => {
  if (value.length > length) {
    return false;
  }

  return true;
};

const validateField = (key, value, fieldSchema) => {
  const errors = [];

  if (fieldSchema.min) {
    if (!checkMinimalLength(fieldSchema.min, value)) {
      errors.push(Error('Voldoet niet aan de minimale lengte'));
    }
  }

  if (fieldSchema.max) {
    if (!checkMaximumLength(fieldSchema.max, value)) {
      errors.push(Error('Voldoet niet aan de maximale lengte'));
    }
  }

  return errors;
};

const validateRepeatedPassword = (password, repeatPassword) => {
  if (password === repeatPassword) {
    return true;
  }

  return false;
};

export const userValidator = values => {
  const userModel = validationSchema.user;
  const fieldValues = Object.keys(values);
  const errors = {};

  for (const key of fieldValues) {
    const fieldSchema = userModel[key];

    if (key === 'repeatpassword') {
      const passwordMatch = validateRepeatedPassword(values.password, values[key]);
      if (!passwordMatch) {
        errors.repeatPassword = Error('Wachtwoord komt niet overeen.').message;
      }
    }

    if (fieldSchema) {
      const errorsPresent = validateField(key, values[key], fieldSchema);
      if (errorsPresent) {
        errors[key] = errorsPresent.map(error => error.message);
      }
    }
  }

  return errors;
};
