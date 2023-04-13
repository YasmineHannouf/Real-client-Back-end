import mongoose from "mongoose";

const aboutusSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Aboutus = mongoose.model("Aboutus", aboutusSchema);
export default Aboutus;
