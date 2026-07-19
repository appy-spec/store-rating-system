const ratingModel = require("../models/rating.model");
const storeModel = require("../models/store.model");

const submitRating = async (userId, storeId, rating) => {
  const store = await storeModel.getStoreById(storeId);

  if (!store) {
    throw new Error("Store not found.");
  }

  const existingRating = await ratingModel.getRating(userId, storeId);

  if (existingRating) {
    await ratingModel.updateRating(userId, storeId, rating);

    return "Rating updated successfully.";
  }

  await ratingModel.createRating(userId, storeId, rating);

  return "Rating submitted successfully.";
};

const updateRating = async (userId, storeId, rating) => {
  const existing = await ratingModel.getRating(
    userId,
    storeId,
  );

  if (!existing) {
    throw new Error("Rating not found.");
  }

  await ratingModel.updateRating(
    userId,
    storeId,
    rating,
  );

  return "Rating updated successfully.";
};

module.exports = {
  submitRating,
  updateRating
};
