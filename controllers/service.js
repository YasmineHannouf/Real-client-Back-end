import serviceModel from "../models/service.js";
import fs from "fs";

// Get all services of the service
export const getServices = async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.status(200).json({ message: services });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Get service by id
export const getService = async (req, res) => {
  try {
    const service = await serviceModel.findById(req.params.id);

    // check if service doesn't exist
    if (!service) return res.json("Service Not Found");

    res.status(200).json({ message: service });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Add a new service
export const addService = async (req, res) => {
  try {
    const newService = new serviceModel({
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
    });

    await newService.save();
    res.status(200).json({ message: newService });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Edit a service
export const editService = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
    };
    const service = await serviceModel.findById(req.params.id);

    // check if the service does not exist
    if (!service) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(service.image);
    }

    const updatedservice = await serviceModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedservice });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete a service
export const deleteService = async (req, res) => {
  try {
    await serviceModel.findByIdAndDelete(req.params.id).then((response) => {
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
