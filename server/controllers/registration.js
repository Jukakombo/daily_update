import mongoose from "mongoose";
import Registrations from "../models/registration.js";

//function fetch Registrations
export const fetchRegistrations = async (req, res) => {
  const allRegistrations = await Registrations.find();
  try {
    res.status(200).json(allRegistrations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function create Registrations
export const createRegistration = async (req, res) => {
  const { formData, paymentResult } = req.body;

  const newRegistration = new Registrations(formData);
  try {
    await newRegistration.save();

    res.status(201).json(newRegistration);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};
// function update the Registrations
export const updateRegistration = async (req, res) => {
  const { id: _id } = req.body;
  const updateRegistration = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Registration found with such id:${id}`);
  try {
    const updatedRegistration = await Registrations.findByIdAndUpdate(
      id,
      updateRegistration,
      {
        new: true,
      }
    );
    res.status(201).json(updatedRegistration);
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

// delete Registrations function
export const deleteRegistration = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Registration found with such id:${_id}.`);
  await Registrations.findByIdAndRemove(id);
  res.send("Registration was sucessfully deleted.");
};
