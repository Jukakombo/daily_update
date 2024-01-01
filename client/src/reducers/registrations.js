import {
  CREATE_REGISTRATION,
  DELETE_REGISTRATION,
  FETCH_REGISTRATION,
  UPDATE_REGISTRATION,
} from "../constants/index";

const registration = (registration = [], action) => {
  switch (action.type) {
    case FETCH_REGISTRATION:
      return action.payload;
    case CREATE_REGISTRATION:
      localStorage.setItem(
        "registration",
        JSON.stringify({ ...action?.payload })
      );

      return [...registration, action.payload];

    case UPDATE_REGISTRATION:
      return registration.map((registration) =>
        registration._id === action.payload._id ? action.payload : registration
      );
    case DELETE_REGISTRATION:
      return registration.filter(
        (registration) => registration._id !== action.payload
      );

    default:
      return registration;
  }
};

export default registration;
