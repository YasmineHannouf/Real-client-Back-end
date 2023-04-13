import express from "express";
const adminRouter = express.Router();
import { checkAuth } from "../middlewares/auth.js";

// importing controllers
import {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdminByID,
  deleteAdmin,
  editAdmin,
} from "../controllers/adminController.js"


adminRouter.post('/register',checkAuth,registerAdmin);
adminRouter.post('/login',loginAdmin);
adminRouter.get('/', checkAuth ,getAdmins);
adminRouter.get('/:id', checkAuth ,getAdminByID);
adminRouter.patch('/edit/:id', checkAuth ,editAdmin);
adminRouter.delete('/:id', checkAuth, deleteAdmin);

export default adminRouter;