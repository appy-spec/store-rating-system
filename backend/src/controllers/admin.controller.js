const adminService = require("../services/admin.service");
const { successResponse } = require("../utils/response");

const createUser = async (req, res, next) => {
  try {
    await adminService.createUser(req.body);

    return successResponse(res, "User created successfully.", {}, 201);
  } catch (error) {
    next(error);
  }
};

const createStore = async (req, res, next) => {
  try {
    await adminService.createStore(req.body);

    return successResponse(res, "Store created successfully.", {}, 201);
  } catch (error) {
    next(error);
  }
};

const dashboard = async (req, res, next) => {
  try {
    const stats = await adminService.getDashboardStats();

    return successResponse(res, "Dashboard fetched successfully.", stats);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await adminService.getUsers();

    return successResponse(res, "Users fetched successfully.", users);
  } catch (error) {
    next(error);
  }
};

const getStores = async (req, res, next) => {
  try {
    const stores = await adminService.getStores();

    return successResponse(res, "Stores fetched successfully.", stores);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await adminService.getUserById(req.params.id);

    return successResponse(res, "User fetched successfully.", user);
  } catch (error) {
    next(error);
  }
};

const getStoreById = async (req, res, next) => {
  try{
    const store=await adminService.getStoreById(req.params.id);
    console.log(store);

    return successResponse(res, "Store fetched successfully.", store);
  } catch (error) {
    next(error);
  }
};

const filterUsers = async (req, res, next) => {
  try {
    const users = await adminService.getFilteredUsers(req.query);

    return successResponse(res, "Users fetched successfully.", users);
  } catch (error) {
    next(error);
  }
};

const filterStores = async (req, res, next) => {
  try {
    const stores = await adminService.getFilteredStores(req.query);

    return successResponse(res, "Stores fetched successfully.", stores);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  createStore,
  dashboard,
  getUsers,
  getStores,
  getUserById,
  getStoreById,
  filterUsers,
  filterStores,
};
