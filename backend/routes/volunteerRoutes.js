import express from "express";

import {
  getVolunteers,
  updateVolunteerStatus,
  createVolunteer
} from "../controllers/volunteerController.js";

const router = express.Router();

router.get("/", getVolunteers);

router.post("/", createVolunteer);

router.put("/:id/status", updateVolunteerStatus);

export default router;