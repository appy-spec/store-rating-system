const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

const {
    signupValidation,
    loginValidation,
    changePasswordValidation
} = require("../validations/auth.validation");

router.post(
    "/signup",
    signupValidation,
    validationMiddleware,
    authController.signup
);

router.post(
    "/login",
    loginValidation,
    validationMiddleware,
    authController.login
);

router.get(
    "/profile",
    authMiddleware,
    authController.profile
);

router.put(
    "/change-password",
    authMiddleware,
    changePasswordValidation,
    validationMiddleware,
    authController.changePassword
);

router.post(
    "/logout",
    authMiddleware,
    authController.logout
);

module.exports = router;