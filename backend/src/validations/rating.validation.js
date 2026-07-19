const { body } = require("express-validator");

const submitRatingValidation = [
  body("store_id").isInt(),

  body("rating").isInt({
    min: 1,
    max: 5,
  }),
];

module.exports = {
  submitRatingValidation,
};
