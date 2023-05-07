import express from "express";
import {
  addContact,
  deleteContactById,
  getAll,
  getContactById,
} from "../controllers/contactusController.js";

const router = express.Router();

// add new contact route
router.post("/", addContact);

// get all contacts route
router.get("/", getAll);

// get contact by id route
router.get("/:id", getContactById);

// delete contact route
router.delete("/:id", deleteContactById);

export default router;
