import express from "express";
const router = express.Router();
import KidControllers from "../controllers/kidsController.js";
import imageHandler from '../middlewares/imageHandler.js'
router.get("/", KidControllers.getAllKids);
router.get("/:id", KidControllers.getKid);
router.post("/", imageHandler, KidControllers.addKid);
router.put("/:id", imageHandler, KidControllers.putKid);
router.delete("/:id", KidControllers.deletekid);

export default router;
