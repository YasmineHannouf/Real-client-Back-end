import express from "express";
import  { singleImage } from "../middlewares/imageHandler.js";
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
router.post("/", singleImage, addProject);

// Edit project route
router.patch("/edit/:id", singleImage, editProject);

// Delete project route
router.delete("/delete/:id", deleteProject);

export default router;
