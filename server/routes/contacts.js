// routes/contacts.js
import express from "express";
import {
  createContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "../controllers/contacts.js";
import authenticateApiKey from "../middlewares/authMiddleware.js";

const contactsRouter = express.Router();

// Use the authentication middleware for all routes related to contacts
contactsRouter.use(authenticateApiKey);

contactsRouter.get("/", fetchContacts);
contactsRouter.post("/", createContact);
contactsRouter.patch("/:id", updateContact);
contactsRouter.delete("/:id", deleteContact);

export default contactsRouter;
