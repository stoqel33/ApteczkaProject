const Validator = require('validator');
const isNotError = require('./isNotError');

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.email = !isNotError(data.email) ? data.email : '';
  data.password = !isNotError(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
