import express from "express";
import imageHandler from "../middlewares/imageHandler.js";
import {} from "../controllers/team.js";
import {
  addTraining,
  deleteTraining,
  editTraining,
  getTraining,
  getTrainings,
} from "../controllers/training.js";
const router = express.Router();

// Get all trainings route
router.get("/", getTrainings);

// Get training route by id
router.get("/id/:id", getTraining);

// Add team training route
router.post("/", imageHandler, addTraining);

// Edit team training route
router.patch("/edit/:id", imageHandler, editTraining);

// Delete team training route
router.delete("/delete/:id", deleteTraining);

export default router;
