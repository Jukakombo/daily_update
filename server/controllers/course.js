import mongoose from 'mongoose';
import Courses from '../models/courses.js';

//function fetch courses
export const fetchCourses = async (req, res) => {
  const allCourses = await Courses.find();
  try {
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// function create courses
export const createCourse = async (req, res) => {
  const course = req.body;
  const newCourse = new Courses(course);
  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

// function update the courses
export const updateCourse = async (req, res) => {
  const { id: _id } = req.body;
  const updateCourse = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No course found with such id:${_id}`);
  try {
    const updatedCourse = await Courses.findByIdAndUpdate(id, updateCourse, {
      new: true,
    });
    res.status(201).json(updatedCourse);
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

// delete courses function
export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No course found with such id:${_id}.`);
  await Courses.findByIdAndRemove(id);
  res.send('Course was sucessfully deleted.');
};
