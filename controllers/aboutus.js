import aboutusModel from "../models/aboutus.js";

export const getAboutusById = async (req, res) => {
  try {
    const aboutus = await aboutusModel.findById(req.params.id);
    res.status(200).json({ message: aboutus });
  } catch (error) {
    res.json({ err: error.message });
  }
};

export const updateAboutus = async (req, res) => {
  try {
    let update = {
      image: req.imagePath,
      description: req.body.description,
    };
    const aboutus = await aboutusModel.findById(req.params.id);

    // check if the aboutus does not exist
    if (!aboutus) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

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
