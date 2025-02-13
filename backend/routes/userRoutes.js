import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// /api/users/auth
router.post("/auth", authUser);
// REGISTER /api/users
router.post("/", registerUser);
// LOGOUT /api/users/logout
router.post("/logout", logoutUser);
// GET & PUT /api/users/profile
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
