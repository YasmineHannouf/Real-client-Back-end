import express from "express";
import  { singleImage } from "../middlewares/imageHandler.js";
import {
  addService,
  deleteService,
  editService,
  getServices,
  getService,
} from "../controllers/service.js";
const router = express.Router();

// Get all services route
router.get("/", getServices);

// Get service route by id
router.get("/id/:id", getService);

// Add service route
router.post("/", singleImage, addService);

// Edit service route
router.patch("/edit/:id", singleImage, editService);

// Delete service route
router.delete("/delete/:id", deleteService);

export default router;
