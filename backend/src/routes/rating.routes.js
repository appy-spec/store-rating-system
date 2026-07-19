const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/rating.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");
const { submitRatingValidation } = require("../validations/rating.validation");

router.use(authMiddleware);

router.post(
  "/",
  submitRatingValidation,
  validationMiddleware,
  ratingController.submitRating,
);

router.put(
  "/:storeId",
  submitRatingValidation,
  validationMiddleware,
  ratingController.updateRating,
);

module.exports = router;
