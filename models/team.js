import { Schema, model } from "mongoose";

const teamMemberSchema = Schema(
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
  },
  {
    collection: "TeamMember",
  }
);

const Model = model("teammember", teamMemberSchema);
export default Model;
