import express from "express";

import {
  getDashboardStats
} from "../controllers/dashboardController.js";

import {
  verifyAuth
} from "../middleware/authMiddleware.js";

import {
  verifyAdmin
} from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get(
  "/stats",
  verifyAuth,
  verifyAdmin,
  getDashboardStats
);

export default router;