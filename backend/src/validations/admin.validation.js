const { body } = require("express-validator");

const createUserValidation = [
    body("name")
        .trim()
        .isLength({ min: 20, max: 60 }),

    body("email")
        .trim()
        .isEmail(),

    body("password")
        .isLength({ min: 8, max: 16 })
        .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/),

    body("address")
        .trim()
        .isLength({ max: 400 }),

    body("role")
        .isIn(["admin", "user", "owner"])
];

const createStoreValidation = [
    body("name")
        .trim()
        .notEmpty(),

    body("email")
        .trim()
        .isEmail(),

    body("address")
        .trim()
        .notEmpty(),

    body("owner_id")
        .isInt()
];

module.exports = {
    createUserValidation,
    createStoreValidation
};