import express from "express";

import {
  getPageContent,
  updatePageContent
} from "../controllers/cmsController.js";

const router = express.Router();

router.get("/:page", getPageContent);

router.put("/:page", updatePageContent);

export default router;