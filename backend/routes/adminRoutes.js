import express from "express";

import {
  verifyAuth,
  verifyAdmin
}
from "../middleware/auth.js";

const router =
express.Router();

router.get(
  "/dashboard",
  verifyAuth,
  verifyAdmin,
  async (
    req,
    res
  ) => {

    return res.json({
      success: true,
      user: req.user,
      admin: req.admin
    });

  }
);

router.get(
  "/settings",
  verifyAuth,
  verifyAdmin,
  async (
    req,
    res
  ) => {

    return res.json({
      success: true,
      message:
        "Admin settings loaded"
    });

  }
);

router.get(
  "/reports",
  verifyAuth,
  verifyAdmin,
  async (
    req,
    res
  ) => {

    return res.json({
      success: true,
      message:
        "Reports loaded"
    });

  }
);

export default router;