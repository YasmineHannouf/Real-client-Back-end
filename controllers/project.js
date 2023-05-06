import projectModel from "../models/project.js";
import serviceModel from "../models/service.js";
import fs from "fs";
// Get all projects of the team
export const getProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.status(200).json({ message: projects });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Get project by id
export const getProject = async (req, res) => {
  try {
    const project = await projectModel.findById(req.params.id);

    // check if project doesn't exist
    if (!project) return res.json("Project Not Found");

    res.status(200).json({ message: project });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Add a new project
export const addProject = async (req, res) => {
  try {
    const service = await serviceModel.findById(req.body.service_id);

    // check if the service does not exist#
    if (!service)
      return res.json({ status: 404, message: "Service not found" });

    const newProject = new projectModel({
      title: req.body.title,
      description: req.body.description,
      image: req.imagePath,
      link: req.body.link,
      due: req.body.due,
      service_id: req.body.service_id,
    });

    await newProject.save();

    res.status(200).json({ message: newProject });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Edit a project
export const editProject = async (req, res) => {
  try {
    let update = {
      title: req.body.title,
      description: req.body.description,
      image: req.imagePath,
      link: req.body.link,
      due: req.body.due,
    };

    const updatedFields = {};
    if (req.body.title) updatedFields.title = req.body.title;
    if (req.body.description) updatedFields.description = req.body.description;
    if (req.body.imagePath) updatedFields.imagePath = req.body.imagePath;
    if (req.body.due) updatedFields.due = req.body.due;

    const project = await projectModel.findById(req.params.id);

    // check if the project does not exist
    if (!project) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // delete the old image 
    if (req.imagePath) {
      fs.unlinkSync(project.image);
    }

    const updatedProject = await projectModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedProject });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    await projectModel.findByIdAndDelete(req.params.id).then((response) => {
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
