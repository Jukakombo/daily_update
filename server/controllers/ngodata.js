import mongoose from 'mongoose';
import Ngodatas from '../models/ngo.js';
 

//function fetch courses
export const fetchNgodatas = async (req, res) => {
  const allNgoDatas = await Ngodatas.find();
  try {
    res.status(200).json(allNgoDatas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function create courses
export const createNgodata = async (req, res) => {
  const ngodata = req.body;
  const newNgodata = new Ngodatas(ngodata);
  try {
    await newNgodata.save();
    res.status(201).json(newNgodata);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

// function update the courses
export const updateNgodata = async (req, res) => {
  const { id: _id } = req.body;
  const updateNgodata = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No course found with such id:${_id}`);
  try {
    const updatedNgodata = await Ngodatas.findByIdAndUpdate(id, updateNgodata, {
      new: true,
    });
    res.status(201).json(updatedNgodata);
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

// delete courses function
export const deleteNgodata = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No course found with such id:${_id}.`);
  await Ngodatas.findByIdAndRemove(id);
  res.send('Course was sucessfully deleted.');
};
