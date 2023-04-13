import express from "express";

import eventContoller from '../controllers/eventContoller.js';
import imageHandler from "../middlewares/imageHandler.js";

const router = express.Router();

// Event Routes
router.get("/", eventContoller.getEvents);
router.get("/:id", eventContoller.getEvent);
router.post("/",imageHandler, eventContoller.addEvent);
router.put("/:id", eventContoller.editEvent);
router.delete("/:id", eventContoller.deleteEvent);

export default router;