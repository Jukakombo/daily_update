// routes/contacts.js
import express from "express";
import {
  createContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", fetchContacts);
contactsRouter.post("/", createContact);
contactsRouter.patch("/:id", updateContact);
contactsRouter.delete("/:id", deleteContact);

export default contactsRouter;
