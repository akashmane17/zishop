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

const router = express.Router();

router.post("/login", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile); 

// ADMIN ROUTES
router.get("/", getUsers);
router.get("/:id", getUserByID);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
