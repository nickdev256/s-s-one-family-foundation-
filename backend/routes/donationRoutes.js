import express from "express";

import {
  createDonation,
  capturePayPalOrder
}
from "../controllers/donationController.js";

const router = express.Router();

router.post("/", createDonation);

router.post(
  "/capture",
  capturePayPalOrder
);

export default router;