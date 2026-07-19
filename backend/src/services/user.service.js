const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const storeModel = require("../models/store.model");

const getProfile = async (userId) => {
  const user = await userModel.findUserById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  delete user.password;

  return user;
};

const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await userModel.findUserWithPasswordById(userId);
  //const user = await userModel.findUserById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    user.password,
  );

  if (!isPasswordCorrect) {
    throw new Error("Current password is incorrect.");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await userModel.updatePassword(userId, hashedPassword);

  return "Password updated successfully.";
};

const getStores = async (userId, query) => {
  const { name, address, sort } = query;

  if (name || address || sort) {
    return await storeModel.searchStores(
      userId,
      name,
      address,
      sort,
    );
  }

  return await storeModel.getAllStores(userId);
};

module.exports = {
  getProfile,
  changePassword,
  getStores,
};
