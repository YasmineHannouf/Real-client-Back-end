import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter a fullName"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
    },
    message: {
      type: String,
      required: [true, "Please enter a message"],
    },
  },
  {
    collection: "contacts",
  }
);

const Contact = model("Contact", contactSchema);
export default Contact;
