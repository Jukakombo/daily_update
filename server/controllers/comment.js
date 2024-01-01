import mongoose from 'mongoose';
import Comments from '../models/comment.js';

export const fetchComments = async (req, res) => {
  const allComments = await Comments.find();
  try {
    res.status(200).json(allComments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  const comment = req.body;
  const newComment = new Comments(comment);
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  const { id: _id } = req.params;
  const updateComment = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No Commentfound with such id:${_id}`);
  const commentTobeUpdated = await Comments.findByIdAndUpdate(
    id,
    updateComment,
    {
      new: true,
    }
  );
  try {
    res.status(201).json(commentTobeUpdated);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No id Comment is found with such id:${_id}`);
  await Comments.findByIdAndRemove(id);
  res.send('News was sucessfuly deleted');
};
