const Validator = require("validator");
const isEmpty = require("./is-emtpy");

module.exports = function validateAddCategory(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
