import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter a valid email address"],
      unique: [true, "This email address is already used, Try another one"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      min: 6,
    },
    username: {
      type: String,
      required: [true, "Please enter a username"],
      min: 2,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = model("admins", adminSchema);
export default Admin;
