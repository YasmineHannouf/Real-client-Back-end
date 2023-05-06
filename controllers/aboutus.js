import aboutusModel from "../models/aboutus.js";

export const getAbout = async (req, res) => {
  try {
    const aboutus = await aboutusModel.find({});
    res.status(200).json({ message: aboutus });
  } catch (error) {
    res.json({ err: error.message });
  }
};

export const getAboutById = async (req, res) => {
  try {
    const about = await aboutusModel.findById(req.params.id);

    // check if about doesn't exist
    if (!about) return res.json("About Not Found");

    res.status(200).json({ message: about });
  } catch (error) {
    res.json({ err: error.message });
  }
};

export const updateAboutus = async (req, res) => {
  try {
    let update = {
      description: req.body.description,
      image: req.imagePath,
    };

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(aboutus.image);
    }

    const updateAboutus = await aboutusModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updateAboutus });
  } catch (error) {
    res.json({ err: error.message });
  }
};
