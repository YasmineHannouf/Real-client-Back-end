import express from "express"
const router = express.Router();
import { getAboutusById, createAboutus, updateAboutus } from "../controllers/aboutus.js"


// Get a specific aboutus by ID
router.get("/:id", getAboutusById);


// Create a new aboutus
router.post("/",createAboutus);

// Update an existing aboutus by ID
router.patch("/:id", updateAboutus);



export default router;
