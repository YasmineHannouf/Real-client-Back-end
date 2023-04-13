import express from "express";
import imageHandler from "../middlewares/imageHandler.js";
import {
  addService,
  deleteService,
  editService,
  getServices,
  getservice,
} from "../controllers/service.js";
const router = express.Router();

// Get all services route
router.get("/", getServices);

// Get service route by id
router.get("/id/:id", getservice);

// Add service route
router.post("/", imageHandler, addService);

// Edit service route
router.patch("/edit/:id", imageHandler, editService);

// Delete service route
router.delete("/delete/:id", deleteService);

export default router;
