import express from "express";

import {
  getGallery,
  deleteMedia
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getGallery);

router.delete("/:id", deleteMedia);

export default router;