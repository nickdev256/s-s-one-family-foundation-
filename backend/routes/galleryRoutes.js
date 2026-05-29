import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  getGallery,
  uploadMedia,
  deleteMedia,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getGallery);

router.post(
  "/upload",
  upload.single("file"),
  uploadMedia
);

router.delete(
  "/:id",
  deleteMedia
);

export default router;