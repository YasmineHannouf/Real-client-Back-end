import express from "express";
import {
  addEvent,
  deleteEvent,
  editEvent,
  getEvent,
  getEvents,
} from "../controllers/eventContoller.js";
import { singleImage } from "../middlewares/imageHandler.js";
const router = express.Router();

// Event Routes
router.get("/", getEvents);
router.get("/:id", getEvent);
router.post("/", singleImage, addEvent);
router.patch("/:id", singleImage, editEvent);
router.delete("/:id", deleteEvent);

export default router;