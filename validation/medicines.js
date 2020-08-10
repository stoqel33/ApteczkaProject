const Validator = require("validator");
const isNotError = require("./isNotError");

module.exports = function validateMedicinesInput(data) {
  const errors = {};

  data.name = !isNotError(data.name) ? data.name : "";
  data.amount = !isNotError(data.amount) ? data.amount : "";
  data.date = !isNotError(data.date) ? data.date : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Nazwa jest wymagana";
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = "Data ważności jest wymagana";
  }

  return {
    errors,
    isValid: isNotError(errors),
  };
};
