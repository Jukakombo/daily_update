import * as axios from "../api/index";

import {
  CREATE_NGODATA,
  DELETE_NGODATA,
  FETCH_NGODATA,
  UPDATE_NGODATA,
} from "../constants/index";

// get functions
export const getNgodatas = () => async (dispatch) => {
  try {
    const { data } = await axios.fetchNgoDatas();
    dispatch({ type: FETCH_NGODATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//   create CONTACTion function
export const createNgodata = (NgodataData) => async (dispatch) => {
  const { history } = NgodataData;
  try {
    const { data } = await axios.createNgoData(NgodataData);
    dispatch({ type: CREATE_NGODATA, payload: data });
    history.push("/summary");
  } catch (error) {
    console.log(error);
  }
};

// update CONTACT function
export const updateNgodata = (updatedNgodata, id) => async (dispatch) => {
  try {
    const { data } = await axios.updateNgoData(updatedNgodata, id);
    dispatch({ type: UPDATE_NGODATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// delete CONTACT function
export const deleteNgodata = (id) => async (dispatch) => {
  try {
    await axios.deleteNgoData(id);
    dispatch({ type: DELETE_NGODATA, payload: id });
  } catch (error) {
    console.log(error);
  }
};
