import express from "express";
const router = express.Router();
import {
  getAboutusById,
  updateAboutus,
} from "../controllers/aboutus.js";
import imageHandler from "../middlewares/imageHandler.js";

// Get a specific aboutus by ID
router.get("/:id", getAboutusById);

// Update an existing aboutus by ID
router.patch("/edit/:id", imageHandler, updateAboutus);

export default router;
