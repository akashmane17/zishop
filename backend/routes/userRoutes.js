import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controller/userController.js";
import {protect, admin} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", protect, logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile); 

// ADMIN ROUTES
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUserByID);
router.delete("/:id", protect, admin, deleteUser);
router.put("/:id", protect, admin, updateUser);

export default router;
