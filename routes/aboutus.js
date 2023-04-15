import express from "express"
const router = express.Router();
import { getAboutusById, createAboutus, updateAboutus } from "../controllers/aboutus.js"
import imageHandler  from "../middlewares/imageHandler.js";


// Get a specific aboutus by ID
router.get("/:id", getAboutusById);


// Create a new aboutus
router.post("/",imageHandler,createAboutus);

// Update an existing aboutus by ID
router.patch("/:id", updateAboutus);



export default router;
