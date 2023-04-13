import express from "express";
import contactusController from "../controllers/contactusController.js";

const router = express.Router();

// add new contact route
router.post("/", contactusController.addContact);

// get all contacts route
router.get("/", contactusController.getAll);

// get contact by id route
router.get("/:id", contactusController.getContactById);

// delete contact route
router.delete("/:id", contactusController.deleteContactById);

export default router;
