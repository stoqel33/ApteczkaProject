const Validator = require("validator");
const isNotError = require("./isNotError");

module.exports = function validateRegisterInput(data) {
  const errors = {};

  data.email = !isNotError(data.email) ? data.email : "";
  data.password = !isNotError(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email jest nieprawidłowy";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email jest wymagany";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Hasło musi zawierać 6 do 30 znaków";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Hasło jest wymagane";
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
