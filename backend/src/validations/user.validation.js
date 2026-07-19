const { body } = require("express-validator");

const changePasswordValidation = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),

  body("newPassword")
    .notEmpty()
    .withMessage("New password is required")
    .isLength({
      min: 8,
      max: 16,
    })
    .withMessage("Password must be between 8 and 16 characters")
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
    .withMessage(
      "Password must contain uppercase letter and special character",
    ),
];

module.exports = {
  changePasswordValidation,
};
