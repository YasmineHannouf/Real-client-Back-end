import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

// Get All Admins
export const getAdmins = async (req, res, next) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json({ admins: admin });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// Get Admin By id
export const getAdminByID = async (req, res, next) => {
  let id = req.params.id;
  try {
    const admin = await Admin.find({ _id: id });
    if (!admin) return res.json("Admin Not Found");
    res.status(200).json({ message: admin });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Register a new admin
export const registerAdmin = async (req, res, next) => {
  let { email, password, username } = req.body;

  // Fields Validation
  if (!email || !password || !username) {
    res.status(400).json({ message: "Please all fields are required" });
  }

  // Check if the admin is already registered
  const checkAdmin = await Admin.findOne({ email });
  if (checkAdmin) {
    res.status(400).json({ message: "This admin already exists" });
  }

  // Hashing the Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  // Create admin
  const admin = new Admin({
    username,
    email,
    password: hashPassword,
  });
  await admin.save();
  if (admin) {
    res
      .status(201)
      .json({ message: "Admin successfully registered", admin: admin });
  } else {
    res.status(400).json({ message: "Invalid admin data" });
  }
};

// Login an Admin
export const loginAdmin = async (req, res, next) => {
  // res.status(200).json({ message: "Login Admin" });
  let { email, password } = req.body;

  // Check and get the Admin
  const admin = await Admin.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      username: admin.username,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};

// Generate token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

// Edit an Admin
export const editAdmin = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    let newHashedPassword = bcrypt.hashSync(req.body.password, salt);
    let update = {
      username: req.body.username,
      email: req.body.email,
      password: newHashedPassword,
    };
    const admin = await Admin.findById(req.params.id);

    // check if the admin does not exist
    if (!admin) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res
      .status(200)
      .json({ message: "Admin Updated Successfully", changes: updatedAdmin });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete an admin
export const deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id).then((response) => {
      if (!response) {
        res.status(404).send({ status: 404, message: "Not Found" });
      } else {
        res
          .status(200)
          .send({ status: 200, message: "Admin Deleted successfully" });
      }
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};
