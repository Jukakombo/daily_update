import * as axios from "../api/index";

import {
  CREATE__COURSE,
  DELETE__COURSE,
  FETCH__COURSES,
  UPDATE__COURSE,
} from "../constants/index";

// get functions
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await axios.fetchCourses();
    dispatch({ type: FETCH__COURSES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//   create CONTACTion function
export const createCourse = (course) => async (dispatch) => {
  try {
    const { data } = await axios.createCourse(course);
    dispatch({ type: CREATE__COURSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// update CONTACT function
export const updateCourse = (updatedCourse, id) => async (dispatch) => {
  try {
    const { data } = await axios.updateCourse(updatedCourse, id);
    dispatch({ type: UPDATE__COURSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// delete CONTACT function
export const deleteCourse = (id) => async (dispatch) => {
  try {
    await axios.deleteCourse(id);
    dispatch({ type: DELETE__COURSE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
