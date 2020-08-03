const Validator = require('validator');
const isNotError = require('./isNotError');

module.exports = function validateProfileInput(data) {
  const errors = {};

  data.nickname = !isNotError(data.nickname) ? data.nickname : '';

  if (!Validator.isLength(data.nickname, { min: 3, max: 40 })) {
    errors.nickname = 'Nickname must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.nickname)) {
    errors.nickname = 'Profile nickname is required';
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
