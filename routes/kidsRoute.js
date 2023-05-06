import express from "express";
const router = express.Router();
import {
  addKid,
  deletekid,
  getAllKids,
  getKid,
  putKid,
} from "../controllers/kidsController.js";
import { singleImage } from "../middlewares/imageHandler.js";

router.get("/", getAllKids);
router.get("/:id", getKid);
router.post("/", singleImage, addKid);
router.put("/:id", singleImage, putKid);
router.delete("/:id", deletekid);

export default router;
