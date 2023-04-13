import mongoose from "mongoose";
const { Schema, model } = mongoose;

const kidsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
    type: String,
    },

  },

  {
    timestamps: true,
    collection: "kids",
  }
);

const Kids = model("Kids", kidsSchema);
export default Kids;
