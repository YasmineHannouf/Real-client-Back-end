import express from "express";
const router = express.Router();
import KidControllers from "../controllers/kidsController.js";
import { singleImage } from "../middlewares/imageHandler.js";
router.get("/", KidControllers.getAllKids);
router.get("/:id", KidControllers.getKid);
router.post("/", singleImage, KidControllers.addKid);
router.put("/:id", singleImage, KidControllers.putKid);
router.delete("/:id", KidControllers.deletekid);

export default router;
