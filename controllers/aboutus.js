import  aboutus from "../models/aboutus.js"



export async function getAboutusById(req, res) {
  let { id } = req.params;
      aboutus.findOne({ _id: id }, (err, response) => {
          if (err) return next(err);
          res.status(200).send({ success: true, response });
      });
}

export async function createAboutus(req, res) {
  const newAboutus = new aboutus({
    image: req.body.imagePath,
    description: req.body.description
  });

  try {
    const data = await newAboutus.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const updateAboutus = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
    };
    const aboutus = await updateAboutus.findById(req.params.id);

    // check if the aboutus does not exist
    if (!aboutus) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(aboutus.image);
    }

    const updateAboutus = await updateAboutus.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedtext });
  } catch (error) {
    res.json({ err: error.message });
  }
};

