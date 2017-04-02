import validationSchema from 'customization/validations';
const { user } = validationSchema;

const checkMinimalLength = (length, value) => value.length > length;
const checkMaximumLength = (length, value) => value.length < length;

const validateField = (key, value, fieldSchema) => {
  if (key === 'repeatpassword') { return; }

  if (fieldSchema.min && !checkMinimalLength(fieldSchema.min, value)) {
    return 'Voldoet niet aan de minimale lengte';
  }

  if (fieldSchema.max && !checkMaximumLength(fieldSchema.max, value)) {
    return 'Voldoet niet aan de maximale lengte';
  }

  if (fieldSchema.required && !value) {
    return `${key} - Dit veld is vereist.`;
  }

  if (key === 'email') {
    const regex = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

    if (!regex.test(value)) {
      return 'Dit is geen valide e-mailadres';
    }
  }

  return;
};

export const userValidator = values => {
  const errors = {};

  for (const key of Object.keys(values)) {
    const error = validateField(key, values[key], user[key]);

    if (error) {
      errors[key] = error;
    }
  }

  if (values.password !== values.repeatedPassword) {
    errors.repeatedPassword = 'De wachtwoorden komen niet overeen.';
  }

  return errors;
};
