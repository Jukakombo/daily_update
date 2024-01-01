import * as api from "../api/index";
import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from "../constants/index";

// fetch comments
export const fetchComments = () => async (dispatch) => {
  const { data } = await api.fetchComments();
  try {
    dispatch({ type: FETCH_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// createComments
export const createComment = (comment) => async (dispatch) => {
  const { data } = await api.createComment(comment);
  try {
    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// updateComments
export const updateComment = (id, updatedComment) => async (dispatch) => {
  const { data } = await api.updateComment(id, updatedComment);
  try {
    dispatch({ type: UPDATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// deleteComments
export const deleteComment = (id) => async (dispatch) => {
  const { data } = await api.deleteComment(id);
  try {
    dispatch({ type: DELETE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
