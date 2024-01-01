import express from "express";
import {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.js";

const commentRouter = express.Router();
commentRouter.get("/", fetchComments);
commentRouter.post("/", createComment);
commentRouter.put("/:id", updateComment);
commentRouter.delete("/:id", deleteComment);
export default commentRouter;
