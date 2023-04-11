import { Schema, model } from "mongoose";

const trainingSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    image: {
      type: String,
      required: [true, "Please enter an image"],
    },
    isGiven: {
      type: Boolean,
      required: [true, "Please enter if it's givet or not"],
    },
    start_at: {
      type: Date,
      required: [true, "Please enter a start date"],
    },
    end_at: {
      type: Date,
      required: [true, "Please enter an end date"],
    },
  },
  {
    collection: "Training",
  }
);

const Model = model("training", trainingSchema);
export default Model;
