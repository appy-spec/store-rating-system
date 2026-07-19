const ratingService = require("../services/rating.service");
const { successResponse } = require("../utils/response");

const submitRating = async (req, res, next) => {
  try {
    const message = await ratingService.submitRating(
      req.user.id,
      req.body.store_id,
      req.body.rating,
    );

    return successResponse(res, message);
  } catch (error) {
    next(error);
  }
};

const updateRating = async ( req, res, next ) => {
  try {

    const message = await ratingService.updateRating(
      req.user.id,
      req.params.storeId,
      req.body.rating,
    );

    return successResponse(
      res,
      message,
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitRating,
  updateRating
};
