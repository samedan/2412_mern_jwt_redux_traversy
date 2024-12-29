import asyncHandler from "express-async-handler";

// @desc   Auth user/set token
// @route  POST /api/users/auth
//@ access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
  // error example
  // res.status(401);
  // throw new Error("Smth went wrong");
});

// @desc   Register new user
// @route  POST /api/users
//@ access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

// @desc   Logout user
// @route  POST /api/users/logout
//@ access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

// @desc   Get user Profile
// @route  GET /api/users/profile
//@ access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc   UPDATE user Profile
// @route  PUT /api/users/profile
//@ access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
