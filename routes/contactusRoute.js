import express from 'express';
import contactusController from "../controllers/contactusController.js";

const router  = express.Router()

router.post('/', contactusController.addContact);

router.get('/', contactusController.getAll);

router.get('/:id', contactusController.getContactById);

router.delete('/:id', contactusController.deleteContactById);

export default router;