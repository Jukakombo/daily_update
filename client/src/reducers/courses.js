import {
  FETCH__COURSES,
  CREATE__COURSE,
  UPDATE__COURSE,
  DELETE__COURSE,
} from "../constants/index";

const courses = (courses = [], action) => {
  switch (action.type) {
    case FETCH__COURSES:
      return action.payload;

    case CREATE__COURSE:
      return [...courses, action.payload];

    case UPDATE__COURSE:
      return courses.map((contact) =>
        contact._id === action.payload._id ? action.payload : contact
      );
    case DELETE__COURSE:
      return courses.filter((contact) => contact._id !== action.payload);
    default:
      return courses;
  }
};

export default courses;
