import EventModel from "../models/eventModel.js";
import fs from "fs";
import serviceModel from "../models/service.js";
[];

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).json({ message: events });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Get event by id
export const getEvent = async (req, res) => {
  try {
    const event = await EventModel.findById(req.params.id);

    // check if event doesn't exist
    if (!event) return res.json("Event Not Found");

    res.status(200).json({ message: event });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Add a new event
export const addEvent = async (req, res) => {
  try {
    const service = await serviceModel.findById(req.body.service_id);

    // check if the service does not exist#
    if (!service)
      return res.json({ status: 404, message: "Service not found" });
    const newEvent = new EventModel({
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
      service_id: req.body.service_id,
    });

    newEvent.save();
    res.status(200).send({ success: true, message: newEvent });
  } catch (e) {
    return res.status(500).send(e);
  }
};

// Edit an event
export const editEvent = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      service: req.body.service,
    };
    const event = await EventModel.findById(req.params.id);

    // check if the event does not exist
    if (!event) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    if (req.body.image) {
      // delete the old image
      fs.unlinkSync(event.image);
      update.image = req.body.image;
    }

    const updatedEvent = await EventModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedEvent });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    await EventModel.findByIdAndDelete(req.params.id).then((response) => {
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

const eventContoller = {
  addEvent,
  deleteEvent,
  editEvent,
  getEvent,
  getEvents,
};
export default eventContoller;
