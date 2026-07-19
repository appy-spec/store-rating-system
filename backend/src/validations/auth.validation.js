const { body } = require("express-validator");

const signupValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 1, max: 40 })
        .withMessage("Name must be between 1 and 40 characters."),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please enter a valid email."),

    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required.")
        .isLength({ max: 400 })
        .withMessage("Address cannot exceed 400 characters."),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({ min: 8, max: 16 })
        .withMessage("Password must be between 8 and 16 characters.")
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
        .withMessage(
            "Password must contain at least one uppercase letter and one special character."
        )
];

const loginValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Please enter a valid email."),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required.")
];

const changePasswordValidation = [
    body("currentPassword")
        .trim()
        .notEmpty()
        .withMessage("Current password is required."),

    body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("New password is required.")
        .isLength({ min: 8, max: 16 })
        .withMessage("Password must be between 8 and 16 characters.")
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)
        .withMessage(
            "Password must contain at least one uppercase letter and one special character."
        )
];

module.exports = {
    signupValidation,
    loginValidation,
    changePasswordValidation
};