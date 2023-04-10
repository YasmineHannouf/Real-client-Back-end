import express from "express";
import imageHandler from "../middlewares/imageHandler";
import {
  addTeamMember,
  deleteTeamMember,
  editTeamMember,
  getMember,
  getMembers,
} from "../controllers/team";
const router = express.Router();

router.get("/", getMembers);
router.get("/id/:id", getMember);
router.post("/", imageHandler, addTeamMember);
router.patch("/id/:id", editTeamMember);
router.delete("/id/:id", deleteTeamMember);

export default router;
