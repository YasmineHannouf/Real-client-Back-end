import mongoose from "mongoose";
const { Schema, model } = mongoose;

const kidsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },

    description: {
      type: String,
      required: [true, "Please enter a description"],
    },

    image: {
      type: String,
      required: [true, "Please enter a image"],
    },
  },

  {
    timestamps: true,
    collection: "kids",
  }
);

const Kids = model("Kids", kidsSchema);
export default Kids;
