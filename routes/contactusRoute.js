import express from 'express';
import contactusController from "../controllers/contactusController.js";

const router  = express.Router()

router.post('/', contactusController.addContact);

export default router;