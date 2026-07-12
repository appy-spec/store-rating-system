const storeModel = require("../models/store.model");

const getAllStores = async (userId) => {
  return await storeModel.getAllStores(userId);
};

const searchStores = async (userId, filters) => {
  const { name = "", address = "", sort = "ASC" } = filters;

  return await storeModel.searchStores(userId, name, address, sort);
};

const getStoreById = async (userId, storeId) => {
  const store = await storeModel.getStoreById(storeId);

  if (!store) {
    throw new Error("Store not found.");
  }

  const rating = await storeModel.getUserRating(userId, storeId);

  store.userRating = rating ? rating.rating : null;

  return store;
};

module.exports = {
  getAllStores,
  searchStores,
  getStoreById,
};
