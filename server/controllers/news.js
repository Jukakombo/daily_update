import mongoose from "mongoose";
import News from "../models/news.js";

export const getNews = async (req, res) => {
  const allNews = await News.find();
  try {
    res.status(200).json(allNews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNews = async (req, res) => {
  const news = req.body;
  const newNews = new News(news);
  try {
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

export const updateNews = async (req, res) => {
  const { id: _id } = req.params;
  const updateNews = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No newsfound with such id:${_id}`);
  const newsTobeUpdated = await News.findByIdAndUpdate(id, updateNews, {
    new: true,
  });
  try {
    res.status(201).json(newsTobeUpdated);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

export const deleteNews = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No contact found with such id:${_id}.`);
  await News.findByIdAndRemove(id);
  res.send("contact was sucessfully deleted.");
};
