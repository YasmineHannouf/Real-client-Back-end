import express from "express";
const router = express.Router();
import KidControllers from "../controllers/kidsController.js";

router.get("/", KidControllers.getAllKids);
router.get("/:id", KidControllers.getKid);
router.post("/", KidControllers.addKid);
router.put("/:id", KidControllers.putKid);
router.delete("/:id", KidControllers.deletekid);

export default router;
