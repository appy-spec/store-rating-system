const ownerModel = require("../models/owner.model");

const getDashboard = async (ownerId) => {
  const store = await ownerModel.getOwnerStore(ownerId);

  if (!store) {
    throw new Error("Store not found.");
  }

  const averageRating = await ownerModel.getAverageRating(ownerId);
  const users = await ownerModel.getUsersWhoRated(ownerId);

  return {
    store,
    averageRating,
    users,
  };
};

const getRatings = async (ownerId) => {
  return await ownerModel.getUsersWhoRated(ownerId);
};

module.exports = {
  getDashboard,
  getRatings
};
