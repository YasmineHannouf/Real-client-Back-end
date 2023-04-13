import express from "express";
import imageHandler from "../middlewares/imageHandler.js";
import {
  addProject,
  deleteProject,
  editProject,
  getProject,
  getProjects,
} from "../controllers/project.js";
const router = express.Router();

// Get all projets route
router.get("/", getProjects);

// Get project route by id
router.get("/id/:id", getProject);

// Add project route
router.post("/", imageHandler, addProject);

// Edit project route
router.patch("/edit/:id", imageHandler, editProject);

// Delete project route
router.delete("/delete/:id", deleteProject);

export default router;
