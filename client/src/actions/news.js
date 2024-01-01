import * as axios from "../api/index";
import {
  CREATE_NEWS,
  DELETE_NEWS,
  FETCH_NEWS,
  UPDATE_NEWS,
} from "../constants/index";

export const getNews = () => async (dispatch) => {
  try {
    const { data } = await axios.fetchNews();
    dispatch({ type: FETCH_NEWS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNews = (news) => async (dispatch) => {
  try {
    const { data } = await axios.createNews(news);
    dispatch({ type: CREATE_NEWS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateNews = (newsupdatedNews, id) => async (dispatch) => {
  try {
    const { data } = await axios.updateNews(id, newsupdatedNews);
    dispatch({ type: UPDATE_NEWS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNews = (id) => async (dispatch) => {
  try {
    await axios.deleteContact(id);
    dispatch({ type: DELETE_NEWS, payload: id });
  } catch (error) {
    console.log(error);
  }
};
