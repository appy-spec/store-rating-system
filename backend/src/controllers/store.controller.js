const storeService = require("../services/store.service");
const { successResponse } = require("../utils/response");

const getAllStores = async (req, res, next) => {
  try {
    const stores = await storeService.getAllStores(req.user.id);

    return successResponse(res, "Stores fetched successfully.", stores);
  } catch (error) {
    next(error);
  }
};

const searchStores = async (req, res, next) => {
  try {
    const stores = await storeService.searchStores(req.user.id, req.query);

    return successResponse(res, "Stores fetched successfully.", stores);
  } catch (error) {
    next(error);
  }
};

const getStoreById = async (req, res, next) => {
  try {
    const store = await storeService.getStoreById(req.user.id, req.params.id);

    return successResponse(res, "Store fetched successfully.", store);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStores,
  searchStores,
  getStoreById,
};
