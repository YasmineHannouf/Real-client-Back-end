import Kids from "../models/kidsModel.js";
import fs from "fs";
// Get All Kids

const getAllKids = async (req, res, next) => {
  try {
    let response = await Kids.find();
    res.status(200).send({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
};

// Get one Kid

const getKid = async (req, res, next) => {
  try {
    let { id } = req.params;
    let response = await Kids.findOne({ _id: id });
    res.status(200).send({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
};

// add a kid

const addKid = async (req, res, next) => {

  try {
    let newKid = new Kids({
      title: req.body.title,
      description: req.body.description,
      image: req.imagePath,
    });
    let response = await newKid.save();
    res.status(201).send({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
};

// Update a Kid

// const putKid = async (req, res) => {
//   let id = req.params.id;
//   let data = req.body;

//   try {
//     console.log("data", data);
//     let response = await Kids.updateOne({ _id: id }, { $set: data });
//     res.status(200).send({ success: true, response });
//   } catch (error) {
//     res.status(400).send({ error: true, error });
//   }
// };

// Edit a kid
const putKid = async (req, res) => {
  try {
    let update = {
      title: req.body.name,
      description: req.body.description,
      image: req.body.imagePath,
    };
    const kid = await Kids.findById(req.params.id);

    // check if the member does not exist
    if (!kid) {
      return res.status(404).json({ status: 404, message: "Kid Not Found" });
    }

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(member.image);
    }

    const updatedKid = await Kids.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedKid });
  } catch (error) {
    res.json({ err: error.message });
  }
};


// Delete a Kid
const deletekid = async (req, res, next) => {
  let id = req.params.id;
  try {
    let response = await Kids.findByIdAndRemove({ _id: id });
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
};

export default {
  getAllKids,
  getKid,
  addKid,
  putKid,
  deletekid,
};