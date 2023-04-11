import trainingModel from "../models/training.js";
import fs from "fs";

// Get all trainings
export const getTrainings = async (req, res) => {
  try {
    const trainings = await trainingModel.find();
    res.status(200).json({ message: trainings });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Get training by id
export const getTraining = async (req, res) => {
  try {
    const training = await trainingModel.findById(req.params.id);

    // check if training doesn't exist
    if (!training) return res.json("training Not Found");

    res.status(200).json({ message: training });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Add a new training
export const addTraining = async (req, res) => {
  try {
    const newTraining = new trainingModel({
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
      isGiven: req.body.isGiven,
      start_at: req.body.start_at,
      end_at: req.body.end_at,
    });

    await newTraining.save();
    res.status(200).json({ message: newTraining });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Edit a training
export const editTraining = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
      isGiven: req.body.isGiven,
      start_at: req.body.start_at,
      end_at: req.body.end_at,
    };
    const training = await trainingModel.findById(req.params.id);

    // check if the training does not exist
    if (!training) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(training.image);
    }

    const updatedTraining = await trainingModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedTraining });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete a training
export const deleteTraining = async (req, res) => {
  try {
    await trainingModel.findByIdAndDelete(req.params.id).then((response) => {
      if (!response) {
        res.status(404).send({ status: 404, message: "Not Found" });
      } else {
        fs.unlinkSync(response.image);
        res.status(200).send({ status: 200, message: "Deleted successfully" });
      }
    });
  } catch (error) {
    res.json({ err: error.message });
  }
};
