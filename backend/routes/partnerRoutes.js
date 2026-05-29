import express from "express";

import {
  getPartners,
  updatePartnerStatus,
  createPartnerRequest
} from "../controllers/partnerController.js";

const router = express.Router();

router.get("/", getPartners);

router.post("/", createPartnerRequest);

router.put("/:id/status", updatePartnerStatus);

export default router;