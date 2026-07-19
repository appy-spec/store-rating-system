const { body } = require("express-validator");

const createStoreValidation = [
  body("name")
    .notEmpty()
    .withMessage("Store name is required")
    .isLength({
      min: 2,
      max: 120,
    })
    .withMessage("Store name must be between 2 and 120 characters"),

  body("email")
    .notEmpty()
    .withMessage("Store email is required")
    .isEmail()
    .withMessage("Enter a valid email"),

  body("address")
    .notEmpty()
    .withMessage("Address is required")
    .isLength({
      max: 400,
    })
    .withMessage("Address cannot exceed 400 characters"),

  body("owner_id")
    .notEmpty()
    .withMessage("Owner id is required")
    .isInt()
    .withMessage("Owner id must be a number"),
];

module.exports = {
  createStoreValidation,
};
