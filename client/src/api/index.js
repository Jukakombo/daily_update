import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});

// contacts api call endpoints
export const fetchContacts = () => API.get("/contacts");
export const createContact = (contact) => API.post("/contacts", contact);

export const updateContact = (id, updatedContact) =>
  // make sure you get id first in the parameter
  API.patch(`/contacts/${id}`, updatedContact);

// export const updateContact = (id, updatedContact) =>
//   axios.patch(`${url}/${id}`, updatedContact);

export const deleteContact = (id) => API.delete(`/contacts/${id}`);
