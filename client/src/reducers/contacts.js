import {
  FETCH_CONTACTS,
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "../constants/index";

const contacts = (contacts = [], action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.payload;

    case CREATE_CONTACT:
      return [...contacts, action.payload];

    case UPDATE_CONTACT:
      return contacts.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );

    case DELETE_CONTACT:
      return contacts.filter((contact) => contact._id !== action.payload);
    default:
      return contacts;
  }
};

export default contacts;
