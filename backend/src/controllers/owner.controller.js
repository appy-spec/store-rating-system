const ownerService = require("../services/owner.service");
const { successResponse } = require("../utils/response");

const dashboard = async (req, res, next) => {
  try {
    const data = await ownerService.getDashboard(req.user.id);
    return successResponse(res, "Owner dashboard fetched successfully.", data);
  } catch (error) {
    next(error);
  }
};

const getRatings = async ( req, res, next ) => {
  try {
    const data = await ownerService.getRatings(req.user.id);
    return successResponse(
      res,
      "Ratings fetched successfully.",
      data,
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  dashboard,
  getRatings
};
