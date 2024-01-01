import * as axios from "../api/index";

import {
  CREATE_REGISTRATION,
  DELETE_REGISTRATION,
  FETCH_REGISTRATION,
  UPDATE_REGISTRATION,
} from "../constants/index";

// get functions
export const getRegistrations = () => async (dispatch) => {
  try {
    const { data } = await axios.fetchRegistrations();
    dispatch({ type: FETCH_REGISTRATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};
//   create CONTACTion function
export const createRegistration = (registrationData) => async (dispatch) => {
  // const { navigate } = registrationData;
  try {
    const { data } = await axios.creatRregistration(registrationData);
    dispatch({ type: CREATE_REGISTRATION, payload: data });
    // navigate("/");
  } catch (error) {
    console.log(error);
  }
};

// update CONTACT function
export const updateRegistration =
  (updatedRegistration, id) => async (dispatch) => {
    try {
      const { data } = await axios.updateRegistration(updatedRegistration, id);
      dispatch({ type: UPDATE_REGISTRATION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

// delete CONTACT function
export const deleteRegistration = (id) => async (dispatch) => {
  try {
    await axios.deleteRegistration(id);
    dispatch({ type: DELETE_REGISTRATION, payload: id });
  } catch (error) {
    console.log(error);
  }
};
