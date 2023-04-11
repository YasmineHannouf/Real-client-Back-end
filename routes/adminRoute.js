import express from "express";
const adminRouter = express.Router();

// importing controllers
import {
  registerAdmin,
  loginAdmin,
} from "../controllers/adminController.js"


adminRouter.post('/',registerAdmin);
adminRouter.post('/login',loginAdmin);


export default adminRouter;