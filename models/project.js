import { Schema, model } from "mongoose";

const projectSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  due: {
    type: Date,
    required: true,
  },
  service_id: {
    type: Schema.Types.ObjectId,
    ref: "Service",
  },
});

const Model = model("project", projectSchema);
export default Model;
