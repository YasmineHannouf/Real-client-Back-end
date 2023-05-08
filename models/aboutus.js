import mongoose from "mongoose";

const aboutusSchema = mongoose.Schema({

  description: {
    type: String,
    required: true,
  },
});

const Aboutus = mongoose.model("Aboutus", aboutusSchema);
export default Aboutus;
