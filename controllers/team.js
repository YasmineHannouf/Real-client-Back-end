import teamMemberModel from "../models/team.js";
import fs from "fs";

// Get all members of the team
export const getMembers = async (req, res) => {
  try {
    const teams = await teamMemberModel.find();
    res.status(200).json({ message: teams });
  } catch (error) {
    res.json({ err: error.message });
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
    res.json({ err: error.message });
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

    await newTeam.save();
    res.status(200).json({ message: newTeam });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Edit a team member
export const editTeamMember = async (req, res) => {
  try {
    let update = {
      name: req.body.name,
      description: req.body.description,
      image: req.imagePath,
    };
    const member = await teamMemberModel.findById(req.params.id);

    // check if the member does not exist
    if (!member) {
      return res.status(404).json({ status: 404, message: "Not Found" });
    }

    // delete the old image
    if (req.imagePath) {
      fs.unlinkSync(member.image);
    }

    const updatedMember = await teamMemberModel.findByIdAndUpdate(
      req.params.id,
      { $set: update },
      {
        new: true,
      }
    );

    res.status(200).json({ message: updatedMember });
  } catch (error) {
    res.json({ err: error.message });
  }
};

// Delete a team member
export const deleteTeamMember = async (req, res) => {
  try {
    await teamMemberModel.findByIdAndDelete(req.params.id).then((response) => {
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
