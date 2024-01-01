import express from "express";
import {
  fetchRegistrations,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} from "../controllers/registration.js";

const RegistrationsRouter = express.Router();
RegistrationsRouter.get("/", fetchRegistrations);
RegistrationsRouter.post("/", createRegistration);
RegistrationsRouter.put("/:id", updateRegistration);
RegistrationsRouter.delete("/:id", deleteRegistration);
export default RegistrationsRouter;
