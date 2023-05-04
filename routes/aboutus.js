import express from "express";
const router = express.Router();
import { getAbout, updateAboutus } from "../controllers/aboutus.js";
import { singleImage } from "../middlewares/imageHandler.js";

// Get a specific aboutus by ID
router.get("/", getAbout);

// Update an existing aboutus by ID
router.patch("/edit/:id", singleImage, updateAboutus);

export default router;
