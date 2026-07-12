const bcrypt = require("bcrypt");
const adminModel = require("../models/admin.model");

const createUser = async (userData) => {
  const existingUser = await adminModel.getUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  userData.password = hashedPassword;

  await adminModel.createUser(userData);
};

const createStore = async (storeData) => {
  await adminModel.createStore(storeData);
};

const getDashboardStats = async () => {
  return await adminModel.getDashboardStats();
};

const getUsers = async () => {
  return await adminModel.getUsers();
};

const getStores = async () => {
  return await adminModel.getStores();
};

const getUserById = async (id) => {
  const user = await adminModel.getUserById(id);

  if (!user) {
    throw new Error("User not found.");
  }

  if (user.role === "owner") {
    user.rating = await adminModel.getStoreOwnerRating(id);
  }

  return user;
};

const getFilteredUsers = async (filters) => {
  const {
    name = "",
    email = "",
    address = "",
    role = "",
    sort = "ASC",
  } = filters;

  const order = sort.toUpperCase() === "DESC" ? "DESC" : "ASC";
  return await adminModel.getFilteredUsers(name, email, address, role, order);
};

const getFilteredStores = async (filters) => {

  const { name = "", email = "", address = "", sort = "ASC" } = filters;
  const order = sort.toUpperCase() === "DESC" ? "DESC" : "ASC";
  return await adminModel.getFilteredStores(name, email, address, order);
};

module.exports = {
  createUser,
  createStore,
  getDashboardStats,
  getUsers,
  getStores,
  getUserById,
  getFilteredUsers,
  getFilteredStores,
};
