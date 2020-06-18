const Validator = require('validator');
const isNotError = require('./isNotError');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  data.name = !isNotError(data.name) ? data.name : '';
  data.email = !isNotError(data.email) ? data.email : '';
  data.password = !isNotError(data.password) ? data.password : '';

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
