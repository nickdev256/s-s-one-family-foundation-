import express from "express";

import {
  createOrder,
  captureOrder
} from "../controllers/paypalController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "PayPal routes working"
  });
});

router.post("/create-order", createOrder);

router.post("/capture-order", captureOrder);

export default router;