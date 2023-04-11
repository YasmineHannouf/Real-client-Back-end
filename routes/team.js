import express from "express";
import imageHandler from "../middlewares/imageHandler.js";
import {
  addTeamMember,
  deleteTeamMember,
  editTeamMember,
  getMember,
  getMembers,
} from "../controllers/team.js";
const router = express.Router();

// Get all members route
router.get("/", getMembers);

// Get member route by id
router.get("/id/:id", getMember);

// Add team member route
router.post("/", imageHandler, addTeamMember);

// Edit team member route
router.patch("/edit/:id", imageHandler, editTeamMember);

// Delete team member route
router.delete("/delete/:id", deleteTeamMember);

export default router;
