import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admins from "../models/Admin.js";


// Get All Admins

export const getAdmins = async (req, res, next) => {
  try {
    const admin = await Admins.find();
    res.status(200).json({message: admin});
  } catch (err) {
    res.json({ err: err.message });
  }
}

// Get Admin By id

export const getAdminByID = async (req, res, next) => {
  let id = req.params.id
  try {
    const admin = await Admins.find(id);
    if (!admin) return res.json("Admin Not Found");
    res.status(200).json({message: admin});
  } catch (err) {
    res.json({ error: err.message });
  }
}

// Register a new admin

export const registerAdmin = async (req, res, next) => {
  res.status(200).json({message: "Register Admin"});  
}

// Login an Admin 

export const loginAdmin = async (req, res, next) => {
  res.status(200).json({message: "Login Admin"});  
}
