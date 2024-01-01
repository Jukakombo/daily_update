import express from "express";
import {
  createCourse,
  deleteCourse,
  fetchCourses,
  updateCourse,
} from "../controllers/course.js";

const coursesRouter = express.Router();
coursesRouter.get("/", fetchCourses);
coursesRouter.post("/", createCourse);
coursesRouter.put("/:id", updateCourse);
coursesRouter.delete("/:id", deleteCourse);
export default coursesRouter;
