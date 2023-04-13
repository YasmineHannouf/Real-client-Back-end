import Kids from "../models/kidsModel.js";

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
  let body = req.body;
  try {
    let newKid = new Kids(body);
    let response = await newKid.save();
    res.status(201).send({ success: true, response });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
};

// Update a Kid

const putKid = async (req, res) => {
  let id = req.params.id;
  let data = req.body;

  try {
    console.log("data", data);
    let response = await Kids.updateOne({ _id: id }, { $set: data });
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ error: true, error });
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