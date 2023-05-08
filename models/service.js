import { Schema, model } from "mongoose";

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "Please enter an image"],
    },
  },
  {
    collection: "Services",
  }
);

const Model = model("service", serviceSchema);
export default Model;
