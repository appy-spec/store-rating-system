const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

const registerUser = async (userData) => {
  const existingUser = await userModel.findUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  userData.password = hashedPassword;
  userData.role = "user";
  await userModel.createUser(userData);
};

const loginUser = async (email, password) => {
  const user = await userModel.findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
    email: user.email,
  });

  return {
    token,

    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

const getProfile = async (id) => {
  return await userModel.findUserById(id);
};

const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await userModel.findUserById(userId);

  if (!user) {
    throw new Error("User Not Found");
  }

  const fullUser = await userModel.findUserByEmail(user.email);
  const isMatch = await bcrypt.compare(currentPassword, fullUser.password);

  if (!isMatch) {
    throw new Error("Current Password Incorrect");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await userModel.updatePassword(userId, hashedPassword);
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  changePassword,
};
