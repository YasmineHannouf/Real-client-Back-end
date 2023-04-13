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

// register admin route
adminRouter.post('/register',registerAdmin);

// login admin route
adminRouter.post('/login',loginAdmin);

// get all admins route
adminRouter.get('/', checkAuth ,getAdmins);

// get admin by id route
adminRouter.get('/:id', checkAuth ,getAdminByID);

// edit admin by id route
adminRouter.patch('/edit/:id', checkAuth ,editAdmin);

// delete admin route
adminRouter.delete('/:id', checkAuth, deleteAdmin);

export default adminRouter;