import express from "express";
import {
  createNgodata,
  deleteNgodata,
  fetchNgodatas,
  updateNgodata,
} from "../controllers/ngodata.js";
const ngoRouter = express.Router();
ngoRouter.get("/", fetchNgodatas);
ngoRouter.post("/", createNgodata);
ngoRouter.put("/:id", updateNgodata);
ngoRouter.delete("/:id", deleteNgodata);
export default ngoRouter;
