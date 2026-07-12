const userService = require("../services/user.service");
const { successResponse } = require("../utils/response");

const getProfile = async (req, res, next) => {
  try {
    const user = await userService.getProfile(req.user.id);

    return successResponse(res, "Profile fetched successfully.", user);
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const message = await userService.changePassword(
      req.user.id,
      req.body.currentPassword,
      req.body.newPassword,
    );

    return successResponse(res, message);
  } catch (error) {
    next(error);
  }
};

const getStores = async (req,res,next) => {
  try {
    const stores = await userService.getStores(
      req.user.id,
      req.query,
    );

    return successResponse(
      res,
      "Stores fetched successfully.",
      stores,
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  changePassword,
  getStores,
};
