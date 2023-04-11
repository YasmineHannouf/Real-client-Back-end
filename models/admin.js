import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter a valid email address"],
    unique: [true, "This email address is already used, Try another one"],
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
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
   }
});

const Admins = model("admins", adminSchema);
export default Admins;
