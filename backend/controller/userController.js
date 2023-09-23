import asyncHandler from "../middleware//asyncHandler.js";
import User from "../models/userModel.js";

/**
 * @desc Auth user & get token (login)
 * @route POST /api/users/login
 * @access Public
 */
export const authUser = asyncHandler(async (req, res) => {
  return res.send("Auth User");
});

/**
 * @desc Register user
 * @route POST /api/users
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  return res.send("Register User");
});

/**
 * @desc Logout user / clear cookie
 * @route POST /api/users/logout
 * @access Private
 */
export const logoutUser = asyncHandler(async (req, res) => {
  return res.send("Logout User");
});

/**
 * @desc Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  return res.send("User Profile");
});

/**
 * @desc Update user profile
 * @route PUT /api/users/profile
 * @access Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  return res.send("Update User profile");
});


// -------------------ADMIN--------------------------
/**
 * @desc Get users
 * @route GET /api/users
 * @access Private/Admin
 */
export const getUsers = asyncHandler(async (req, res) => {
  return res.send("Get Users");
});


/**
 * @desc Get user by ID
 * @route GET /api/users/:id
 * @access Private/Admin
 */
export const getUserByID = asyncHandler(async (req, res) => {
  return res.send("Get User by id");
});

/**
 * @desc Delete user
 * @route DELETE /api/users/:id
 * @access Private/Admin
 */
export const deleteUser = asyncHandler(async (req, res) => {
  return res.send("Delete User");
});

/**
 * @desc Update user
 * @route PUT /api/users/:id
 * @access Private/Admin
 */
export const updateUser = asyncHandler(async (req, res) => {
  return res.send("Update User");
});