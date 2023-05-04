import { Schema, model } from "mongoose";
import serviceModel from "./service.js";

const projectSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
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
    ref: "Services",
    required: true,
  },
});

projectSchema.pre(["find", "findOne", "save", "create"], function () {
  this.populate({ path: "service_id", model: serviceModel });
});

const Model = model("project", projectSchema);
export default Model;
