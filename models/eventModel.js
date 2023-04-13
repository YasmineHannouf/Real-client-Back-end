import { Schema, model } from "mongoose";
import serviceModel from "./service.js"
const eventSchema = Schema(
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
    service_id:{
        type: Schema.Types.ObjectId,
        ref: 'services',
        required: [true, "Please enter a service"]
    }
  },
  {
    collection: "events",
  }
);

eventSchema.pre(["find", "findOne", "save", "create"], function () {
    this.populate({ path: "service_id", model: serviceModel });
  });

const Event = model("event", eventSchema);
export default Event;

