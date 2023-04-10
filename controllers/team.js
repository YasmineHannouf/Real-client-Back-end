import teamMemberModel from "../models/team.js";
import fs from "fs";

// Get all members of the team
export const getMembers = async (req, res) => {
  try {
    const teams = await teamMemberModel.find();
    res.status(200).json({ message: teams });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Get member by id
export const getMember = async (req, res) => {
  try {
    const team = await teamMemberModel.findById(req.params.id);

    // check if team doesn't exist
    if (!team) return res.json("team Not Found");

    res.status(200).json({ message: team });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Add a new team member
export const addTeamMember = async (req, res) => {
  try {
    const newTeam = new teamMemberModel({
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
    });

    await newTeam.save((err, response) => {
      if (err) return res.json(err);
      res.send({
        status: 200,
        message: "Team member added successfuly",
        response,
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Edit a team member
export const editTeamMember = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      image: req.body.imagePath,
    };
    const member = await teamMemberModel.findById(req.params.id);

    // check if the member does not exist
    if (!member) {
      return res.status(404).send({ status: 404, message: "Not Found" });
    }

    // delete the old image
    if (req.body.imagePath) {
      fs.unlinkSync(member.image);
    }

    const updatedMember = await teamMemberModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );
    res.status(200).json({ data: updatedMember });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete a team member
export const deleteTeamMember = async (req, res) => {
  try {
    const deleteTeamMember = await teamMemberModel.findByIdAndDelete(
      req.params.id
    );

    // Check if the team member does not exist
    if (!deleteTeamMember)
      return res.json({ status: 404, message: "Not found" });

    res.status(202).json({ message: "team member deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
