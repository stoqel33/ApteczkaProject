const Validator = require("validator");
const isNotError = require("./isNotError");

module.exports = function validateProfileInput(data) {
  const errors = {};

  data.nickname = !isNotError(data.nickname) ? data.nickname : "";

  if (!Validator.isLength(data.nickname, { min: 3, max: 40 })) {
    errors.nickname = "Nazwa musi zawierać 3 do 50 znaków";
  }
  if (Validator.isEmpty(data.nickname)) {
    errors.nickname = "Nazwa użytkownika jest wymagana";
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
