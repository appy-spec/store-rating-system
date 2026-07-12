const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { changePasswordValidation } = require("../validations/user.validation");
const validationMiddleware = require("../middlewares/validation.middleware");

router.use(authMiddleware);

router.get( "/stores", userController.getStores);
router.get("/profile", userController.getProfile);
router.put(
  "/password",
  changePasswordValidation,
  validationMiddleware,
  userController.changePassword,
);

module.exports = router;
